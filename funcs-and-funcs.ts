//function parameter
export function printToFile(text:string, callBack: () => void) : void {
    console.log(text);
    callBack();
}