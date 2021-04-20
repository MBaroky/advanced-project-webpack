const fetcher = require('./fetcher');

const distributer = ()=>{
    fetcher().then(function(res) {
        console.log(res)
        if (res.error){ // checking if error was sent from server
            document.getElementById('results').innerHTML = '' // clearinf the results element
            alert(`ERROR: ${res.error}`) // showing the error
        }else{
            // if successfull
        let { // deconstructing the response data
            agreement,
            confidence,
            irony,
            model,
            score_tag,
            subjectivity
        } = res

        // showing the returned data in the results element as a table
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
        }
    })
}

function handleSubmit(event) {
    event.preventDefault()
    distributer();
}

export { handleSubmit, fetcher, distributer }
