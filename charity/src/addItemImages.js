
    import './signUpPage.css';
    import './addImagePage.css';
    import { Navigate } from 'react-router-dom';
    import { useNavigate } from 'react-router-dom';
    import {DonationInformation} from './donationInfo.js';
    import { useEffect, useState } from 'react';
    import plusIcon from './assets/plusIcon.png';

function AddItemImage(){
        let navigate = useNavigate();
        const [image, setImage] = useState('');
        const [imagePreview, setImagePreview] = useState([]);

        useEffect(() => {
            if(image.length < 1) return;
                const newImagePreview = [];
                image.forEach(image => newImagePreview.push(URL.createObjectURL(image)));
                setImagePreview(newImagePreview);
        }, [image]);
                
    
        function onImageChange(e) {
            if (e.target.files && e.target.files.length > 0) {
              let imgs = Array.from(e.target.files);
              setImage(imgs);
            }
          }

        function submitHandler(){
            navigate('/DonationInformation')
        }
        <img src="./assets/plusIcon.png" />
    
        return(
            <div className="backgroundColor signUpPageHome">
                <h1 className="personalInfoTitle">Personal Info</h1>
    
    <div className="formInputDiv">
                <input className="inputData" type="file" multiple accept="image/*" onClick={onImageChange}/>
                   
                <div className="imageDisplay">
        {imagePreview.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Image Preview</th>
              </tr>
            </thead>
            <tbody>
              {imagePreview.map((image, index) => (
                <tr key={index}>
                  <td>
                    <img className="imageView" src={image} alt={`Preview ${index}`} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>

<div className="imageDisplay">

</div>



            </div>
        );
    
    
    
    }


export default AddItemImage;