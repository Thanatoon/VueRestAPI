const baseUrl = "http://vejr.eu/api.php"
Vue.createApp({
    data() {
        return {
            FBIList: null,
            locationName: null,
            currentData: null,
            pageData: 1,
        }
    },

    
    methods: {

        async getFBIList() {
            const url = "https://api.fbi.gov/wanted/v1/list"
            const response = await axios.get(url,{ params: { page: this.pageData } })
            this.FBIList = response.data
            console.log(response.data)
        },
        async getImages() {
            const url = "https://api.fbi.gov/wanted/v1/list"
            const response = await axios.get(url)
            this.FBIList = response.data.items.images
            console.log(response.data.items.images)
        },
        async nextPage() {
            await this.pageData++
            await this.getFBIList()
        },
        async previousPage() {
            await this.pageData--
            await this.getFBIList()
        },
        
    },
}).mount("#app")