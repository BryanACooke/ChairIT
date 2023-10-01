import './signUpPage.css';
import axios from 'axios'
import {useState} from 'react'
import {useNavigate} from "react-router-dom"


function DonationInformation(){
    const [error, setError] = useState(null);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [img, setImg] = useState("");
    const navigate = useNavigate();

    function submitHandler(e){
        e.preventDefault();
        axios.post('/addproduct',
        {
            'name': name,
            'category': category,
            'img': img
        }). then(function(response) {
            navigate('/');
            setError(false);
        }).catch(function(error) {
            setError(error.message);
            console.log(error);
        })

    }
    
    return(
        <div className="backgroundColor signUpPageHome">
            <h1 className="personalInfoTitle">Donation Info</h1>

<div className="formInputDiv">
    <form onSubmit={submitHandler} className="formInput">
  <input className="inputFormName"  placeholder="Name" type="text" name="name" value={name} onChange={(e) => {setName(e.target.value)}} />
  <input className="inputFormName"  placeholder="Category" type="text" name="category" value={category} onChange={(e) => {setCategory(e.target.value)}} />
 <input className="inputFormName"  placeholder="Image Path" type="text" name="img" value={img} onChange={(e) => {setImg(e.target.value)}} />
  <input className="continueButton continueButtonMoreStyle" type="submit" value="Continue" />
</form>

</div>
        </div>
    );



}

export default DonationInformation;