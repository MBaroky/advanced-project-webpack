const fetcher = (formText) =>{
    // check what text was put into the form field

    Client.checkForName(formText)
    let data = {
        "text":formText
    }
    console.log("::: Form Submitted :::")


    return fetch('http://localhost:8081/postText', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify(data)
    })
    .then(res => res.json())
}

module.exports ={
    fetcher
}