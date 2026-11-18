/*
 * Kurulum ayarları. Yayına almadan önce yalnızca bu dosya düzenlenir.
 * Buraya ASLA şifre, API anahtarı veya SMTP bilgisi yazılmaz; form adresi gizli bilgi değildir.
 */
window.KESIF_AYAR = {
  // Gönderim servisinin adresi: servis/eposta-gonder.gs'nin Apps Script web uygulaması (/exec) adresi.
  // Örnek: "https://script.google.com/macros/s/AKfy.../exec"
  // Boş bırakılırsa anket gönderimi yapılmaz ve kullanıcıya açık bir hata gösterilir.
  formAdresi: "https://script.google.com/macros/s/AKfycbwyVp0BserZ5bqLXitXOrz-C0OmMJVndOMi_wY2plF8kKMLiqct4xJZbiLThfrWnplUTw/exec",

  // Anasayfada gösterilecek departmanlar (assets/js/anketler/<id>.js dosyaları), bu sırayla.
  // Aynı "alan"daki departmanlar art arda yazılır; anasayfada alan başlığı altında toplanırlar.
  departmanlar: [
    "finans", "muhasebe", "kontrol",
    "satis", "satinalma", "depo", "disticaret",
    "uretim", "kalite", "bakim",
    "ik",
    "sap",
    "bt", "proje"
  ],

  // Detaylandırılacak operasyon sayısı sınırları.
  detayEnAz: 3,
  detayEnCok: 5,

  // Sunucu yanıtı için beklenecek en uzun süre (ms).
  zamanAsimi: 20000,

  // Aynı tarayıcıdan art arda gönderimler arasındaki en kısa süre (sn).
  gonderimAraligi: 30,

  // Yanıtların saklanma süresi; giriş ekranındaki bilgilendirmede gösterilir.
  saklamaSuresi: "12 ay"
};
