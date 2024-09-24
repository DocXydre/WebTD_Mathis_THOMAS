import { helloWorld } from './hello-funcs';
import { helloYou } from './hello-funcs';
import { helloHuman } from './hello-funcs';
import { type Human } from './types';
const message = helloWorld();
//console.log(message);

//console.log(helloYou("John"));

const johnDoe: Human = {
    firstname: "John",
    lastname: "Doe",
    birthyear: 1980
};

console.log(helloHuman(johnDoe));


