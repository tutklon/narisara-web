<template lang="pug">
  main
    .content
      h1 Çizimler
      ContentBody
      h1 Mangalar
      ContentBody
      h1 Diğer
      ContentBody
    Navbar(class="nvb")
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
<style scoped>
main {
  @apply flex;
}
.content {
  @apply w-5/6 p-2 ml-8;
}
h1 {
  @apply text-3xl my-4 ml-2 text-left;
}
</style>