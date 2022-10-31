<template>
  <div>
    <Navbar/>
    <router-view></router-view>
    <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
    <font-awesome-icon icon="fa-solid fa-moon" />
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    <font-awesome-icon icon="fa-solid fa-angle-down" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default{
  name: "App",
  components: {Navbar},
  data() {
    return{
      isDark: false
    }
  }
}
</script>