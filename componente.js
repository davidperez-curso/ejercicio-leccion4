Vue.component('componente',{
    template: /*html*/`
    <div>
        <h1 class="h1">Historias</h1>
        <h2 class="h2 mt-4">Las historias de Alex</h2>
        <ul class="list-group">
            <li class="list-group-item" v-for="frase of frasesAlex">Alex dice: {{frase}}</li>
        </ul>
        <h2 class="h2 mt-4">Las historias de Juan</h2>
        <ul class="list-group" v-for="frase of frasesJuan">
            <li class="list-group-item">Juan dice: {{frase}}</li>
        </ul>
        
        <div class="input-group my-4">
            <input class="form-control bg-warning" id="buscador" type="search" placeholder="Escribe aquí la frase que estas buscando" v-model="buscarFrase">
        </div>
        
        <h3>Resultados de la búsqueda</h3>
        <ul>
            <li v-for="linea in buscar">{{linea}}</li>
        </ul>
    </div>
    `
    ,
    data(){
        return{
            frasesJuan: ["!Choqué mi auto hoy", "Alguien se comió mi chocolate...","¡Ayer anduve en bicicleta!"],
            frasesAlex: ["¡Ayer, alguien se robo mi bolso!", "Me comí el chocolate de alguien","¡Hoy vi un auto chocar!"],
            buscarFrase: "",  
        }
    },
    computed: {
        buscar(){
            return [...this.frasesJuan, ...this.frasesAlex].filter(
                (frase) => frase.toLowerCase().includes(this.buscarFrase.toLowerCase())
                );
        },
    },
});