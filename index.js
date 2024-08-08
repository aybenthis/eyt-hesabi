function eytDetaylari(calisanListesi) {
  let eytliListesi = [];
  let guncelCalisanListesi = [];
  let toplamMaasGideri = 0;

  for (let i = 0; i < calisanListesi.length; i++) {
    let calisan = calisanListesi[i];
    let calisanAdi = calisan[0];
    let cinsiyet = calisan[1];
    let iseGirisTarihi = calisan[2];
    let sigortaliYillar = calisan[3];
    let primGunSayisi = calisan[4];
    let guncelMaas = calisan[5];

    if (iseGirisTarihi < 1999) {
      if (primGunSayisi > 5000) {
        if (cinsiyet === 'Kadın' && sigortaliYillar > 20) {
          eytliListesi.push(calisanAdi);
          toplamMaasGideri += guncelMaas;
        } else if (cinsiyet === 'Erkek' && sigortaliYillar > 25) {
          eytliListesi.push(calisanAdi);
          toplamMaasGideri += guncelMaas;
        } else {
          guncelCalisanListesi.push(calisanAdi);
          toplamMaasGideri += guncelMaas;
        }
      } else {
        guncelCalisanListesi.push(calisanAdi);
        toplamMaasGideri += guncelMaas;
      }
    } else {
      guncelCalisanListesi.push(calisanAdi);
      toplamMaasGideri += guncelMaas;
    }
  }

  return [eytliListesi, guncelCalisanListesi, toplamMaasGideri];
}

const calisanListesi = [
  ['Hatice', 'Kadın', 1999, 21, 5200, 50000],
  ['Muhammed', 'Erkek', 2001, 22, 5001, 80000],
  ['Halime', 'Kadın', 1995, 17, 5101, 90000],
  ['Fatma', 'Kadın', 2015, 8, 2200, 110000],
  ['Mehmet Ali', 'Erkek', 1994, 26, 4000, 40000],
  ['Ramazan', 'Erkek', 1992, 26, 8200, 75000],
  ['Furkan', 'Erkek', 1999, 24, 3500, 52000],
  ['Sultan', 'Kadın', 2001, 16, 5001, 78000],
  ['Kadir', 'Erkek', 1985, 27, 8000, 150000],
  ['Şükrü', 'Erkek', 2021, 1, 500, 20000],
];
console.log(eytDetaylari(calisanListesi));
