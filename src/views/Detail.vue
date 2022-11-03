<template>
    <div class="bg-very_light_gray_bg dark:bg-very_dark_blue_bg dark:text-white desktop:h-screen py-10">
        <button @click="$router.go(-1)" class="flex items-center bg-white dark:bg-dark_blue dark:text-white shadow-lg px-6 py-1 mb-20"  aria-label="back" >
            <font-awesome-icon icon="fa-solid fa-arrow-left-long"/>
            <span class="pl-2">Back</span>
        </button>
        <div class="flex flex-col desktop:flex-row desktop:gap-x-40 gap-y-10">
            <div class="desktop:w-1/2">
                <img :src="countryDetail.flag" :alt="countryDetail.name" class="w-full h-72 desktop:h-96"/>
            </div>
            <div class="flex flex-col gap-y-10 desktop:w-1/2">
                <h2 class="font-bold text-2xl desktop:text-3xl">{{ countryDetail.name }}</h2>
                <div class="flex flex-col gap-y-10 desktop:flex-row desktop:justify-between">
                    <div class="flex flex-col gap-y-3">
                        <p><span class="font-bold">Native Name: </span>{{ countryDetail.nativeName }}</p>
                        <p><span class="font-bold">Population: </span>{{ countryDetail.population.toLocaleString('en-US') }}</p>
                        <p><span class="font-bold">Region: </span>{{ countryDetail.region }}</p>
                        <p><span class="font-bold">Sub Region: </span>{{ countryDetail.subregion }}</p>
                        <p><span class="font-bold">Capital: </span>{{ countryDetail.capital }}</p>
                    </div>
                    <div class="flex flex-col gap-y-3">
                        <p>
                            <span class="font-bold">Top Level Domain: </span>
                            <span v-for="top, id in countryDetail.topLevelDomain" :key="id">
                                <span v-if="id > 0">,</span>
                                {{ top }}
                            </span>
                        </p>
                        <p>
                            <span class="font-bold">Currencies: </span>
                            <span v-for="currency, id in countryDetail.currencies" :key="id">
                                <span v-if="id > 0">,</span>
                                {{ currency.name }}
                            </span>
                        </p>
                        <p>
                            <span class="font-bold">Languages: </span>
                            <span v-for="language, id in countryDetail.languages" :key="id">
                                <span v-if="id > 0">,</span>
                                {{ language.name }}
                            </span>
                        </p>
                    </div>
                </div>
                <div class="flex flex-col desktop:flex-row desktop:justify-start desktop:gap-x-3 gap-y-3">
                    <h3 class="font-bold text-xl desktop:text-base mb-3 desktop:mb-0 desktop:mt-1.5">Border Countries:</h3>
                    <div class="flex justify-between flex-wrap">
                        <div v-for="border in bordersFullName" :key="border" class="w-1/3">
                            <p class="py-1.5 m-2 desktop:m-0 desktop:mb-2 desktop:mx-2 desktop:px-2 bg-white text-center dark:bg-dark_blue dark:text-white shadow-md">{{ border }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import API from '../utils/api'

export default{
    name: "CountryDetail",
    props: ['id'],
    data(){
        return{
            countryDetail:{},
            bordersDetail: [],
            bordersFullName: [],
            country: this.id
        }
    },

    beforeMount(){
        this.getCountryDetail()
        this.getCountryName()
    },
    methods:{
        getCountryDetail(){
            API.getCountry(this.country)
            .then(res => {
                this.countryDetail = res.data[0]
                this.countryDetail.borders.forEach(border => {
                    this.bordersDetail.push(border)
                });
            })
        },
        getCountryName() {
            this.bordersDetail.forEach(border => {
                API.getCountryAlpha(border)
                .then(res => {
                    this.bordersFullName.push(res.data.name)
                })
            })
        }
    }
}
</script>