
const fs = require ("fs")

class Contenedor {
    constructor (archivo){
        this.archivo = archivo
    }
 
async save(producto){
const data = await fs.promises.readFile(`${this.archivo}`,"utf-8")   
const objetos = JSON.parse(data)  
const id = objetos.length + 1
producto.id = id
objetos.push(producto)
const productosString = JSON.stringify(objetos)
await fs.promises.writeFile(`${this.archivo}`,productosString)
console.log(objetos)

}
getById(number){

  }
getAll(){
    try{
        const data=fs.readFileSync(`${this.archivo}`, "utf-8")
        const objetos = JSON.parse(data)
        console.log(objetos)
    }catch(err){
        console.log("Archivo inexistente")
    }

  }
deleteById(number){

  }
  async deleteAll(){
      
      await fs.promises.writeFile(`${this.archivo}`,JSON.stringify([]))
  }

}

const cont = new Contenedor("./productos.json")




cont.save({Nombre:"sergio"})