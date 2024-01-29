class Daire{
    constructor(yaricap){
        this.yaricap=yaricap;
    }
    alan(){
        return 3.14*this.yaricap*this.yaricap
    }
    cevre(){
        return 2*this.yaricap*3.14
    }
}

//nesne oluşturma

var r1=Number(prompt("R1 :"));
var d1=new Daire(r1);
document.write("Alan= "+d1.alan()+" Çevre= "+d1.cevre());
