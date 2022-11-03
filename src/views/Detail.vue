<template>
    <div class="text-center">
        <p>{{ countryDetail.name }}</p>
        <p>hola pedro</p>
    </div>

</template>
<script>
import API_COUNTRY from '../utils/api'

export default{
    name: "CountryDetail",
    data(){
        return{
            countryDetail:{},
        }
    },
    beforeMount(){
        this.getCountryDetail()
    },
    methods:{
        getCountryDetail(){
            API_COUNTRY.getCountry(this.$route.params.id)
            .then(res => {
                this.countryDetail = res.data[0]
            })
        }
    }
}
</script>