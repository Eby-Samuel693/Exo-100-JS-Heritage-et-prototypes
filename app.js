let Vehicule = function (couleur,roues,marque){
    this.couleur = "red";
    this.roues = 4;
    this.marque = "cacahuete";
    this.demarre = function(){
        console.log("elle demarre bien"  + 'jusque' );
    };
    this.arreter = function (param1, param2) {
        console.log("elle s'arrete aussi" + param1 + param2);
    }
}

let Velo = {
    couleur : "blue",
    roues: 2,
    monter: function (){
        console.log("je monte sur mon velo blue");
    }
}

Vehicule.prototype.present = function(){
    return "couleur"+ this.couleur +"roues :"+this.roues+ "marque"+ this.marque
    +"demarre"+ this.demarre()+"arret :"+this.arreter();
}
console.log(Vehicule);

Vehicule.prototype.couleur= "red";
Vehicule.prototype.roues = 4;
Vehicule.prototype.marque = "cacahuete";

let Voiture = new Vehicule();
Voiture.assurance = "maaf";
Voiture.proprietaire ="samuel";
Voiture.passerAuCarWash = function () {
    console.log("oui ...")
}
console.log(Voiture);
