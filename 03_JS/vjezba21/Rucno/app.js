const {createApp} = Vue;

createApp({
    data(){
        return{
            brojac: 10,
            upozori: false
        }
    },
    methods:{
        uvecajZa2(){
            this.upozori=false;
            this.brojac+=2;

        },
        uvecaj(){
            this.upozori=false;
            this.brojac++;
        },
        umanji(){
            if(this.brojac===0){
                this.upozori=true;
                return;
            }
            this.brojac--;
        },
        umanjiZa2(){
             if(this.brojac===1){
                this.upozori=true;
                this.brojac=0;
                return;
            }
            this.brojac-=2;
        }
    }
}).mount('#app');