const{createApp} = Vue;
createApp({
    data() {
        return {
            emailArray: [],
        }
    },
    created() {
        for(let i=0; i<10; i++){
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response)=>{
                this.emailArray.push(response.data.response);
            })
        }
    },
    methods: {
        
    },
}).mount('#app')