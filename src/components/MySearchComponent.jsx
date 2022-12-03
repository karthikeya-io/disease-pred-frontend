import React from 'react'
import '../css/Searchbar.css';

const MySearchComponent = () => {

    return (
        <div>
            <h2>Search for Diseases based on symptoms</h2>
            <form className="example" action="/action_page.php">
                <input type="text" placeholder="Search.." name="search"/>
                    <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>
    )
}

export default MySearchComponent