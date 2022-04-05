// Implementar solución aquí
// Implementar solución aquí

Vue.createApp({
    data() {
        return {
            bgColor: '#FFFFFF'
        }
    },
    methods:{
        updateRandomColor(){
            let red = Math.floor(Math.random()*255);
            let green = Math.floor(Math.random()*255);
            let blue = Math.floor(Math.random()*255);
            this.bgColor = `rgb(${red}, ${green}, ${blue})`;
        }
    }
}).mount('#app')
