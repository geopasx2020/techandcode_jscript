console.log(this)

let test=()=>{
    console.log(this)
}

function test2(){
    console.log(this) //apli function den krataei to teleftaio this, enw i arrow to krataei
}
test() 
test2()

function print_text(){//επαναφορά κειμενου σε Button
    //console.log(this)
    let self=this
    let text=this.innerText
    this.innerText='You Clicked me!';
    console.log(this)
    this.style.backgroundColor = '#ff0000';
    setTimeout(function(){
        console.log(this)
        self.innerText=text
    },3000)//3000ms=3s
}

document.querySelector('#button-one').addEventListener('click',print_text);
document.querySelector('#button-two').addEventListener('click',print_text);

console.log('start');

setTimeout(function(){
 console.log('end')
},5000)
