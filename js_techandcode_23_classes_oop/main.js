

class Player{ //orismos klasis
  constructor(name){
    this.name=name,
    this.score=0,
    this.level=1
  }

  addToScore(){
    this.score++;
}
nextLevel(){
  this.level++;
}
}

let player1=new Player('Bill')
let player2=new Player ('Alex')
player1.addToScore()
player1.nextLevel()


