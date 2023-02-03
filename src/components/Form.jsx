import React from "react";

const Form = () => {
    return (
        <div>
            <form className="flex flex-col justify-center gap-8 h-screen max-w-lg">
                <div>
                    <label htmlFor="cardholder_name">Cardholder Name</label>
                    <input
                        type="text"
                        name="cardholder_name"
                        id="cardholder_name"
                        placeholder="e.g. Jane Appleseed"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="card_number">Card Namber</label>
                    <input
                        type="text"
                        name="card-number"
                        id="card-number"
                        placeholder="e.g. 1234 5678 9012 3456"
                        maxLength={19}
                        required
                    />
                </div>

                <article className="flex items-center justify-between gap-8">
                    <div className="flex-1">
                        <label htmlFor="expiry_date">Exp. Date (MM/YY)</label>
                        <input
                            type="month"
                            name="expiry_date"
                            id="expiry_date"
                            placeholder="MM YY"
                            required
                        />
                    </div>

                    <div className="flex-1">
                        <label htmlFor="cvc">CVC</label>
                        <input
                            type="number"
                            name="cvc"
                            id="cvc"
                            placeholder="e.g. 123"
                            maxLength={3}
                            required
                        />
                    </div>
                </article>
                <button type="submit" className="btn">Confirm</button>
            </form>
        </div>
    );
};

export default Form;
