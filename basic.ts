let userName: String = "Jack";
let hasLoggedIn: boolean  = true;

userName += " Luqman";

console.log(hasLoggedIn);

let myNumber: number = 20;

//array
const names: string[] = userName.split(" ")
const myValues: Array<number> = [1,2,3];

//typing objects
const myPerson : {
    first: string;
    last: string;
}= {
    first: "Luqman",
    last: "Nurhakim"
}

const ids: Record<number,string> = {
    10: 'a',
    20: 'b'
};
ids[30] = 'c';

//conditional & expression
if (ids[30] === 'D'){

}

//Loops

for( let i = 0; i  < 10; i++) {
    console.log(i);
}

[1,2,3].forEach((v) => console.log(v));
const out: number[] = [4,5,6].map((v) =>v* 10);