<template>



<div  class="text-center pt-5">   

<h1> Editar Imagen</h1>
<img :src="url + imagen.id + '/' + ancho + '/' + largo " alt="">
<br>
<br>
<br>
<br>

<b-form inline> 

<label for="ancho">Ancho</label>

  <b-form-input  id="ancho" v-model="ancho" placeholder="width"></b-form-input>

<label for="altura">Altura</label>

  <b-form-input id="altura" v-model="largo" placeholder="height"></b-form-input>

</b-form  >


</div>













</template>

<script>

export default {

  name: 'ComponentUnique',
 
    data:()=>({ 

     
      
      ancho: "200",
      largo:"200",
      url:"https://picsum.photos/id/",

      imagen:{
      userId:Number,
      id:"",
      title:String,
      completed:Boolean
    }


      

      
    }),

  props:[
  'imagenRecibida'

  ],

    mounted() {
   
      console.log(this.imagenRecibida)
      this.imagen=this.imagenRecibida;

     
   
    }


}
 
  
</script>

<style  scoped>

#contenedor{

  margin-left: 20px;
}
 
</style>