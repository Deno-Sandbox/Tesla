export class Tesla {
    constructor(){
        console.log(Deno.readTextFileSync("./art.ascii"));
    }
}