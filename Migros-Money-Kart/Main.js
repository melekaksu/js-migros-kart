let mesaj = 
`
Migors'a Hoşgeldiniz.
Money Kartınız Var Mı?
1-Evet
2-Hayır
`;

const urunler = [
    {
        urunIsmi : "Süt",
        fiyat : 15
    },
    {
        urunIsmi : "Bebek Bezi",
        fiyat : 110
    },
    {
        urunIsmi : "Kuşbaşı",
        fiyat : 250
    }
]

let sonuc = confirm(mesaj);
let odenecekTutar;

if(sonuc){
    // money kartı vardır

    let isim = prompt("Adınızı Giriniz : ");
    let soyisim = prompt("Soyadınızı Giriniz : ");

    const musteri = new Musteri(isim,soyisim,sonuc,urunler);
    odenecekTutar = musteri.hesapla();

    alert(
        `
        Müşteri Bilgileri : ${isim} ${soyisim}
        Ödenecek Tutar : ${odenecekTutar}
        `
    )
}
else{
    const musteri = new Musteri(null,null,sonuc,urunler);
    odenecekTutar = musteri.hesapla();
    alert(`Ödenecek Tutar : ${odenecekTutar}`);

}
