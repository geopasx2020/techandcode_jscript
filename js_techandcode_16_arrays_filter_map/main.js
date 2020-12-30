const a=[1, 2, 3, 1, 12, 6, 34, 634]

const students= [
    {
        name:  "Alexia Alexioy",
        grade: 7
    },
    {
        name:  "Vasiliki Vasilioy",
        grade: 9
    },
    {
        name:  "Georgia Georgiou",
        grade: 10
    },
    
]

let b=a.filter(x=>x > 10)
let ab= a.map(x=>x**2)
let c=students.filter(x=>x.grade>=8)
let names=students.map(x=>x.name)
let names_8=students.filter(x=>x.grade>=8).map(x=>x.name)
console.log(b)
console.log(c)
console.log(ab)
console.log(names)
console.log(names_8)