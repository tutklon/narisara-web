<template>
  <div>
    <h1 class="bg-red-200">{{ loadedData }}</h1>
  </div> 
</template>

<script>
import axios from 'axios'
export default {
  name: 'IndexPage',
  data(){
    return {
      loadedData: null
    }
  },
  mounted(){
    axios.get('http://localhost:3000/api/get-data').then(r => this.loadedData = r.data)
  }
}
</script>
