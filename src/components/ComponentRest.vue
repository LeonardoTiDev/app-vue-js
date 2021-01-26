<template>
<div  class="row">

<Section id="galeria" class="container">

  



 <div  v-if="!mostrar" class="row">
  <div  class="col-lg-4"  v-for="imagen in lstImagenes" :key="imagen.id">
      <img :src="imagen.download_url">

      <button class="btn btn-primary" @click="mostrarImagen(imagen)" > Ajustar</button>
    </div>

 </div>
  

  <div class="row" v-if="mostrar">
      
      <ComponentUnique :imagenRecibida="imagenEnviada">

    </ComponentUnique>

       </div>


</Section>


    


</div>


      

</template>

<script>


import ComponentUnique from "@/components/ComponentUnique";

import axios from "axios";
export default {

   components:{

      ComponentUnique


    },



  name: "ServicioREST",
  data:()=>({
    atributo:1,
    objeto:{
      userId:Number,
      id:"",
      title:String,
      completed:Boolean

    },
mostrar: false ,

imagenEnviada: {
      userId:Number,
      id:"",
      title:String,
      completed:Boolean

    },

    objeto2:[
      {
        body:"",
        id:0
      }
    ],
    lstImagenes:[{
      id:"",
      author:"",
      width:"",
      height:"",
      url:"",
      download_url:""
    }]
  }),
  mounted() {
    this.obtenerDatos().then(()=> {
      this.obtenerImagenes();
      this.obtenerLista();
    });

  },
  methods:{
    obtenerDatos(){
      return new Promise((resolve, reject) => {
        axios.get('https://jsonplaceholder.typicode.com/todos/' + this.atributo)
            .then((result) => {
              console.log('Datos del servicio rest: ', result.data);
              this.objeto = result.data;
              resolve(result.data);
            }).catch(error => {
          console.log(error);
          reject(error);
        });
      });
    },
    obtenerLista(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
          .then((result) => {
            console.log('Datos del servicio 2 rest: ', result.data);
            this.objeto2 = result.data;
          });
    },
  obtenerImagenes(){
    this.$http.get("https://picsum.photos/v2/list")
        .then(response => {
          if (response.data){
            let resultado = response.data;


            resultado.forEach((item) => {
              console.log(item);
              this.lstImagenes.push(item);
            });

          }
        }).catch(error => {
      console.log(error);
    });
  }

,mostrarImagen(imagen){
     this.mostrar = true;

     this.imagenEnviada=imagen;
    console.log(imagen);
    console.log( this.imagenEnviada);

}
  }

  
}
</script>

<style scoped>


#galeria .col-lg-4 {

  margin: 0  !important;
  padding: 25px;
}




#galeria img {

    width: 100%;
    height: 250px;
}

</style>