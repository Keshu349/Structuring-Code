class Form{
    constructor(){
    

    }
    display(){
        var title = createElement('H2')
        title.html('CAR RACING GAME')
        title.position(130,0)
        var input = createInput("NAME:")
        input.position(130,160)
        var button = createButton("PLAY")
        button.position(250,200)

    }
}