/* Anket arayüzü: adım adım akış, seçimlerin korunması ve gönderim servisine (servis/eposta-gonder.gs) gönderim. */
(function () {
  "use strict";

  var AYAR = window.KESIF_AYAR;
  var ANKETLER = window.KESIF_ANKETLER;
  var SORULAR = window.KESIF_SORULAR;
  var C = window.KesifCekirdek;

  var DURUM_ANAHTARI = "s4con-kesif-durum-v1";
  var SON_GONDERIM_ANAHTARI = "s4con-kesif-son-gonderim";
  var kok = document.getElementById("uygulama");

  var durum = durumYukle() || yeniDurum();
  var gonderiliyor = false;
  var gonderimHatasi = null; // { baslik, metin }
  var gonderildi = false;


  /* ---------- durum ---------- */

  function yeniDurum() {
    return { adim: "giris", departman: null, secili: [], oncelik: [], cevaplar: {}, ozel: [], ozelSayac: 0, aciklama: "", musteri: "", eposta: "", baslangic: null, yanitNo: null };
  }

  function durumYukle() {
    try {
      var d = JSON.parse(localStorage.getItem(DURUM_ANAHTARI));
      if (!d || typeof d !== "object" || !Array.isArray(d.secili) || !Array.isArray(d.oncelik) || !d.cevaplar) return null;
      if (d.departman && !ANKETLER[d.departman]) return null;
      if (!Array.isArray(d.ozel)) d.ozel = [];
      return d;
    } catch (e) {
      return null;
    }
  }

  function durumKaydet() {
    try { localStorage.setItem(DURUM_ANAHTARI, JSON.stringify(durum)); } catch (e) { /* özel sekmede saklama kapalı olabilir */ }
  }

  function durumSil() {
    try { localStorage.removeItem(DURUM_ANAHTARI); } catch (e) { /* yok sayılır */ }
  }

  function anket() { return durum.departman ? C.birlesikAnket(ANKETLER[durum.departman], durum.ozel) : null; }
  function adimlar() { return C.adimlar(durum, anket(), AYAR); }

  function yanitNoUret() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return "y-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
  }

  /* ---------- yardımcılar ---------- */

  function kacis(metin) {
    return String(metin).replace(/[&<>"']/g, function (k) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[k];
    });
  }

  function opBul(id) {
    var liste = C.duzOperasyonlar(anket());
    for (var i = 0; i < liste.length; i++) if (liste[i].id === id) return liste[i];
    return null;
  }

  /* ---------- ekranlar ---------- */

  function hap(nitelik, id, ad, secili, coklu) {
    return '<button type="button" class="secenek' + (coklu ? " coklu" : "") + '" ' + nitelik + '="' + kacis(id) + '" aria-pressed="' + (secili ? "true" : "false") + '">' +
      kacis(ad) + "</button>";
  }

  function ekranBasligi(etiket, baslik, aciklama) {
    return '<div class="ekran-baslik"><span class="ust-etiket">' + kacis(etiket) + "</span>" +
      '<h1 class="baslik" tabindex="-1">' + kacis(baslik) + "</h1>" +
      (aciklama ? '<p class="aciklama">' + kacis(aciklama) + "</p>" : "") + "</div>";
  }

  function girisEkrani() {
    // Departmanlar "alan"larına göre başlık altında toplanır (ayardaki sırayla).
    var alanlar = [];
    AYAR.departmanlar.filter(function (id) { return ANKETLER[id]; }).forEach(function (id) {
      var a = ANKETLER[id], son = alanlar[alanlar.length - 1];
      if (!son || son.ad !== (a.alan || "")) alanlar.push(son = { ad: a.alan || "", dugmeler: "" });
      son.dugmeler += '<button type="button" class="departman" data-departman="' + kacis(id) + '">' +
        "<strong>" + kacis(a.ad) + "</strong><span>" + kacis(a.aciklama) + '</span><i aria-hidden="true">→</i></button>';
    });
    var departmanlar = '<div class="dep-alanlar">' + alanlar.map(function (alan) {
      return '<section class="dep-alan">' + (alan.ad ? '<h3 class="alan-baslik">' + kacis(alan.ad) + "</h3>" : "") +
        '<div class="departmanlar">' + alan.dugmeler + "</div></section>";
    }).join("") + "</div>";

    return '<div class="giris"><section class="tanitim">' +
      '<span class="ust-etiket">Dijital İş Gücü Keşfi</span>' +
      '<h1 class="baslik" tabindex="-1">İşinizi kolaylaştıracak çözümleri birlikte keşfedelim.</h1>' +
      '<p class="aciklama">Günlük çalışmalarınızda zaman alan işlemleri anlamak ve size özel dijital çözümler geliştirmek için kısa bir anket hazırladık. ' +
      "Anket yaklaşık 5–7 dakika sürer. Soruların büyük çoğunluğunu yalnızca seçeneklere tıklayarak cevaplayabilirsiniz.</p>" +
      '<ul class="vaatler"><li><b>5–7 dk</b><span>yaklaşık süre</span></li><li><b>3 adım</b><span>seç, detaylandır, gönder</span></li><li><b>Tek dokunuş</b><span>çoğu soru tıklamayla</span></li></ul>' +
      '</section><section class="kart baslangic">' +
      '<h2 class="kart-baslik">Departmanınızı seçin, hemen başlayalım</h2>' +
      departmanlar + "</section>" +
      '<div class="not veri-notu"><strong>Verileriniz hakkında</strong><ul>' +
      "<li>Yanıtlar yalnızca departmanınızdaki manuel iş yükünü anlamak ve otomasyon önerileri hazırlamak için kullanılır.</li>" +
      "<li>Son adımda şirketinizin adı ve e-posta adresiniz istenir; adresiniz yalnızca gerekirse size dönüş yapmak için kullanılır. Başka kişisel bilgi istenmez.</li>" +
      "<li>Yanıtlara yalnızca S4CON proje ekibi erişir ve yanıtlar en fazla " + kacis(AYAR.saklamaSuresi) + " saklanır.</li>" +
      "</ul></div></div>";
  }

  function operasyonlarEkrani() {
    var a = anket();
    var gruplar = a.gruplar.map(function (grup, sira) {
      return '<section class="kart grup"><h2 class="grup-baslik">' + kacis(grup.ad) + '</h2><div class="haplar">' +
        grup.operasyonlar.map(function (op) {
          return hap("data-op", op.id, op.ad, durum.secili.indexOf(op.id) !== -1, true);
        }).join("") + "</div>" +
        '<div class="ekle"><input type="text" class="metin-kutusu" data-ekle-girdi="' + sira + '" maxlength="' + C.OZEL_IS_SINIRI + '" autocomplete="off" ' +
        'aria-label="' + kacis(grup.ad) + ' bölümüne kendi işinizi ekleyin" placeholder="Listede yoksa siz yazın…">' +
        '<button type="button" class="dugme ikincil" data-ekle="' + sira + '">Ekle</button></div></section>';
    }).join("");

    return ekranBasligi(a.ad, "Hangi işler sizin veya ekibinizin zamanını alıyor?",
      "Size uyanlara dokunmanız yeterli. SAP'de zaten kendiliğinden yürüyen işleri geçebilirsiniz.") +
      '<div class="gruplar">' + gruplar + "</div>";
  }

  function sayacMetni() {
    if (durum.adim === "operasyonlar") return C.seciliSirali(durum, anket()).length + " iş seçildi";
    if (durum.adim === "oncelik") return C.detayIdleri(durum, anket(), AYAR).length + " / " + AYAR.detayEnCok + " seçildi";
    return "";
  }

  function oncelikEkrani() {
    var secili = C.seciliSirali(durum, anket());
    var dolu = C.detayIdleri(durum, anket(), AYAR).length >= AYAR.detayEnCok;
    var dugmeler = secili.map(function (id) {
      var isaretli = durum.oncelik.indexOf(id) !== -1;
      var html = hap("data-oncelik", id, opBul(id).ad, isaretli, true);
      return !isaretli && dolu ? html.replace("<button ", "<button disabled ") : html;
    }).join("");

    return ekranBasligi("Neredeyse bitti", "En çok zamanınızı alan " + AYAR.detayEnAz + "–" + AYAR.detayEnCok + " işi seçin",
      "Anketi kısa tutmak için yalnızca bunlar hakkında birkaç şey soracağız. Diğer " + "seçimleriniz de kaydedilecek.") +
      '<div class="kart"><div class="haplar">' + dugmeler + "</div></div>";
  }

  function detayEkrani(opId) {
    var op = opBul(opId);
    var detaylar = C.detayIdleri(durum, anket(), AYAR);
    var cevap = durum.cevaplar[opId] || {};
    var atlandi = cevap[SORULAR[0].id] === C.TAM_OTOMATIK;

    function soruHtml(soru) {
      return '<div class="soru"><h2 class="soru-baslik" id="soru-' + soru.id + '">' + kacis(soru.baslik) + "</h2>" +
        '<div class="haplar" role="group" aria-labelledby="soru-' + soru.id + '" data-soru="' + soru.id + '">' +
        soru.secenekler.map(function (s) {
          return hap("data-secenek", s.id, s.ad, cevap[soru.id] === s.id, false);
        }).join("") + "</div></div>";
    }

    return ekranBasligi("İş " + (detaylar.indexOf(opId) + 1) + " / " + detaylar.length + " · " + op.grup, op.ad,
      "Birkaç dokunuşla tamamlanır.") +
      '<div class="kart sorular">' + soruHtml(SORULAR[0]) +
      '<p class="not" id="atlandi-notu"' + (atlandi ? "" : " hidden") + ">Bu iş tamamen otomatik yürüdüğü için başka bir şey sormuyoruz.</p>" +
      '<div class="icerik-aktar" id="diger-sorular"' + (atlandi ? " hidden" : "") + ">" + SORULAR.slice(1).map(soruHtml).join("") + "</div></div>";
  }

  function ozetEkrani() {
    var a = anket();
    var yuk = yukHazirla(false);
    var detayli = {};
    yuk.detaylar.forEach(function (d) { detayli[d.operasyonId] = d; });

    var satirlar = yuk.secilenOperasyonlar.map(function (op) {
      var d = detayli[op.id];
      var detay = d
        ? SORULAR.filter(function (s) { return d[s.id]; }).map(function (s) { return kacis(d[s.id].ad); }).join(" · ")
        : "Seçildi";
      return '<div class="ozet-satir"><div class="ozet-ad">' + kacis(op.ad) + '</div><div class="ozet-detay">' + detay + "</div></div>";
    }).join("");

    var hata = gonderimHatasi
      ? '<div class="hata-kutu" role="alert"><strong>' + kacis(gonderimHatasi.baslik) + "</strong>" + kacis(gonderimHatasi.metin) +
        '<br><button type="button" class="baglanti" data-indir>Yanıtımı dosya olarak indir</button></div>'
      : "";

    return ekranBasligi("Son adım", "Son bir göz atın ve gönderin") + hata +
      '<div class="ozet-izgara">' +
      '<section class="kart"><div class="ozet-baslik"><h2>' + kacis(a.ad) + " · " + yuk.secilenOperasyonlar.length + ' iş</h2><button type="button" class="baglanti" data-duzenle="operasyonlar">Düzenle</button></div>' +
      satirlar + "</section>" +
      '<div class="ozet-sag">' +
      '<section class="kart alanlar"><div class="alan"><label for="musteri-ad">Şirketinizin adı</label>' +
      '<input type="text" class="metin-kutusu" id="musteri-ad" maxlength="' + C.MUSTERI_SINIRI + '" autocomplete="organization" placeholder="Çalıştığınız şirket" value="' + kacis(durum.musteri || "") + '"></div>' +
      '<div class="alan"><label for="eposta">E-posta adresiniz</label>' +
      '<input type="email" class="metin-kutusu" id="eposta" maxlength="120" autocomplete="email" inputmode="email" placeholder="ad@sirket.com" value="' + kacis(durum.eposta || "") + '">' +
      '<p class="kucuk">Yanıtınız destek@s4con.com.tr adresine iletilir. Adresinizi yalnızca gerekirse size dönüş yapmak için kullanırız.</p></div></section>' +
      '<section class="kart"><div class="ozet-baslik"><h2><label for="aciklama">Listede olmayan, zamanınızı alan başka işler var mı?</label></h2><span class="rozet">İsteğe bağlı</span></div>' +
      '<p class="ozet-detay">Yukarıdaki seçeneklerde bulunmayan, manuel yürüttüğünüz veya otomatikleştirilmesini istediğiniz işlemleri kısaca anlatabilirsiniz.</p>' +
      '<textarea id="aciklama" maxlength="' + C.ACIKLAMA_SINIRI + '" placeholder="Örneğin: Her pazartesi üç ayrı rapordan elle özet tablo çıkarıyoruz…">' + kacis(durum.aciklama) + "</textarea>" +
      '<p class="kucuk">Lütfen gizli finansal veri, kişisel veri, hesap numarası veya şifre yazmayın.</p></section>' +
      "</div></div>" +
      '<div class="tuzak" aria-hidden="true"><label>Bu alanı boş bırakın<input type="text" id="website" name="website" tabindex="-1" autocomplete="off"></label></div>';
  }

  function tesekkurEkrani() {
    return '<div class="kart tesekkur"><div class="tesekkur-isaret" aria-hidden="true">✓</div>' +
      '<h1 class="baslik" tabindex="-1">Teşekkür ederiz!</h1>' +
      '<p class="aciklama">Yanıtlarınız S4CON ekibine ulaştı. Paylaştıklarınız, işinizi kolaylaştıracak dijital çözümleri belirlememize yardımcı olacak.</p>' +
      '<button type="button" class="dugme ikincil" data-yeni>Yeni bir yanıt doldur</button></div>';
  }

  /* ---------- çizim ---------- */

  // Kullanıcıya adım sayısı yerine üç aşama gösterilir.
  function asamaGostergesi(adim) {
    var aktif = adim === "ozet" ? 2 : adim.indexOf("detay:") === 0 ? 1 : 0;
    return '<ol class="asamalar" aria-label="Anket aşamaları">' + ["İşleri seçin", "Kısaca detaylandırın", "Gönderin"].map(function (ad, i) {
      return '<li class="' + (i < aktif ? "tamam" : i === aktif ? "aktif" : "") + '"' + (i === aktif ? ' aria-current="step"' : "") + ">" +
        "<b>" + (i < aktif ? "✓" : i + 1) + "</b><span>" + ad + "</span></li>";
    }).join("") + "</ol>";
  }

  function ciz(odakla) {
    if (gonderildi) {
      kok.innerHTML = tesekkurEkrani();
      if (odakla) baslikOdakla();
      return;
    }

    var liste = adimlar();
    if (liste.indexOf(durum.adim) === -1) durum.adim = liste.length > 1 ? "operasyonlar" : "giris";
    var sira = liste.indexOf(durum.adim);
    var adim = durum.adim;

    if (adim === "giris") {
      kok.innerHTML = girisEkrani();
    } else {
      var icerik =
        adim === "operasyonlar" ? operasyonlarEkrani() :
        adim === "oncelik" ? oncelikEkrani() :
        adim === "ozet" ? ozetEkrani() :
        detayEkrani(adim.slice(6));

      var ileriYazi = adim === "ozet" ? (gonderiliyor ? "Gönderiliyor…" : (gonderimHatasi ? "Yeniden dene" : "Gönder")) :
        adim.indexOf("detay:") === 0 && liste[sira + 1] === "ozet" ? "Son adıma geç" : "Devam";
      kok.innerHTML = asamaGostergesi(adim) + icerik +
        '<nav class="gezinme" aria-label="Anket gezinme"><div class="gezinme-ic">' +
        '<p class="uyari" id="uyari" role="alert"></p><div class="gezinme-dugmeler">' +
        '<button type="button" class="dugme ikincil" data-git="geri"' + (gonderiliyor ? " disabled" : "") + ">Geri</button>" +
        '<p class="sayac" id="sayac" aria-live="polite">' + sayacMetni() + "</p>" +
        '<button type="button" class="dugme ana" ' + (adim === "ozet" ? "data-gonder" : 'data-git="ileri"') + (gonderiliyor ? " disabled" : "") + ">" + ileriYazi + "</button>" +
        "</div></div></nav>";
    }

    durumKaydet();
    if (odakla) baslikOdakla();
  }

  function baslikOdakla() {
    window.scrollTo(0, 0);
    var baslik = kok.querySelector(".baslik");
    if (baslik) baslik.focus({ preventScroll: true });
  }

  function uyar(metin) {
    var el = document.getElementById("uyari");
    if (el) el.textContent = metin || "";
  }

  function adimaGit(adim) {
    durum.adim = adim;
    gonderimHatasi = null;
    ciz(true);
  }

  /* ---------- etkileşim ---------- */

  function listedeDegistir(liste, id) {
    var i = liste.indexOf(id);
    if (i === -1) liste.push(id); else liste.splice(i, 1);
    return i === -1;
  }

  kok.addEventListener("click", function (olay) {
    var hedef = olay.target.closest("button");
    if (!hedef || hedef.disabled) return;
    var v = hedef.dataset;

    if (v.departman) {
      // Departmana dokunmak anketi başlatır; aynı departmana dönülürse seçimler korunur.
      if (durum.departman !== v.departman) {
        durum = yeniDurum();
        durum.departman = v.departman;
      }
      if (!durum.baslangic) durum.baslangic = Date.now();
      adimaGit("operasyonlar");
    } else if (v.op) {
      var eklendi = listedeDegistir(durum.secili, v.op);
      if (!eklendi) durum.oncelik = durum.oncelik.filter(function (id) { return id !== v.op; });
      hedef.setAttribute("aria-pressed", eklendi);
      document.getElementById("sayac").textContent = sayacMetni();
      uyar("");
      durumKaydet();
    } else if (v.ekle) {
      ozelEkle(Number(v.ekle));
    } else if (v.oncelik) {
      listedeDegistir(durum.oncelik, v.oncelik);
      ciz(false);
    } else if (v.secenek) {
      detayCevapla(hedef);
    } else if (v.git === "ileri") {
      ileri();
    } else if (v.git === "geri") {
      var liste = adimlar();
      adimaGit(liste[Math.max(0, liste.indexOf(durum.adim) - 1)]);
    } else if (v.duzenle) {
      adimaGit(v.duzenle);
    } else if ("gonder" in v) {
      gonder();
    } else if ("indir" in v) {
      indir();
    } else if ("yeni" in v) {
      gonderildi = false;
      durum = yeniDurum();
      ciz(true);
    }
  });

  kok.addEventListener("input", function (olay) {
    if (olay.target.id === "aciklama") durum.aciklama = olay.target.value;
    else if (olay.target.id === "musteri-ad") { durum.musteri = olay.target.value; uyar(""); }
    else if (olay.target.id === "eposta") { durum.eposta = olay.target.value; uyar(""); }
    else return;
    durumKaydet();
  });

  kok.addEventListener("keydown", function (olay) {
    if (olay.key === "Enter" && olay.target.dataset && olay.target.dataset.ekleGirdi) {
      olay.preventDefault();
      ozelEkle(Number(olay.target.dataset.ekleGirdi));
    }
  });

  // Bölümdeki kutuya yazılan işi listeye seçili olarak ekler.
  function ozelEkle(grupSira) {
    var secici = '[data-ekle-girdi="' + grupSira + '"]';
    var hata = C.ozelEkle(durum, ANKETLER[durum.departman], grupSira, kok.querySelector(secici).value);
    if (hata) { uyar(hata); kok.querySelector(secici).focus(); return; }
    var kaydirma = window.scrollY;
    ciz(false);
    window.scrollTo(0, kaydirma);
    kok.querySelector(secici).focus({ preventScroll: true });
  }

  function detayCevapla(dugme) {
    var grup = dugme.closest("[data-soru]");
    var soruId = grup.dataset.soru;
    var opId = durum.adim.slice(6);
    var cevap = durum.cevaplar[opId] || (durum.cevaplar[opId] = {});
    cevap[soruId] = dugme.dataset.secenek;

    Array.prototype.forEach.call(grup.querySelectorAll("button"), function (b) {
      b.setAttribute("aria-pressed", b === dugme);
    });

    if (soruId === SORULAR[0].id) {
      var atlandi = cevap[soruId] === C.TAM_OTOMATIK;
      document.getElementById("diger-sorular").hidden = atlandi;
      document.getElementById("atlandi-notu").hidden = !atlandi;
    }
    uyar("");
    durumKaydet();
  }

  function ileri() {
    var hata = C.adimHatasi(durum.adim, durum, anket(), SORULAR, AYAR);
    if (hata) { uyar(hata); return; }
    var liste = adimlar();
    adimaGit(liste[liste.indexOf(durum.adim) + 1]);
  }

  /* ---------- gönderim ---------- */

  function yukHazirla(zamanDamgali) {
    if (!durum.yanitNo) durum.yanitNo = yanitNoUret();
    return C.yukOlustur({
      durum: durum, anket: anket(), sorular: SORULAR, ayar: AYAR,
      yanitNo: durum.yanitNo, simdi: zamanDamgali ? new Date() : undefined
    });
  }

  function sonGonderimdenBeri() {
    try {
      var son = Number(localStorage.getItem(SON_GONDERIM_ANAHTARI));
      return son ? (Date.now() - son) / 1000 : Infinity;
    } catch (e) {
      return Infinity;
    }
  }

  function hataGoster(baslik, metin) {
    gonderimHatasi = { baslik: baslik, metin: metin };
    gonderiliyor = false;
    ciz(false);
    var kutu = kok.querySelector(".hata-kutu");
    if (kutu) kutu.scrollIntoView({ block: "center" });
  }

  function gonder() {
    if (gonderiliyor) return;

    var eksik = C.adimHatasi("ozet", durum, anket(), SORULAR, AYAR);
    if (eksik) {
      uyar(eksik);
      var ad = document.getElementById("musteri-ad"), posta = document.getElementById("eposta");
      if (ad && !ad.value.trim()) ad.focus();
      else if (posta && !C.epostaGecerli(posta.value)) posta.focus();
      return;
    }

    if (!C.adresGecerli(AYAR.formAdresi)) {
      hataGoster("Anket şu anda gönderilemiyor.",
        "Gönderim servisi henüz yapılandırılmamış. Yanıtlarınız kaybolmadı; lütfen anketi size ileten kişiye haber verin.");
      return;
    }

    var bekleme = Math.ceil(AYAR.gonderimAraligi - sonGonderimdenBeri());
    if (bekleme > 0) {
      hataGoster("Çok kısa süre önce bir yanıt gönderildi.", "Lütfen " + bekleme + " saniye sonra yeniden deneyin.");
      return;
    }

    var tuzak = (document.getElementById("website") || {}).value || "";
    var govde = { yanit: yukHazirla(true), web: tuzak };

    gonderiliyor = true;
    gonderimHatasi = null;
    ciz(false);

    var denetleyici = new AbortController();
    var zamanlayici = setTimeout(function () { denetleyici.abort(); }, AYAR.zamanAsimi);

    fetch(AYAR.formAdresi.trim(), {
      method: "POST",
      // text/plain: tarayıcı ön kontrol (CORS preflight) yapmaz; Apps Script ön kontrole yanıt veremez.
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(govde),
      signal: denetleyici.signal,
      referrerPolicy: "no-referrer"
    }).then(function (yanit) {
      if (!yanit.ok) throw new Error("HTTP " + yanit.status);
      return yanit.json();
    }).then(function (sonuc) {
      // Servis her durumda 200 döner; başarı yalnızca { ok: true } ile anlaşılır.
      if (!sonuc || sonuc.ok !== true) {
        var red = new Error("reddedildi");
        red.servisMesaji = sonuc && typeof sonuc.hata === "string" ? sonuc.hata : "";
        throw red;
      }
      try { localStorage.setItem(SON_GONDERIM_ANAHTARI, String(Date.now())); } catch (e) { /* yok sayılır */ }
      durumSil();
      gonderiliyor = false;
      gonderildi = true;
      durum = yeniDurum();
      ciz(true);
    }).catch(function (hata) {
      var zamanAsimi = hata && hata.name === "AbortError";
      if (hata && hata.servisMesaji) { hataGoster("Yanıtınız gönderilemedi.", hata.servisMesaji); return; }
      hataGoster("Yanıtınız gönderilemedi.",
        (zamanAsimi ? "Sunucu zamanında yanıt vermedi. " : "Bağlantı kurulamadı veya servis yanıtı reddetti. ") +
        "Yanıtlarınız bu cihazda duruyor; internet bağlantınızı kontrol edip yeniden deneyebilirsiniz.");
    }).then(function () {
      clearTimeout(zamanlayici);
    });
  }

  function indir() {
    var yuk = yukHazirla(true);
    var baglanti = document.createElement("a");
    baglanti.href = URL.createObjectURL(new Blob([JSON.stringify(yuk, null, 2)], { type: "application/json" }));
    baglanti.download = "kesif-anketi-" + yuk.departman.id + "-" + yuk.yanitNo.slice(0, 8) + ".json";
    document.body.appendChild(baglanti);
    baglanti.click();
    baglanti.remove();
    setTimeout(function () { URL.revokeObjectURL(baglanti.href); }, 1000);
  }

  ciz(false);
})();
