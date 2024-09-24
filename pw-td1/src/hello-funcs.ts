//creer fonction helloWorld qui retourne "Hello World!" et indique explicitement le type de valeur de retour
import { type Human } from './types';


export function helloWorld(): string {
    return "Hello World!";
}

export function helloYou(name: string): string {
    return "Hello, " + name + "!";
}


export function helloHuman(human: Human): string {
    const age = new Date().getFullYear() - human.birthyear;
    return `Hello, ${human.firstname} ${human.lastname}! You are ${age} years old.`;
}

export function repeatHelloWorld(n: number, name: string): string {
    let message = "";
    for (let i = 0; i < n; i++) {
        message += helloYou(name) + "\n";
    }
    return message;
}