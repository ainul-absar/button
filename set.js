console.log("union and intersection")
let arr1 = ["10","20","30"]
let arr2 = ["30","20","40","50"]
//union
console.log("union")
const union = arr1.concat(arr2)
console.log(union)
//intersection

console.log("intersection")
    const intersection = arr2.filter(num => arr1.includes(num)) 
console.log(intersection)
