// function count (n){
//     for( let i = 1; i<=n; i++){
//         console.log(i)
//     }
// }
// count(6);

// function count (n){
//     for( let i = 1; i<=n; i++){
//         console.log(i)
//     }
//     if (n<=0){
//         console.log('Invalid')
//     }
//
// }
// count(0)
// count(-3)
// count(23)

// function replacewithx(arr,x){
//     for(let i= 0; i< arr.length;i++){
//         arr[i]=x
//     }
//     console.log(arr)
// }
// replacewithx([1,2,3,4,5],9)
// replacewithx([1,2,3,4,5],7)

function Aray(arr,x){
    let newAray =[]
    for(let i= 0; i< arr.length;i++){
       newAray.push(arr[i])
    }
    console.log(arr)
}
Aray(5)