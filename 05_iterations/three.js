//for of

const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num)  //koi condition pass krne ki need hoti just ek iterator ko pass krna hai jispe loop run krna hai and wo automatically kaam krke dega 
}

const greetings="Hello World"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

//maps

const map=new Map
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('NZ',"New Zealand")
map.set('AUS',"Austrailia")
map.set('SA',"South Africa")
map.set('IN',"India")
console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);   
}

const myObj={
    'game1':'NFS',
    'game2':'Spiderman'
}

for (const [key,value] of myObj) {
    console.log(key,':-',value)  
}
