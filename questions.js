const questions = [
    "What is your name?",
    "What do you like doing?",
    "What would you rather be doing?"
]

const ask = (i=0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `)
}

ask()