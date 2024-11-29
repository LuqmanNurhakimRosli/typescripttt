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

if (ids[30] === 'd'){

}

for( let i = 0; i  < 10; i++) {
    console.log(i);
}