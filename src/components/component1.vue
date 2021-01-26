<template>


<div class="container">

<b-container fluid>
    <div class="form-group" >
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    

     
 <h3>Selecciona varias y depues ajusta las medidas </h3>
      <b-form-group id="input-group-3"  label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.select"
          :options="foods"
          required @change="selectpic"
        ></b-form-select>
      </b-form-group>

      

     
    
    </b-form>
    
  </div>
</b-container>



<div v-if="form.select==1" class="row"   id="ComponentRest">

<ComponentRest>

</ComponentRest>



</div>
</div>




</template>

<script>


import ComponentRest from "@/components/ComponentRest";



  export default {

    components:{

      ComponentRest


    },
    data() {
      return {
        form: {
          select:'null',
          email: '',
          name: '',
          food: null,
          checked: []
        },

        

        foods: [{ text: 'Selecciona una opción', value: null }, { text: 'Varias', value: 1 }],
        show: true
      }
    },
    methods: {

selectpic(){
console.log(this.form.select);
 

},

      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
<style scoped>

</style>
