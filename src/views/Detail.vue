<template>
    <div class="bg-very_light_gray_bg py-10">
        <button @click="$router.go(-1)" class="flex items-center bg-white shadow-lg px-6 py-1 mb-20"  aria-label="back" >
            <font-awesome-icon icon="fa-solid fa-arrow-left-long"/>
            <span class="pl-2">Back</span>
        </button>
        <div class="flex flex-col gap-y-10">
            <div>
                <img :src="countryDetail.flag" :alt="countryDetail.name" class="w-full h-72"/>
            </div>
            <div class="flex flex-col gap-y-10">
                <div class="flex flex-col gap-y-3">
                    <h2 class="font-bold text-2xl mb-3">{{ countryDetail.name }}</h2>
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
                <div class="flex flex-col gap-y-3">
                    <h3 class="font-bold text-xl mb-3">Border Countries</h3>
                    <div class="flex justify-between flex-wrap">
                        <div v-for="border in bordersFullName" :key="border" class="w-1/3 text-center ">
                            <p class="py-1.5 m-2 bg-white">{{ border }}</p>
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