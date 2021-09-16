// 1,1,2,3,5,8,13
let n1=0
let n2=1
let fibonacci=n1+n2
console.log(fibonacci)
for(let i=0;i<20;i++){
    console.log(fibonacci)
    n1=n2
    n2=fibonacci
    fibonacci=n1+n2
}