class Pood{
    protected avab = 8;
    protected kinni = 22;
    protected lavab = 10;
    protected lkinni = 22;
    protected pavab = 10;
    protected pkinni = 20;
    protected paev = 'Esmaspaev';
    protected aeg = 12;

    KasAvatud(aeg:number):boolean{
        if( this.avab < aeg && this.kinni > aeg){
            return true
        } else
            return false
    }
    KasAvatudPaev(aeg:number, paev:string):boolean{
        if( paev == 'Esmaspaev' || paev == 'Teisipaev'|| paev == 'Kolmapaev'|| paev == 'Neljapaev'|| paev == 'Reede'){
            return this.avab < aeg && this.kinni > aeg;
        } else if(paev == 'Laupaev'){
            return this.lavab < aeg && this.lkinni > aeg;
        }else if(paev == 'Puhapaev'){
            return this.pavab < aeg && this.pkinni > aeg;
        }else
            return false
    }
    FastForward(valik:string){
        var enne = this.KasAvatudPaev(this.aeg,this.paev)
        if (valik == 'tund'){
          this.aeg ++
        } else if (valik == 'paev'){
            if (this.paev == 'Esmaspaev'){
                this.paev = 'Teisipaev'
            } else if (this.paev == 'Teisipaev'){
                this.paev = 'Kolmapaev'
            } else if (this.paev == 'Kolmapaev'){
                this.paev = 'Neljapaev'
            } else if (this.paev == 'Neljapaev'){
                this.paev = 'Reede'
            } else if (this.paev == 'Reede'){
                this.paev = 'Laupaev'
            } else if (this.paev == 'Laupaev'){
                this.paev = 'Puhapaev'
            }
        }
        var parast = this.KasAvatudPaev(this.aeg,this.paev)
        if (enne == true && parast == true){
            return 'endiselt lahti'
        } else if (enne == false && parast == false){
            return 'endiselt kinni'
        } else if (enne == true && parast == false){
            return 'suletakse'
        } else if (enne == false && parast == true){
            return 'avatakse'
        }
    }
}
export{
    Pood
}