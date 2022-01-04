class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        target -= this.power
    }
}
const red_ninja = new Unit("Red Belt Ninja", 3, 3, 4)
const black_ninja = new Unit("Black Belt Ninja", 4, 5, 4)