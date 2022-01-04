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
        console.log(`The stats are:
        Name: ${this.name}
        Health: ${this.health}
        Speed: ${this.speed}
        Strength: ${this.strength}
        `)
    }
}


class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        // const message = super.drinkSake()
        super.drinkSake()
        console.log("Two turtles may never sit under the same tree, for a cold wind may blow them over.")
        // console.log(super.showStats())
    }
}

const person1 = new Ninja("Tom", 300);
const sensei1 = new Sensei("Alex", 300);
// sensei1.speakWisdom()
sensei1.showStats()
sensei1.speakWisdom()
sensei1.showStats()
// person1.sayName()
// person1.showStats()
// person1.drinkSake()
// person1.showStats()
