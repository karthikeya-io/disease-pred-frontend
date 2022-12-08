import React from 'react'
import "../css/Result.css"

export default function Result(props) {
    let array = []

    const feedbackHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const found = array.findIndex(element => element.name === name )
        const feedbackDisease = {
            name: name,
            value: value
        }
        if (found === -1) {
            array.push(feedbackDisease)
        }
        else {
            array[found].value = value
        }
        
        
    }

    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const feedback = {
            arr: array
        }
        if (array.length < 10) {
            alert('give feedback for all items')
            return
        }
        alert(JSON.stringify(feedback))
        console.log(feedback);
        postData('http://localhost:4000/api/feedback', feedback)
            .then((data) => {
                console.log(data); // JSON data parsed by `data.json()` call
                array = []
                props.fun(data);
            });
    }
    return (
        <div style={{ margin: " 20px" }}>
            <h3>Search Results</h3>
            <div className="row g-4">
                {
                    props.results.results.map((res) => {
                        return (
                            <div key={res._id}>
                                <div className="col-12">
                                    <div className="card resultDiv">
                                        <div className='card-text'>
                                            <a  target="_blank" href={`https://www.drugs.com/health-guide/${res._source.disease}.html`}>

                                            <span className='resultName'>{res._source.disease}</span>
                                            </a>
                                            
                                            <span className='options'>
                                                <input onChange={feedbackHandler} className='radio' type="radio" value='yes' name={res._source.disease}  />
                                                <label htmlFor="yes">Yes</label>

                                                <input onChange={feedbackHandler} className='radio'  type="radio" value='no' name={res._source.disease}  />
                                                <label htmlFor="No">No</label>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <button style={{ margin: " 20px" }} onClick={submitHandler} className='btn btn-primary'>submit</button>
        </div>
    )
}
