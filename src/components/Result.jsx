import React from 'react'
import "../css/Result.css"

export default function Result(props) {
    const array = []
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
                                            <span className='resultName'>{res._source.disease}</span>
                                            <span className='options'>
                                                <input type="radio" name={res._source.disease} id="yes" />
                                                <label htmlFor="yes">Yes</label>

                                                <input type="radio" name={res._source.disease} id="No" />
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

        </div>
    )
}
