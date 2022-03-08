const sum = (num) => {
    const fn = (...args) => {
        return args.length > 0 ?
            sum(num + args.reduce((acc, item) => acc += item, 0)) : 
            num;
    }

    fn.valueOf = () => num;
    return fn
}

const sum1 = sum(1)
console.log(sum1(3).valueOf())
console.log(sum(5)(2)(2).valueOf())
console.log(sum(5)(-1)(2).valueOf())