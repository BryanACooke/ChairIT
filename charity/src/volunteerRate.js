
import './donateSubmitPage.css';
import './VolunteerRate.css';
import onehour from './assets/onehour.png';
import twohour from './assets/twohours.png';
import threehour from './assets/threehours.png';

import starGrey from './assets/starGrey.png';
import starYellow from './assets/starYellow.png';

function VolunteerRate() {
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
                        <img className="rewardBadgeImage" src={threehour} alt={`Preview`} />
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
                        <input type="radio" id="star5" name="rating" value="5" />
                        <label htmlFor="star5">
                            <img className="greyStar" src={starGrey} alt="Star" />
                        </label>

                        <input type="radio" id="star4" name="rating" value="4" />
                        <label htmlFor="star4">
                            <img className="greyStar" src={starGrey} alt="Star" />
                        </label>

                        <input type="radio" id="star3" name="rating" value="3" />
                        <label htmlFor="star3">
                            <img className="greyStar" src={starGrey} alt="Star" />
                        </label>

                        <input type="radio" id="star2" name="rating" value="2" />
                        <label htmlFor="star2">
                            <img className="greyStar" src={starGrey} alt="Star" />
                        </label>

                        <input type="radio" id="star1" name="rating" value="1" />
                        <label htmlFor="star1">
                            <img className="greyStar" src={starGrey} alt="Star" />
                        </label>
                    </div>
                </div>
            </div>








        </div>

    )
}

export default VolunteerRate;