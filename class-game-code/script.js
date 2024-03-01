class Heroi {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    atacar() {
        let attack;
        switch(this.type) {
            case 'Mage':
                ataque = 'Attack with mage';
                break;
            case 'Warrior':
                ataque = 'Attack with sword';
                break;
            case 'monge':
                ataque = 'Attack with martial arts';
                break;
            case 'ninja':
                ataque = 'Attack with shuriken';
                break;
            default:
                ataque = 'used an unknown attack';
        }
        console.log(`The ${this.type} ${attack}`);
    }
}

// Exemplo de utilização:
let heroi1 = new Heroi("Gandalf", 2000, "Mage");
heroi1.atacar();

let heroi2 = new Heroi("Legolas", 500, "Warrior");
heroi2.atacar();

let heroi3 = new Heroi("Bruce Lee", 80, "Monge");
heroi3.atacar();

let heroi4 = new Heroi("Hattori Hanzo", 45, "Ninja");
heroi4.atacar();
