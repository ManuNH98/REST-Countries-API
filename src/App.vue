<template>
  <div>
    <Navbar/>
    <router-view class="p-5 desktop:p-16"></router-view>
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