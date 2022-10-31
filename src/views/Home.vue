<template>
    <div class="bg-very_light_gray_bg">
        <div class="flex flex-col gap-y-10 pb-5">
            <div id="search" class="bg-white">
                <form>
                    <div class="flex items-center p-5 px-7 gap-x-5 rounded-md shadow-md">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                        <input maxlength="128" placeholder="Search for a country..." size="30" type="text" />
                    </div>
                </form>
            </div>
            <div id="dropdown">
                <button @click="showFilter = !showFilter" class="flex justify-between items-start bg-white p-5 rounded-md shadow-md w-3/5">Filter by Region <span><font-awesome-icon icon="fa-solid fa-angle-down" /></span></button>
                <div :class="!showFilter ? 'hidden' : ''" class="absolute w-3/5 py-2 pr-6">
                    <ul class="flex flex-col gap-y-2 bg-white p-5 rounded-md shadow-md">
                        <li><button>Africa</button></li>
                        <li><button>America</button></li>
                        <li><button>Asia</button></li>
                        <li><button>Europe</button></li>
                        <li><button>Oceania</button></li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="content" class="flex flex-col gap-y-5 p-7">
            <div v-for="(country, id) in countries" :key="id" class="bg-white rounded-md shadow-sm">
                <router-link :to="{name:'Detail', params: {id: country.name}}">
                    <img :src="country.flags.svg" :alt="country.name.common" class="rounded-t-md">
                    <div class="p-7 pb-10">
                        <h2 class="font-bold text-xl pb-3">{{ country.name }}</h2>
                        <p><span class="font-bold">Population: </span>{{ country.population.toLocaleString('en-US') }}</p>
                        <p><span class="font-bold">Region: </span>{{ country.region }}</p>
                        <p><span class="font-bold">Capital: </span>{{ country.capital }}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import API from '../utils/api';

export default {
    name: "Home",
    data(){
        return {
            countries:null,
            showFilter:false
        }
    },
    mounted() {
        this.getCountries()
    },
    watch: {

    },
    methods: {
        getCountries(){
            API.get().then(res => {
                this.countries = res.data
            
            })
        }
    }
}
</script>