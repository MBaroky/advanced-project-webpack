const {fetcher} = require('./fetcher');

const distributer = (formText)=>{
    return fetcher(formText).then(function(res) {
        console.log(res)
        if (res.error){ // checking if error was sent from server
            return {
                pass:"error",
                data:res
            }
        }else{
            return {
                pass: "passed",
                data: res
            }
        }
    })
}

function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('name').value
    distributer(formText)
    .then(({pass, data})=>{
        if (pass === 'error'){ // checking if error was sent from server
            document.getElementById('table-wrapper').innerHTML = '' // clearinf the results element
            alert(`ERROR: ${data.error}`) // showing the error
        }else{
            // if successfull
        let { // deconstructing the response data
            agreement,
            confidence,
            irony,
            model,
            score_tag,
            subjectivity
        } = data

        // showing the returned data in the results element as a table
        document.getElementById('table-wrapper').innerHTML =
        `<table class="res-table">
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
    });
}

export { handleSubmit, fetcher, distributer }
