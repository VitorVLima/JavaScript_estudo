 class Npc{
    static alerta = false
    constructor(energia){
        this.energia = energia
    }

    info=function(){
        console.log(`Energia: ${this.energia}`)
        console.log(`Energia: ${(Npc.alerta?"Sim":"Não")}`)
        console.log(`--------------`)
    }
    static alertar = function(){
        Npc.alerta = true
    }
 }

 Npc.alertar()

 const npc1 = new Npc(200)
 const npc2 = new Npc(100)
 const npc3 = new Npc(300)
 npc1.info()
 npc2.info()
 npc3.info()