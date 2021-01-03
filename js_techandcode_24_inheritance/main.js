

class Player{ //orismos klasis
  constructor(name){
    this.name=name,
    this.score=0,
    this.level=1,
    this.banned=false
  }

  addToScore(){
    this.score++;
    return this
}
nextLevel(){
  this.level++;
  return this
}
}

class AdminPlayer extends Player{
 ban(player){
   player.banned=true
 }

 unban(player){
  player.banned=false
}

}

let player1=new Player('Bill')
let player2=new Player ('Alex')
let admin=new AdminPlayer('George')
player1.addToScore()
player1.nextLevel()
const p=document.querySelector('#players')
p.innerText=`${player1.name}  score: ${player1.score} level: ${player1.level}`

//player1.addScore().nextLevel() den paizei
// return this stis methodoys
