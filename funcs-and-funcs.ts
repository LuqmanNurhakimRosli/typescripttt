//function parameter
export function printToFile(text:string, callBack: () => void) : void {
    console.log(text);
    callBack();
}

//function with params
export function arrayMutates(numbers:number[], mutate: (v: number) => number ): number[] {
    return numbers.map(mutate)
}

console.log(arrayMutates([1,2,3], (v) => v * 10));

//function as types 
type MutationFunction = (v: number) => number;
export function arrayMutates(numbers:number[],
     mutate: MutationFunction
    ): number[] {
    return numbers.map(mutate);
}

const myNewMutationFunc: MutationFunction = (v:number) =>  v*100;

console.log(arrayMutates([1,2,3], (v) => v * 10));

//returning function
export function createAdder(num: number): (val: number) => number {
    return (val:number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55));

//returning functions 
