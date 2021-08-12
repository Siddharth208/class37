class Game{
    constructor(){

    }
    getState(){
        var gameStateref=database.ref('gameState')
        gameStateref.on("value",function(data){
            gameState=data.val()
        })

    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    async start(){
        if(gameState===0){
           
            player=new Player()
           var playerCountref=await database.ref('playerCount').once("value") 
           if(playerCountref.exists()){
               playerCount=playerCountref.val()
               player.getCount()
           }
            form=new Form()
            form.display()  
        }
    }
    play(){
        form.hide();
        textSize(30)
        text("Game Started",500,100)
        Player.getplayerinfo()
        if(allplayers !== undefined){
            var y=150;
            for(var players in allplayers)
            {
               if(players==="player"+player.index)
               fill("red")
               else
               fill("black")
                y=y+20
                textSize(20)
                text(allplayers[players].name+":"+allplayers[players].distance,500,y)
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance=player.distance+50;
            player.update()
        }
    }
}