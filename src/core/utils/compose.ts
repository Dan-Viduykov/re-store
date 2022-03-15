const compose = (...funcs: Function[]) => (comp: Function) => {
    return funcs.reduceRight(
        (wrapped, f) => f(wrapped), comp
    )
}

export default compose