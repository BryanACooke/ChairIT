import './donateSubmitPage.css';




function DonateOrSubmit() {
    return (
        <div className="donateOrSubmitPage backgroundColor">
            <div className="mainTitle">
            <h1 className="whiteFont">Would you like to donate an item or volunteer to rate items?</h1>
            

            <div className="donateOrSubmitButtons">
                <div className="donateButton">
                    <h1 className="donateButtonText">Donate Time</h1>
                    <button className="donateButtonButton">Click Me</button>
                </div>

                <div className="approveButton">
                    <h1 className="approveButtonText">Approve an Item</h1>
                    <button className="approveButtonButton">Click Me</button>
                </div>
        </div>
        </div>
        </div>
    );

}

export default DonateOrSubmit;