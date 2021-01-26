<template>
  <div>
    HOLA SOY COMPONENTE B
    <div v-if="true">
      <div v-for="elemneto in lista" :key="elemneto.id">
        <div>Id: {{elemneto.id}}</div>
        <div>Nombre: {{elemneto.nombre}}</div>
      </div>
      <md-table>
        <md-table-row>
          <md-table-head>
            Id
            </md-table-head>
            <md-table-head>
              Nombre
            </md-table-head>
            <md-table-head>
              Accion
            </md-table-head>
        </md-table-row>
        <md-table-row v-for="elemneto in lista" :key="elemneto.id">
          <md-table-cell md-numeric>{{elemneto.id}}</md-table-cell>
          <md-table-cell>{{elemneto.nombre}}</md-table-cell>
          <md-table-cell>
            <md-button class="md-primary">Primary</md-button>
            <md-button class="md-accent">Accent</md-button>
          </md-table-cell>
        </md-table-row>
      </md-table>
    </div>


    <div v-show="true">
      <form>
        <md-field>
          <label for="first-name">First Name</label>
          <md-input name="first-name" id="first-name"  v-model="form.firstName" v-on:change="cambio(form.firstName)"/>
        </md-field>
        <md-field>
        <label for="first-name">First Name</label>
        <md-input name="first-name" id="last-name"  v-model="form.lastName" />
      </md-field>
        <md-checkbox v-model="form.gender" value="1">Aceptar</md-checkbox>
      </form>
      <md-button class="md-primary" v-on:click="guardar()" >Guardar</md-button>
    </div>

  </div>
</template>

<script>
export default {
  name: "ComponenteB",
  data:()=>({
    lista:[
      {id:1, nombre:"Shalia"},
      {id:2, nombre: "Leo"},
      {id:3, nombre: "Juan"},
      {id:4, nombre: "Omar"},
      {id:5, nombre: "Ross"},
    ],
    form: {
      firstName: null,
      lastName: null,
      gender: false,
      age: null,
      email: null,
    },
  }),
  methods:{
    guardar(){
      console.log(this.form)
    },
    cambio(texto){
      console.log("ESTAS ESCRIBIENDO....", texto);
    }
  }
}
</script>

<style scoped>

</style>