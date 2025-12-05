class Device {
    constructor(name, power) {
        if (new.target === Device) {
            throw new Error("Нельзя создать экземпляр абстрактного класса Device!")
        }
        this.name = name
        this.power = power 
        this.isOn = false
    }

    turnOn() {
        this.isOn = true
        console.log(`${this.name} включён.`)
    }

    turnOff() {
        this.isOn = false
        console.log(`${this.name} выключен.`)
    }

    work() {
        throw new Error("Метод work() должен быть переопределён в наследнике!")
    }
}

class WashingMachine extends Device {
    constructor(name, power, capacity) {
        super(name, power)
        this.capacity = capacity // кг
    }

    work() {
        if (!this.isOn) {
            console.log("Сначала включите машину!")
            return
        }
        console.log(`${this.name} стирает... Вместимость: ${this.capacity} кг`)
    }

    rinse() {
        if (!this.isOn) {
            console.log("Машина выключена!")
            return
        }
        console.log(`${this.name} полощет бельё`)
    }
}

try {
    const wrong = new Device("Просто устройство", 1000) 
} catch (e) {
    console.warn(e.message)
}

const wash = new WashingMachine("LG TurboWash", 2000, 8)

wash.turnOn()
wash.work()
wash.rinse()
wash.turnOff()

console.log(wash)

