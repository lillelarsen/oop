// //----------- Javascript måden til en class ----------------------
// const Animal = function(name) {
//     this.name = name; // This er et nøgleord vi giver værdien navn
// };

// // Prototype = hvad kan jeg gøre med objektet, makeANoise er en metode, this er nedarvet fra ovenstående.
// Animal.prototype.makeANoise = function() {
//     console.log(`${this.name} makes a noise`);
    
// };

// // Instansiering, objekter er unikke.. begge nedenstående kører.
// const fido = new Animal("fido");
// fido.makeANoise();

// const niels = new Animal("niels");
// niels.makeANoise();

//-------------- Javascript ny måde ES6 --------------------------
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeANoise() {
        console.log(`${this.name} makes a noise`);
    }

    sitsDown() {
        console.log(`${this.name} sits down`);
    }
}
// Arve fra animal
class Cat extends Animal {
    constructor(name) {
        super(name); // Gør overklassen tilgængelig i underklassen, send parametre med i både constructor og super fra parent
    }

    makeANoise() {
        console.log(`${this.name} meows`);
        
    }
}

const franz = new Animal("franz");
franz.makeANoise();
franz.sitsDown();

const otto = new Cat("Otto");
otto.makeANoise();
otto.sitsDown();