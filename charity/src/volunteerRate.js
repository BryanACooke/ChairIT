
import './donateSubmitPage.css';
import './VolunteerRate.css';
import onehour from './assets/onehour.png';
import twohour from './assets/twohours.png';
import threehour from './assets/threehours.png';
import axios from 'axios';
import starImage from './assets/starGrey.png';
import selectedStarImage from './assets/starYellow.png';
import React, { useEffect, useState } from 'react';





function VolunteerRate() {
    const [selectedRating, setSelectedRating] = useState(null);
    const [response, setResponse] = useState(null);
    const [userID, setUserID] = useState(null);

    const handleStarClick = (rating) => {
        setSelectedRating(rating);
    };

    useEffect(() => {
        axios.get('/render').then((response) => {
            console.log(response.data);
            setResponse(response.data);
            setUserID(response.data.ID);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

function handleSubmitButton(){
const postData = {
    "rating": selectedRating,
    "ID": userID
}

const url="/Rerate";

axios.post(url, postData).then((response) => {
    console.log(response.data);
}).catch((error) => {
    console.log(error);
});
}

    return (
        <div className="volunteerRateMainDiv backgroundColor">
            <div className="headerDiv">
                <h1 className="whiteFont">Volunteering</h1>
                <div className="rewardBadges">
                    <div className="rewardBadge">
                        <img className="rewardBadgeImage" src={onehour} alt={`Preview`} />
                    </div>
                    <div className="rewardBadge">
                        <img className="rewardBadgeImage" src={twohour} alt={`Preview`} />
                    </div>
                    <div className="rewardBadge">
                        <img className="rewardBadgeImage addBlur" src={threehour} alt={`Preview`} />
                    </div>
                </div>
            </div>

            <div className="objectHolder">
                <div className="titleObjectDiv">
                    <h1 className="objectTitle">Desk Chair <span className="objectDescription">| 5 years of use</span></h1>
                </div>
                <div className="imageObjectDiv">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <img className="imageView" src="https://m.media-amazon.com/images/I/711Twwp3P5L.jpg" alt={`Preview`} />
                                </td>
                                <td>
                                    <img className="imageView" src="https://m.media-amazon.com/images/I/711Twwp3P5L.jpg" alt={`Preview`} />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="parentRatingQualDiv">

                    <div className="rateQualityDiv">
                        <h1> Please rate the quality of this item </h1>
                    </div>
                    <div className="starRatingDiv">
                    {[1,2,3,4,5].map((rating) => (
                     <div key={rating}>
          <input type="radio" id={`star${rating}`} name="rating" value={rating} style={{ display: 'none' }} />
          <label
            htmlFor={`star${rating}`}
            className={`star ${selectedRating >= rating ? 'selectedStar' : 'greyStar'}`}
            onClick={() => handleStarClick(rating)}
          >
            <img src={selectedRating >= rating ? selectedStarImage : starImage} alt="Star" />
          </label>
        </div>

      ))}
    </div>
    <div className="divButtonQual">
        <button onClick={handleSubmitButton} className="continueButton continueButtonMoreStyle addSpace">Submit</button>
                        </div>
                </div>
            </div>






        </div>

    )
}

export default VolunteerRate;