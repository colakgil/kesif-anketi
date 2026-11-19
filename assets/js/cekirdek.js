/*
 * Anketin arayüzden bağımsız mantığı: adım akışı, doğrulama ve gönderilecek verinin hazırlanması.
 * Tarayıcıda window.KesifCekirdek, Node'da module.exports olarak kullanılır (testler için).
 */
(function (kok, fabrika) {
  if (typeof module === "object" && module.exports) module.exports = fabrika();
  else kok.KesifCekirdek = fabrika();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  var SEMA = "s4con-kesif/1";
  var TAM_OTOMATIK = "tam-otomatik";
  var ACIKLAMA_SINIRI = 2000;
  var MUSTERI_SINIRI = 80;
  var OZEL_IS_SINIRI = 120;
  var OZEL_IS_ADEDI = 5; // bölüm başına

  function duzOperasyonlar(anket) {
    var liste = [];
    anket.gruplar.forEach(function (grup) {
      grup.operasyonlar.forEach(function (op) {
        liste.push({ id: op.id, ad: op.ad, grup: grup.ad, ozel: !!op.ozel });
      });
    });
    return liste;
  }

  // Kullanıcının bölümlere kendi eklediği işleri hazır listeyle birleştirir; geri kalan her şey bu birleşik anketle çalışır.
  function birlesikAnket(anket, ozel) {
    if (!anket) return anket;
    return {
      id: anket.id, ad: anket.ad, aciklama: anket.aciklama,
      gruplar: anket.gruplar.map(function (grup, sira) {
        var eklenen = (ozel || []).filter(function (o) { return o.grup === sira; })
          .map(function (o) { return { id: o.id, ad: o.ad, ozel: true }; });
        return { ad: grup.ad, operasyonlar: grup.operasyonlar.concat(eklenen) };
      })
    };
  }

  // Bir bölüme kullanıcının yazdığı işi ekler ve seçili yapar. Eklenemezse nedenini döndürür.
  function ozelEkle(durum, anket, grupSira, metin) {
    var ad = String(metin || "").replace(/\s+/g, " ").trim();
    if (ad.length < 3) return "Eklemek için işi birkaç kelimeyle yazın.";
    if (ad.length > OZEL_IS_SINIRI) return "En fazla " + OZEL_IS_SINIRI + " karakter yazabilirsiniz.";
    var grup = birlesikAnket(anket, durum.ozel).gruplar[grupSira];
    if (!grup) return "Bölüm bulunamadı.";
    var ayni = grup.operasyonlar.filter(function (op) {
      return op.ad.toLocaleLowerCase("tr") === ad.toLocaleLowerCase("tr");
    })[0];
    if (ayni) {
      if (durum.secili.indexOf(ayni.id) === -1) durum.secili.push(ayni.id);
      return null;
    }
    if (durum.ozel.filter(function (o) { return o.grup === grupSira; }).length >= OZEL_IS_ADEDI) {
      return "Bir bölüme en fazla " + OZEL_IS_ADEDI + " iş ekleyebilirsiniz.";
    }
    durum.ozelSayac = (durum.ozelSayac || 0) + 1;
    var id = "ozel-" + durum.ozelSayac;
    durum.ozel.push({ id: id, grup: grupSira, ad: ad });
    durum.secili.push(id);
    return null;
  }

  // Seçilen operasyonları, tıklanma sırasına değil anketteki sıraya göre döndürür.
  function seciliSirali(durum, anket) {
    return duzOperasyonlar(anket)
      .map(function (op) { return op.id; })
      .filter(function (id) { return durum.secili.indexOf(id) !== -1; });
  }

  function oncelikGerekli(durum, anket, ayar) {
    return seciliSirali(durum, anket).length > ayar.detayEnCok;
  }

  // Detay soruları sorulacak operasyonlar: az seçim varsa hepsi, çoksa kullanıcının öne aldıkları.
  function detayIdleri(durum, anket, ayar) {
    var secili = seciliSirali(durum, anket);
    if (secili.length <= ayar.detayEnCok) return secili;
    return secili.filter(function (id) { return durum.oncelik.indexOf(id) !== -1; });
  }

  function adimlar(durum, anket, ayar) {
    var liste = ["giris"];
    if (!anket) return liste;
    liste.push("operasyonlar");
    if (oncelikGerekli(durum, anket, ayar)) liste.push("oncelik");
    detayIdleri(durum, anket, ayar).forEach(function (id) { liste.push("detay:" + id); });
    liste.push("ozet"); // serbest açıklama da bu ekrandadır
    return liste;
  }

  function gecerliSecenek(soru, secenekId) {
    return soru.secenekler.some(function (s) { return s.id === secenekId; });
  }

  // Bir operasyonun detayında cevaplanması gereken sorular (tam otomatikse yalnızca ilki).
  function gerekliSorular(cevap, sorular) {
    if (cevap && cevap[sorular[0].id] === TAM_OTOMATIK) return [sorular[0]];
    return sorular;
  }

  function eksikSorular(cevap, sorular) {
    cevap = cevap || {};
    return gerekliSorular(cevap, sorular).filter(function (soru) {
      return !gecerliSecenek(soru, cevap[soru.id]);
    });
  }

  // Adımdan ileri gidilemiyorsa kullanıcıya gösterilecek mesajı, gidilebiliyorsa null döndürür.
  function adimHatasi(adim, durum, anket, sorular, ayar) {
    if (adim === "giris") {
      return anket ? null : "Devam etmek için departmanınızı seçin.";
    }
    if (adim === "operasyonlar") {
      return seciliSirali(durum, anket).length > 0
        ? null
        : "Devam etmek için en az bir iş seçin.";
    }
    if (adim === "oncelik") {
      var adet = detayIdleri(durum, anket, ayar).length;
      if (adet < ayar.detayEnAz) return "Lütfen en az " + ayar.detayEnAz + " iş seçin.";
      if (adet > ayar.detayEnCok) return "En fazla " + ayar.detayEnCok + " iş seçebilirsiniz.";
      return null;
    }
    if (adim.indexOf("detay:") === 0) {
      var eksik = eksikSorular(durum.cevaplar[adim.slice(6)], sorular);
      return eksik.length ? "Lütfen tüm soruları cevaplayın: " + eksik[0].kisaAd + "." : null;
    }
    if (adim === "ozet") {
      var onceki = adimlar(durum, anket, ayar).filter(function (a) { return a !== "ozet"; });
      for (var i = 0; i < onceki.length; i++) {
        var hata = adimHatasi(onceki[i], durum, anket, sorular, ayar);
        if (hata) return hata;
      }
      if ((durum.aciklama || "").length > ACIKLAMA_SINIRI) {
        return "Açıklama en fazla " + ACIKLAMA_SINIRI + " karakter olabilir.";
      }
      var musteri = (durum.musteri || "").trim();
      if (!musteri) return "Göndermeden önce lütfen şirketinizin adını yazın.";
      if (musteri.length > MUSTERI_SINIRI) return "Şirket adı en fazla " + MUSTERI_SINIRI + " karakter olabilir.";
      if (!epostaGecerli(durum.eposta)) return "Lütfen geçerli bir e-posta adresi yazın.";
      return null;
    }
    return null;
  }

  function secenekBul(soru, secenekId) {
    for (var i = 0; i < soru.secenekler.length; i++) {
      if (soru.secenekler[i].id === secenekId) return soru.secenekler[i];
    }
    return null;
  }

  // Gönderilecek yapılandırılmış yanıt. Kimlik bilgisi içermez.
  function yukOlustur(girdi) {
    var durum = girdi.durum, anket = girdi.anket, sorular = girdi.sorular, ayar = girdi.ayar;
    var simdi = girdi.simdi || new Date();
    var detaylar = detayIdleri(durum, anket, ayar);
    var operasyonlar = duzOperasyonlar(anket).filter(function (op) {
      return durum.secili.indexOf(op.id) !== -1;
    });

    return {
      sema: SEMA,
      yanitNo: girdi.yanitNo,
      gonderimZamani: simdi.toISOString(),
      musteri: (durum.musteri || "").trim(),
      eposta: (durum.eposta || "").trim().toLowerCase(),
      departman: { id: anket.id, ad: anket.ad },
      doldurmaSuresiSn: durum.baslangic
        ? Math.max(0, Math.round((simdi.getTime() - durum.baslangic) / 1000))
        : null,
      secilenOperasyonlar: operasyonlar.map(function (op) {
        return {
          id: op.id,
          ad: op.ad,
          grup: op.grup,
          ozel: op.ozel,
          detaylandirildi: detaylar.indexOf(op.id) !== -1
        };
      }),
      detaylar: operasyonlar
        .filter(function (op) { return detaylar.indexOf(op.id) !== -1; })
        .map(function (op) {
          var cevap = durum.cevaplar[op.id] || {};
          var gerekli = gerekliSorular(cevap, sorular);
          var satir = { operasyonId: op.id, operasyonAd: op.ad };
          sorular.forEach(function (soru) {
            var secenek = gerekli.indexOf(soru) !== -1 ? secenekBul(soru, cevap[soru.id]) : null;
            satir[soru.id] = secenek ? { id: secenek.id, ad: secenek.ad } : null;
          });
          return satir;
        }),
      serbestAciklama: (durum.aciklama || "").trim()
    };
  }

  // Servisteki denetimle aynı kural.
  function epostaGecerli(eposta) {
    var e = String(eposta || "").trim();
    return e.length <= 120 && /^[^\s@<>"]+@[^\s@<>"]+\.[a-z]{2,}$/i.test(e);
  }

  function adresGecerli(adres) {
    return typeof adres === "string" && /^https:\/\/[^\s/]+\/\S+$/.test(adres.trim());
  }

  return {
    SEMA: SEMA,
    TAM_OTOMATIK: TAM_OTOMATIK,
    ACIKLAMA_SINIRI: ACIKLAMA_SINIRI,
    MUSTERI_SINIRI: MUSTERI_SINIRI,
    OZEL_IS_SINIRI: OZEL_IS_SINIRI,
    birlesikAnket: birlesikAnket,
    ozelEkle: ozelEkle,
    duzOperasyonlar: duzOperasyonlar,
    seciliSirali: seciliSirali,
    oncelikGerekli: oncelikGerekli,
    detayIdleri: detayIdleri,
    adimlar: adimlar,
    gerekliSorular: gerekliSorular,
    eksikSorular: eksikSorular,
    adimHatasi: adimHatasi,
    yukOlustur: yukOlustur,
    epostaGecerli: epostaGecerli,
    adresGecerli: adresGecerli
  };
});
