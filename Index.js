const fs = require('fs');



class Contenedor{
  constructor(tablero){
    this.tablero=tablero;
   

  } 
save(obj){
  
  
   this.tablero.push({
     nombre:obj.nombre,
     id:this.tablero.map(item => item.id).reduce((a, b) => Math.max(a, b), 0) + 1,}
     )

  

    async function WriteFile() {
      try{
       const contenido = await fs.promises.writeFile(`./Files/productos.txt`, JSON.stringify(tablero,null,2));
        console.log(`Guardado =>${JSON.stringify(obj)}`);
        
      }
      catch(err){
        console.log(err)
      }
    }
    WriteFile();

  
  return tablero.id
}

getById(id){


  async function GetId() {
    try{
     const data = await fs.promises.readFile(`./Files/productos.txt`, 'utf-8');
     const obj = (JSON.parse(data))
     console.log(`Obtenido en id ${id} =>`);
     
    

    console.log( JSON.parse(data) ? obj.tablero.find(item => item.id === id) : null);
    }
    catch(err){
      console.log(err)
    }
  }
  GetId();


}

getAll(){

  async function GetAll() {
    try{
     const data = await fs.promises.readFile(`./Files/productos.txt`, 'utf-8');
     console.log("Estos Son todos los artículos obtenidos =>")
     console.log(JSON.parse(data))
      
   
    }
    catch(err){
      console.log(err)
    }
  }
  GetAll();

}

deleteById(id){

  async function DeleteById() {
    try{
     const data = await fs.promises.readFile(`./Files/productos.txt`, 'utf-8');
     const obj = (JSON.parse(data))
     const index = obj.tablero.findIndex(item => item.id === id) 
     obj.tablero.splice(index, 1)
     console.log("*****************")
     console.log(obj);
     console.log("*****************")
     async function WriteFile() {
      try{
       await fs.promises.writeFile(`./Files/productos.txt`, JSON.stringify(obj,null,2));
        console.log(`Se elimino el articulo con id :  ${id}`);

        

        //return obj.tablero;
      }
      catch(err){
        console.log(err)
      }
    }
    WriteFile();
     }
    catch(err){
      console.log(err)
    }
  }
  DeleteById();


}




deleteAll(){
  async function Delete() {
    try{
     const data = await fs.promises.readFile(`./Files/productos.txt`, 'utf-8');
     const obj = (JSON.parse(data))
     obj.tablero = []

     async function WriteFile() {
      //console.log(obj)

      try{
        
       await fs.promises.writeFile(`./Files/productos.txt`, JSON.stringify(obj,null,2));
       
     
        console.log(`Se eliminaron todos los artículos`);
        console.log("***************************")
        console.log(obj);
        console.log("***************************")
        return obj.tablero;

      }
      catch(err){
        console.log(err)
      }
    }
    WriteFile();
     }
    catch(err){
      console.log(err)
    }
  }
  Delete();


  
}



}

const tablero = new Contenedor([])

tablero.save({nombre:"Tablero de Ajedrez de Madera"})
tablero.save({nombre:"Tablero de Ajedrez Imantado"})
tablero.save({nombre:"Tablero de Ajedrez Vinílico"})

tablero.getById(3)



tablero.getAll()
tablero.deleteById(2)

tablero.deleteAll()
