const ar=[1,2,3,1,'test',6]

for (let i in ar){
    console.log(i)
}//-->0 1 2 3 4 5

for (let i of ar){
    console.log(i)
}//-->iterator
ar.push(7)
console.log(ar.pop())//kai emfaniszei kai afairei taftoxrona to teleftaio stoixeio
console.log(ar.shift())//idia doyleia me pop apo tin arxi omws

const a=[1,2,4,'paok',5]
a.splice(2,1)//apo 2 thesi 1 stoixeio afairese
a.slice(3,4)//san to slice tis python,kanei afairesi apo 3 ews 3 kopse


console.log(a)
console.log(ar)