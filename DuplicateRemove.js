let arr=[1,3,2,3,1,5,5]
let newArr=[]
for(let i=0;i<arr.length;i++){
    let duplicate=false
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            duplicate=true
            break
        }
    }
    if(!duplicate){
        newArr.push(arr[i])
    }
}
console.log("Removing all Duplicate",newArr)
// using ES6 Js duplicate remove
console.log(...new Set(arr))
