<template>
    <div class="flex justify-between items-center px-5 py-7 desktop:px-16 shadow-md dark:bg-dark_blue dark:text-white">
        <router-link to="/">
            <h1 class="font-bold">Where in the world?</h1>
        </router-link>
        <button @click="toggleDarkMode()" class="flex items-center gap-x-2">
            <font-awesome-icon icon="fa-solid fa-moon" />
            <p class="font-semi_bold">Dark Mode</p>
        </button>
    </div>
</template>

<script>
import { toggleDarkMode } from '../utils/darkMode'
export default{
    name: "Navbar",
    methods: {
        toggleDarkMode
    }
}
</script>