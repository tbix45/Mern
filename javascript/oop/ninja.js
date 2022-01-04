class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(this.name)
    }
    drinkSake() {
        console.log("Yum sake!")
        this.health += 10;
    }
    showStats() {
        console.log(`This ninjas stats are:
        Name: ${this.name}
        Health: ${this.health}
        Speed: ${this.speed}
        Strength: ${this.strength}
        `)
    }
}

const person1 = new Ninja("Tom", 300);
// person1.sayName()
person1.showStats()
person1.drinkSake()
person1.showStats()
