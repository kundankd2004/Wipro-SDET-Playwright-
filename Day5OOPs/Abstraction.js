class CoffeeMachine {
    #waterTemperature=90;

    #boilWater() {
        return `Boiling water at ${this.#waterTemperature} degrees Celsius.`;
    }

    #grideBeans() {
        return "Grinding coffee beans.";
    }

    brew() {
        const boilMessage = this.#boilWater();
        const grindMessage = this.#grideBeans();
        return `${boilMessage} ${grindMessage} Brewing coffee...`;
    }
}

const myCoffeeMachine = new CoffeeMachine();
console.log(myCoffeeMachine.brew());