class MigrosBase{

    indirimOrani = 20;

    /*
      urunler[
        {
            fiyat : 10,
            urunadi : "Süt"
        }
      ]
    */

    constructor(isim, soyisim, kartVarMi, urunler) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.kartVarMi = kartVarMi;
        this.urunler = urunler;
    }

    hesapla(){

        let odenecekTutar = 0;

        if(this.urunleriKontrolEt(this.urunler)){
            //Sepetim dolu

            if(this.kartVarMi){
                // Money kart var

                this.urunler.forEach(urun => {
                    odenecekTutar += urun.fiyat * (100-this.indirimOrani)/100
                });
            }
            else{
                // Money kart yok

                this.urunler.forEach(urun => {
                    odenecekTutar += urun.fiyat
                });
            }
        }
        else{
            alert("En az bir tane ürün satın almalısınız.");
        }
        return odenecekTutar;
    }

    urunleriKontrolEt(urunler){
        if(urunler!= null &&  urunler.length>0){
            return true;
        }
        return false;
    }

    /*
    getIsim(){
        return this.isim;
    }

    getSoyisim(){
        return this.soyisim;
    }
    */
}

