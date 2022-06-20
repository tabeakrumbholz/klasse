class Buch {
    constructor(autor, exemplare, seitenzahl, verlag){
       this.autor = autor
        this.exemplare = exemplare
        this.seitenzahl = seitenzahl
        this.verlag = hersteller
    }
    

}

new Buch ("Maze Runner" , "7" , "400" , "Chicken House")

function verfügbar() {
    if (this.exemplare > 0){
    console.log("verfügbar");
    }
    if (this.exemplare === 0){
        console.log("nicht mehr verfügbar")
    }
}

function verkauft() {


}