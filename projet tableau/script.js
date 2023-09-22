"use strict";

let names=[];//création d'un tableau vide
names.push("Enzo", "Ivan", "Anthony");//ajout de noms dans le tableau 

names.forEach(name =>{//pour chaque nom du tableau, la phrase suivante sera ajoutée
    name += " va a la peche";
    console.log(name)
})