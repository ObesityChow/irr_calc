const payList = process.argv.slice(3).map(str => Number(str))

const target = Number(process.argv[2])
function calc(irr) {
    return payList.reduce(reducer,0)

    function reducer(total, curr, idx) {
        // console.log(total, curr, idx)
        return total + curr / Math.pow((1 + irr), ((1 + idx)/payList.length))
    }
}

for (let i = 2; i < 1000 ; i += 0.001) {

    const cardinal = calc(i / 100)

    if (cardinal < target) {
        console.log(`${i}%`)
        break
    }
}