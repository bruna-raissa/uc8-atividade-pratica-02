let a = 5
let b = 10
let c = 2
let delta = b * b - 4 * a * c
if (delta < 0) {
    console.log('Não é possível obter x1 e x2')
} else {
    let x1 = -b + (Math.sqrt(delta))/ (2 * a)
    let x2 = -b - (Math.sqrt(delta))/ (2 * a)
    console.log('Valor de x1 =',x1)
    console.log('Valor de x2 =',x2)
}
