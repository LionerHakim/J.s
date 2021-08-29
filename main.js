import $ from "jquery"

var text = [
    "SAYANGKU", 
    "KALO KAMU LIHAT PESAN INI", 
    "BERARTI KAMU BUKA WEBNYA PAKE HP",
    "ATAU WINDOW BROWSER KAMU UKURAN NYA KECIL", 
    "MAAFIN AKU YA...", 
    "AKU BELOM SEMPET BIKIN WEBNYA RESPONSIF",
    "SEBETULNYA SIH...",
    "AKU CUMAN PENGEN NGUCAPIN, SELAMAT",
    "KARENA KAMU UDAH BERHASIL LULUS SIDANG",
    "SEMOGA ILMU YANG KAMU PEROLEH",
    "BERMANFAAT DAN BERKAH UNTUK KAMU YA",
    "NANTI KALO ADA WAKTU",
    "COBA BUKA WEBNYA LAGI PAKE LAPTOP, OKE",
    "LOVE YOU MORE SWEETY...",
    "MUUAAAAACCCHH"
];

var index = 0;

$("#text").text(text[0]);

(function animate() {
    $("#text").fadeOut(1500, function() {
        index = (index + 1) % text.length;
        this.textContent = text[index];

    }).fadeIn(2000, animate);
})();