const fs = require ("fs")

class Contenedor {
    constructor (path){
        this.path 
    }
  save(object){
    
      
 }
  getById(number){

  }
  getAll(){
    try{
        const data=fs.readFileSync("./productos.json", "utf-8")
        console.log(data)
    }catch(err){
        console.log("Archivo inexistente")
    }

  }
  deleteById(number){

  }
  deleteAll(){
    try {
      fs.writeFileSync("./productos.json", JSON.stringify([]))
      const data=fs.readFileSync("./productos.json", "utf-8")
        console.log(data)
      console.log("Archivo fue vaciado")
    }catch (err){
      console.log("Archivo inexistente")
    }
  }

}

const cont = new Contenedor("./productos.json")


