<template>
  <NavBar />
  <router-view/>
  <v-footer>
    <NavFooter />
    </v-footer>
  

    
</template>

<script>
import NavBar from "@/components/NavBar";
import NavFooter from "@/components/NavFooter"

export default 
{
  components: 
  {
    NavBar,
    NavFooter
  }
}
</script>


<style scoped>
  @import "style.css"
</style>

