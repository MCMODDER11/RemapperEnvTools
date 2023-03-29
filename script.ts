import { Difficulty, CustomEvent, Environment, LOOKUP, Geometry } from "https://deno.land/x/remapper@3.1.1/src/mod.ts"

function softRemove(lookup: LOOKUP,id: Array<string>,){
    id.forEach((env) =>{
        const yeet = new Environment(env, lookup);
        yeet.position = [-69420,-69420,-69420];
        yeet.push();
    })
}
function hardRemove(lookup: LOOKUP,id: Array<string>,){
    id.forEach((env) =>{
        const yeet = new Environment(env, lookup);
        yeet.active = false;
        yeet.push();
    })
}
function qLookup(lookup: LOOKUP, id: string) {
    const env = new Environment(id, lookup);
    return env;
}
class Cube {
    constructor(px:number,py:number,pz:number,rx:number,ry:number,rz:number,sx:number,sy:number,sz:number,material:string) {
        const newCube = new Geometry("Cube", material);
        newCube.position = [px,py,pz];
        newCube.rotation = [rx,ry,rz];
        newCube.scale = [sx,sy,sz];
    }
}
class Sphere {
    constructor(px:number,py:number,pz:number,rx:number,ry:number,rz:number,sx:number,sy:number,sz:number,material:string) {
        const newCube = new Geometry("Sphere", material);
        newCube.position = [px,py,pz];
        newCube.rotation = [rx,ry,rz];
        newCube.scale = [sx,sy,sz];
    }
}
class Material {
    constructor(mapInput:Difficulty,shader:string,color:Array<string>,track:string) {
        mapInput.geoMaterials
    }
}