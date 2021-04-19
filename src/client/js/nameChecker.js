function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    let checker = names.includes(inputText)
    if(checker) {
        alert("Welcome, Captain!")
    }
    return checker
}
export { checkForName }
