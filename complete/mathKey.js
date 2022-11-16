const mathKey = {
    "+": (current, next) => current + next,
    "-": (current, next) => current - next,
    "/": (a, b) => a / b,
    "*": (a, b) => a * b,
    "**": (a, b) => {return Math.pow(a, b)}
}

export default mathKey;