
    import './signUpPage.css';
    import { Navigate } from 'react-router-dom';
    import { useNavigate } from 'react-router-dom';
    import {DonationInformation} from './donationInfo.js';
    import { useEffect, useState } from 'react';


function AddItemImage(){
        let navigate = useNavigate();
        const [image, setImage] = useState('');
        const [imagePreview, setImagePreview] = useState('');

        useEffect(() => {
            if(!image){
                setImagePreview(undefined)
                return
            }

            const objectUrl = URL.createObjectURL(image)
            setImagePreview(objectUrl)

            return () => URL.revokeObjectURL(objectUrl)
        }, [image])


        function onImageChange(e){
            if(e.target.files && e.target.files[0]){
                let img = e.target.files[0]
                setImage(img)
            }
        }

        function submitHandler(){
            navigate('/DonationInformation')
        }
    
    
        return(
            <div className="backgroundColor signUpPageHome">
                <h1 className="personalInfoTitle">Personal Info</h1>
    
    <div className="formInputDiv">
                <input type="file" multiple accept="image/*" onChange={onImageChange}/>
    
    </div>

<div className="imageDisplay">

</div>



            </div>
        );
    
    
    
    }


export default AddItemImage;