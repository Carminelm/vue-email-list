const {createApp} = Vue;

createApp({
    data(){
        return {
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            mailsList: [],
        };
    },
    methods: {},
    mounted() {
        for(let i = 0; i < 10; i++) {
            axios.get(
                    this.apiUrl)
                .then((data) => {
                    const result = data.data.response;
                    this.mailsList.push(result);
                });
            }
        }
    }).mount('#app');