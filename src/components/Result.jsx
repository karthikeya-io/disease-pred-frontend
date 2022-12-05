import React from 'react'

export default function Result(props) {
    const array = []
    return (
        <div style={{ margin: " 20px" }}>
            <h3>Search Results</h3>
            <div className="row g-4">
                {
                    props.results.results.map((res) => {
                        return (
                            <>
                                <div className="col-4">
                                    <div className="card">
                                        <div className='card-text'>{res._source.disease}</div>
                                        <div className=''>
                                            <input type="radio" name={res._source.disease} id="yes" />
                                            <label htmlFor="yes">Yes</label>

                                            <input type="radio" name={res._source.disease} id="No" />
                                            <label htmlFor="No">No</label>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>

        </div>
    )
}
