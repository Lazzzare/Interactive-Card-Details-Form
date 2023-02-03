import React from 'react'

const Form = () => {
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="cardholder_name">Cardholder Name</label>
                    <input type="text"
                        name='cardholder_name'
                        id='cardholder_name'
                        placeholder='e.g. Jane Appleseed'
                        required
                    />
                </div>
            </form>
        </div>
    )
}

export default Form