class Form{
    constructor(){
        this.input=createInput("name")
        this.button=createButton("PLAY")
        this.greeting=createElement('h3')
    }
    hide(){
        this.greeting.hide()
        this.input.hide()
        this.button.hide()
    }
    display(){
        var title=createElement('h2')
        title.html("CAR RACING GAME")
        title.position(500,0)

       
        this.input.position(500,150)

        
        this.button.position(500,190)

        
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name=this.input.value()
            playerCount=playerCount+1
            player.index=playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("hello "+player.name)
            this.greeting.position(500,150)
        })
    }
}