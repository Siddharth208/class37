class Player{
    constructor(){
        this.index=null;
        this.name=null;
        this.distance=0;
    }
    getCount(){
        var getcount=database.ref('playerCount')
        getcount.on("value",function(data){
            playerCount=data.val()
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
        
    }
    update(){
        var playerindex="player"+playerCount
        database.ref(playerindex).set({
            name:this.name,
            distance:this.distance
        })
    }
    static getplayerinfo(){
        var playerinforef=database.ref('players')
        playerinforef.on("value",function(data){
            allplayers=data.val()
        })
    }
}