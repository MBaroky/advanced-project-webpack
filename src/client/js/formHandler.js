function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
    let data = {
        "text":formText
    }
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
        let {
            agreement,
            confidence,
            irony,
            model,
            score_tag,
            subjectivity
        } = res
        document.getElementById('results').innerHTML =
        `<table class="results">
        <tr>
        <td> agreement: </td> <td> ${agreement}</td>
        </tr>
        <tr>
        <td> confidence:</td> <td>  ${confidence}</td>
        </tr>
        <tr>
        <td> irony:</td> <td>  ${irony}</td>
        </tr>
        <tr>
        <td> model:</td> <td>  ${model}</td>
        </tr>
        <tr>
        <td> score_tag: </td> <td> ${score_tag}</td>
        </tr>
        <tr>
        <td> subjectivity: </td> <td> ${subjectivity}</td>
        </tr>
        </table>
        `
    })
}

export { handleSubmit }
