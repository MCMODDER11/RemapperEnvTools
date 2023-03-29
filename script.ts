import { Difficulty, CustomEvent, Environment, LOOKUP, Geometry, GEO_SHADER, ColorType, Vec3 } from "https://deno.land/x/remapper@3.1.1/src/mod.ts"

let materials = []

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
    constructor(p:Vec3,r:Vec3,s:Vec3,material:string) {
        const newCube = new Geometry("Cube", material);
        newCube.position = p;
        newCube.rotation = r;
        newCube.scale = s;
    }
}
class Sphere {
    constructor(p:Vec3,r:Vec3,s:Vec3,material:string) {
        const newSphere = new Geometry("Sphere", material);
        newSphere.position = p;
        newSphere.rotation = r;
        newSphere.scale = s;
    }
}
class Capsule {
    constructor(p:Vec3,r:Vec3,s:Vec3,material:string) {
        const newCapsule = new Geometry("Capsule", material);
        newCapsule.position = p;
        newCapsule.rotation = r;
        newCapsule.scale = s;
    }
}
class Plane {
    constructor(p:Vec3,r:Vec3,s:Vec3,material:string) {
        const newPlane = new Geometry("Plane", material);
        newPlane.position = p;
        newPlane.rotation = r;
        newPlane.scale = s;
    }
}
class Cylinder {
    constructor(p:Vec3,r:Vec3,s:Vec3,material:string) {
        const newCylinder = new Geometry("Cylinder", material);
        newCylinder.position = p;
        newCylinder.rotation = r;
        newCylinder.scale = s;
    }
}
class Quad {
    constructor(p:Vec3,r:Vec3,s:Vec3,material:string) {
        const newQuad = new Geometry("Quad", material);
        newQuad.position = p;
        newQuad.rotation = r;
        newQuad.scale = s;
    }
}
class Triangle {
    constructor(p:Vec3,r:Vec3,s:Vec3,material:string) {
        const newTriangle = new Geometry("Triangle", material);
        newTriangle.position = p;
        newTriangle.rotation = r;
        newTriangle.scale = s;
    }
}
class Material {
    constructor(mapInput:Difficulty,matName:string,shader:GEO_SHADER,color:ColorType,track:string,shaderKeywords:Array<string>) {
        switch(typeof track) {
            case "undefined":
                if(typeof shaderKeywords == "undefined") {
                    mapInput.geoMaterials[matName] = {
                        "shader": shader,
                        "color": color
                    }
                } else {
                    mapInput.geoMaterials[matName] = {
                        "shader": shader,
                        "shaderKeywords": shaderKeywords,
                        "color": color
                    }
                }
                break;
            default:
                if(typeof shaderKeywords == "undefined") {
                    mapInput.geoMaterials[matName] = {
                        "shader": shader,
                        "color": color,
                        "track": track
                    }
                } else {
                    mapInput.geoMaterials[matName] = {
                        "shader": shader,
                        "shaderKeywords": shaderKeywords,
                        "color": color,
                        "track": track
                    }
                }
        }
    }
}