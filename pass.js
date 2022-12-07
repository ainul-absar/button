console.log("password generator")
let val = document.getElementById("id1")
let password = document.getElementById("id2")

console.log(val.value)
let arr1 = []
let arr2 = ["a","b","c","d","e"]
console.log(arr1)

for (let i = 0; i < 9; i++) {
    arr1.push(i)
    console.log(arr1)
}
let x =Math.floor((Math.random() ) + 1);
console.log(x)
let y = (Math.random()*arr2.length)
console.log(y)
//Add Function
function butnadd () {
    console.log(val.value)
    console.log([arr2.concat(arr1)]) 
  
    const arrfinal = arr2.concat(arr1)
    let y = Math.floor((Math.random()*arrfinal.length))
    console.log(y) 
    for (let index = 0; index < arrfinal.length; index++) {
    let y = Math.floor((Math.random()*arrfinal[index]))
        console.log(y)
    } 
    arrfinal.forEach(item => {
       let  pass = Math.floor((Math.random()*item)) 
     console.log(pass)
        pass.length = val.value
        password.value = pass
        console.log(password.value)
    });
    let newarr = arrfinal[Math.floor((Math.random()*arrfinal.value))]
    console.log(newarr)
//     let newarr1 = arrfinal[(arrfinal.length * Math.random())]
// console.log(newarr1)
//     arrfinal.length = val.value
//     console.log(arrfinal)
    
// console.log(arrfinal.join(""))
    // password.value = arrfinal.join("")

}
