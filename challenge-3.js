// Soal 1
var emptyShip = new Ship (15, 15);

function Ship (draft, crew) {
    this.draft = draft;
    this.crew = crew;

    if(draft > 20) {
        console.log('Banyak nih muatan kapalnya');
    } else if(crew = 1.5*draft) {
        console.log('Lebih banyak muatan orangnya');
    }
}

console.log(Ship());
// End Soal 1

console.log(' ')

// Soal 2
class Animal {
  
    constructor(name, age, legs, species, status, master) {
      this.name = name;
      this.age = age;
      this.legs = legs;
      this.species = species;
      this.status = status;
      this.master = master;
    }
  
    introduce() {
      return(`nama ${this.name}, umur ${this.age}, kaki ${this.legs}, spesies ${this.species}, status ${this.status}.`);
    }
}
    
    class Shark extends Animal {
        constructor(name, age, status) {
            super(name, age, 0, 'Shark', status);
        }
    }

  class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, 'Cat', status);
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, 4, 'Dog', status, master);
    }

    greatMaster() {
        return(`nama ${this.name}, umur ${this.age}, kaki ${this.legs}, spesies ${this.species}, status ${this.status}, hello! ${this.master}.`)
    }
}

const hiu = new Shark('Hiu', '10', 'Berenang');
console.log(hiu.introduce());

const kucing = new Cat('Kucing', '2', 'Berjalan');
console.log(kucing.introduce());

const helli = new Dog('Puppy', '4', 'Berlari', 'Siti Solihat Firdaus');
console.log(helli.greatMaster());
// End Soal 2