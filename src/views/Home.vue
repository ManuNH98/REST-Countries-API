<template>
    <div class="bg-very_light_gray_bg dark:bg-very_dark_blue_bg">
        <div class="flex flex-col gap-y-10 pb-5">
            <div id="search" class="bg-white">
                <div class="flex items-center p-5 px-7 gap-x-5 rounded-md shadow-md">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                    <input placeholder="Search for a country..." type="text" :value="search" @input="filter => search = filter.target.value"/>
                </div>
            </div>
            <div id="dropdown">
                <button @click="showFilter = !showFilter" class="flex justify-between items-start bg-white p-5 rounded-md shadow-md w-3/5">Filter by Region <span><font-awesome-icon icon="fa-solid fa-angle-down" /></span></button>
                <div :class="!showFilter ? 'hidden' : ''" class="absolute w-3/5 py-2 pr-6">
                    <ul class="flex flex-col gap-y-2 bg-white p-5 rounded-md shadow-md">
                        <li v-for="(region, id) in regions" :key="id" @click="select = region">{{ region }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="content" class="flex flex-col gap-y-5 p-7">
            <div v-for="country in filteredCountriesList" :key="country.name" class="bg-white rounded-md shadow-sm">
                <router-link :to="{name:'Detail', params: {id: country.name}}">
                    <img :src="country.flags.svg" :alt="country.name" class="rounded-t-md">
                    <div class="p-7 pb-10">
                        <h2 class="font-bold text-xl mb-3">{{ country.name }}</h2>
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
            loading: true,
            search: "",
            select:"",
            countries:null,
            showFilter:false,
            regions: ['Africa','America','Asia','Europe','Oceania']
        }
    },
    computed: {
        filteredCountriesList() {
            return this.countries.filter(filter => {
                    if(this.select && filter.region.toLowerCase().indexOf(this.select.toLowerCase()) <= -1){
                        return false
                    }
                    if(this.search && filter.name.toLowerCase().indexOf(this.search.toLowerCase()) <= -1){ 
                        return false
                    }else{
                        return this.countries
                    }
            })
        }
    },
    beforeMount() {
        this.getCountries()
    },
    methods: {
        getCountries(){
            API.get().then(res => {
                this.loading = false;
                this.countries = res.data;
            })
        },
    }
}
</script>