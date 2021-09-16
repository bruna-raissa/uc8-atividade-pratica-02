for (let i = 0; i <= 50; i++) {
    let qtdeDivisores = 1
    for (let j =i; j > 1; j--) {
        if (i % j == 0) {
            qtdeDivisores++
        }
    }
    if (qtdeDivisores == 2)
        console.log(i)
}