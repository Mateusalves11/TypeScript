// Annotation
let x: number = 10;

x = 2221;


console.log(x);


// Inferencia de tipos

let y = 12;
// y ='1'


// object

const arrays: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const user: { name: string, age: number } = {
    name: 'João',
    age: 20
}

type myType = number | string;

const myVar: myType = 10;
const myVar2: myType = '10';

// enum

enum size {
    P = 'Pequeno',
    M = 'Médio',
    G = 'Grande'
}

const camisa = {
    name: 'Camisa',
    size: size.M
}

console.log(camisa);

// any

let any: any = 10;
any = '10';
any = true;

// literal types
let teste: "algum valor" | null

// Funcoes
function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(12, 20));
// console.log(sum(12, '20');

function sayHelloto(name: string): void {
    console.log(`Hello ${name}`);
}
function sayHelloto2(name: string): string {
    return `hello ${name}`;
}

function greeting(name: string, greet?: string): string {
    if (greet) {
        return `${greet} ${name}`;
    }
    return `Hello ${name}`;
}

console.log(greeting('João'));
console.log(greeting('João', 'Olá'));

// inteface

interface MathFunctionParams {
    a: number;
    b: number;
}

function sumNumbers(nums: MathFunctionParams): number {
    return nums.a + nums.b;
}

function multiplyNumbers(nums: MathFunctionParams): number {
    return nums.a * nums.b;
}

console.log(sumNumbers({ a: 10, b: 20 }));
console.log(multiplyNumbers({ a: 10, b: 20 }));

// narrowing

function doSomething(info: number | boolean) {
    if (typeof info === 'number') {
        console.log(info)
        return
    }
    console.log("Não é um número");
}

doSomething(10);
doSomething(true);

// generics

function ShowArrayItens<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(item);
    })
}

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const a2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

ShowArrayItens(a1);
ShowArrayItens(a2);

// classes

class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }

    showUserName() {
        console.log(this.name);
    }
    showUserRole(canShow: boolean): void {
        if (canShow) {
            console.log(this.role);
            return
        }
        console.log('Não autorizado');
    }
}


const zeca = new User('Zeca', 'Admin', true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);

// inteface com classes

interface IVhehicle {
    brand: string;
    showBrand(): void;
}

class Car implements IVhehicle {
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(this.brand);
    }
}

const fusca = new Car('Volkswagen', 4);
console.log(fusca);
fusca.showBrand();

// herança

class SuperCar extends Car {
    engine
    
    constructor(brand: string, wheels: number, engine: string) {
        super(brand, wheels);
        this.engine = engine;
    }
}

const a4 = new SuperCar('Audi', 4, 'V8');
console.log(a4);
a4.showBrand();

// decorators
function BaseParams() {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            id= Math.random();
            createdAt = new Date();
        }
    }
}

@BaseParams()

class Person {
    name

    constructor(name: string) {
        this.name = name;
    }
}

const sam = new Person('Sam');

console.log(sam);