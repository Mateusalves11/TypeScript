"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
x = 2221;
console.log(x);
let y = 12;
const arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const user = {
    name: 'João',
    age: 20
};
const myVar = 10;
const myVar2 = '10';
var size;
(function (size) {
    size["P"] = "Pequeno";
    size["M"] = "M\u00E9dio";
    size["G"] = "Grande";
})(size || (size = {}));
const camisa = {
    name: 'Camisa',
    size: size.M
};
console.log(camisa);
let any = 10;
any = '10';
any = true;
let teste;
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 20));
function sayHelloto(name) {
    console.log(`Hello ${name}`);
}
function sayHelloto2(name) {
    return `hello ${name}`;
}
function greeting(name, greet) {
    if (greet) {
        return `${greet} ${name}`;
    }
    return `Hello ${name}`;
}
console.log(greeting('João'));
console.log(greeting('João', 'Olá'));
function sumNumbers(nums) {
    return nums.a + nums.b;
}
function multiplyNumbers(nums) {
    return nums.a * nums.b;
}
console.log(sumNumbers({ a: 10, b: 20 }));
console.log(multiplyNumbers({ a: 10, b: 20 }));
function doSomething(info) {
    if (typeof info === 'number') {
        console.log(info);
        return;
    }
    console.log("Não é um número");
}
doSomething(10);
doSomething(true);
function ShowArrayItens(arr) {
    arr.forEach((item) => {
        console.log(item);
    });
}
const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const a2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
ShowArrayItens(a1);
ShowArrayItens(a2);
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(this.name);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(this.role);
            return;
        }
        console.log('Não autorizado');
    }
}
const zeca = new User('Zeca', 'Admin', true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(this.brand);
    }
}
const fusca = new Car('Volkswagen', 4);
console.log(fusca);
fusca.showBrand();
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar('Audi', 4, 'V8');
console.log(a4);
a4.showBrand();
function BaseParams() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParams()
], Person);
const sam = new Person('Sam');
console.log(sam);
