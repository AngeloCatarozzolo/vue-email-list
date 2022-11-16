new Vue({
    el:'#app',
    data:{
        mails:[]
    },
    mounted(){
        // da 0 a 10 prendi mail dall'api tramite axios e pusha il suo data.response dentro l'array dichiarato sopra
        for(let i=0;i<10;i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result)=>{
                this.mails.push(result.data.response)
            })
        }
    }
})