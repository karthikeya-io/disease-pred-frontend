import React from 'react'
import '../css/Searchbar.css';
import { useState } from 'react'

const MySearchComponent = (props) => {

    const [formDetails, setFormDetails] = useState({ "search": "" })
    const changeHandler = (event) => {
        let name = event.target.name;
        console.log(event.target.value);
        setFormDetails((prev) => {
            return (
                {
                    ...prev,
                    [name]: event.target.value
                }
            )
        })
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
        alert(JSON.stringify(formDetails))
        console.log(formDetails);
        postData('http://localhost:4000/api/search', formDetails)
            .then((data) => {
                console.log(data); // JSON data parsed by `data.json()` call
                setFormDetails({ "search": "" });
                props.print(data);
            });
    }

    return (
        <div>
            <h2>Search for Diseases based on symptoms</h2>
            <form className="example" onSubmit={submitHandler}>
                <input value={formDetails.search} onChange={changeHandler} type="text" placeholder="Search.." name="search" />
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
            
        </div>
    )
}

export default MySearchComponent