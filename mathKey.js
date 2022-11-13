const mathKey = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "/": (a, b) => a / b,
    "*": (a, b) => a * b,
    "**": (a, b) => {return Math.pow(a, b)}
}

export default mathKey;