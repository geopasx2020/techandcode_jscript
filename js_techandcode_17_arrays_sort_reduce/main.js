const a=[1, 2, 3, 1, 12, 6, 34, 634]

let b=a.reduce((trexonSynolo,trexon)=>trexonSynolo+trexon,0)//den epistrefei array
console.log(a.sort())//vgazei errors,ta sygkrinei ws strings
console.log(a.sort((a,b)=>{ //swsta katalavainei oti einai arithmoi
//b tropos console.log(a.sort((a,b)=>(a>b?1:-1)))
    if(a>b){
        return 1 //vale to mefalytero
    }
    else{
        return -1
    }
    

}))
console.log(b)

const students= [
    {
        name:  "Alexia Alexioy",
        grade: 10
    },
    {
        name:  "Vasiliki Vasilioy",
        grade: 4
    },
    {
        name:  "Georgia Georgiou",
        grade: 6
    },
    
]

let mo=(students.map(x=>x.grade).reduce((a,b)=>a+b,0)/students.length).toFixed(2)

console.log(mo)

console.log(students.map(x=>x.name))

console.log(students.sort((a,b)=>(a.grade<b.grade?-1:1)))

console.log(students.map(x=>x.name))



