import React, { Fragment, useState, useEffect } from "react";
import { submitCv, clearErrors } from "../actions/productAction";
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import LoadingSpinner from "./Loader";
import "./CvUpload.css"
import { useAlert } from 'react-alert'
import Button from '@mui/material/Button';

const CvUploadForm = () => {


    const alert = useAlert()
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { error, loading } = useSelector(state => state.cvReducer);
    //const [ isLoading,setIsLoading] = useState(true);
    const [applicantName, setApplicantName] = useState("");
    const [applicantEmail, setApplicantEmail] = useState("");
    const [applicantDescription, setApplicantDescription] = useState("");
    const [applicantCgpa, setApplicantCgpa] = useState("");
    const [applicantExperience, setApplicantExperience] = useState("");
    const [cvFile,setCvFile]=useState("");
    const [applicantCnic, setApplicantCnic] = useState("");
    const [applicantPhone, setApplicantPhone] = useState("");
    const [applicantUni, setApplicantUni] = useState("");


    /* const[user,setUser]=useState({
         name:"",
         email:"",
         password:""
     })
 
     const{name,email,password}=user
 
  const [avatar,setAvatar]=useState();
  const[avatarPreview,setAvatarPreview]=useState("/logo192.png");
 
 */

  const handleChange = (event) => {
    if (event.target.name === "avatar") {

        
            const reader = new FileReader();
           
            reader.onload = () => {
                if (reader.readyState === 2) {
                    
                    setCvFile(reader.result);
                }
            }

            reader.readAsDataURL(event.target.files[0])

    
     
    }

 

};

    const cvSubmit = (e) => {
        //setIsLoading(true)

        e.preventDefault();

        /* const myForm=new FormData();
             myForm.set("name",name)
         myForm.set("email",email)
         myForm.set("password",password)
         //myForm.set("avatar",avatar)
 */

        dispatch(submitCv(applicantName, applicantEmail,
            applicantDescription, applicantCgpa,
            applicantExperience, applicantUni,
            applicantPhone, applicantCnic))


    }

    /* const registerDataChange=(e) =>{
        /* if(e.target.name==="avatar"){
            const reader=new FileReader();
            reader.onload=()=>{
             if(reader.readyState===2){
                 setAvatarPreview(reader.result);
                 setAvatar(reader.result);
             }
            }
            reader.readAsDataURL(e.target.files[0])
         }
        
        
             setUser({...user,[e.target.name]:e.target.value})
         
     }
     */


    useEffect(() => {
        //  setTimeout(() => setIsLoading(false), 1000)



        if (error) {
            alert.error(error)

            dispatch(clearErrors())
        }
        else {
            alert.success('You have applied successfully ')

        }


    }, [dispatch, error, navigate, alert])






    return (
        <Fragment> {loading ? <LoadingSpinner /> : (
            <Fragment  >


                <div className="cv-block" >

                    <form className="cv-form" onSubmit={cvSubmit} encType="multipart/form-data">
                        <h1>Submit Your <strong className="pinofo">Personal Information</strong></h1>
                        <span>Name</span>
                        <div className="cv-Name">


                            <input
                                type="text"
                                placeholder="Enter name"
                                value={applicantName}
                                onChange={(e) => setApplicantName(e.target.value)}
                            />
                        </div>
                        <span>Email</span>
                        <div className="cv-Email">

                            <input
                                type="email"
                                placeholder="Enter email"
                                value={applicantEmail}
                                onChange={(e) => setApplicantEmail(e.target.value)}
                            />
                        </div>

                        <span>Cgpa</span>
                        <div className="cv-cgpa">

                            <input
                                type="text"
                                placeholder="Enter cgpa"
                                value={applicantCgpa}
                                onChange={(e) => setApplicantCgpa(e.target.value)}
                            />
                        </div>
                        <span>How many year of experience do you have?</span>
                        <div className="cv-cgpa">

                            <input
                                type="text"
                                placeholder="Enter Experience"
                                value={applicantExperience}
                                onChange={(e) => setApplicantExperience(e.target.value)}
                            />
                        </div>
                        <span>CNIC </span>
                        <div className="cv-idcard">

                            <input
                                type="text"
                                placeholder="Enter CNIC"
                                value={applicantCnic}
                                onChange={(e) => setApplicantCnic(e.target.value)}
                            />
                        </div>
                        <span>Phone </span>
                        <div className="cv-phoneNo">

                            <input
                                type="text"
                                placeholder="Enter phone"
                                value={applicantPhone}
                                onChange={(e) => setApplicantPhone(e.target.value)}
                            />
                        </div>
                        <span>University</span>
                        <div className="cv-university">
                            <select name="option" onChange={(e) => setApplicantUni(e.target.value)} value={applicantUni} >

                                <option value="" >Please select university...</option>
                                <option value="NUST">NUST</option>
                                <option value="FAST">FAST</option>
                                <option value="COMSAT">COMSAT</option>
                                <option value="UET">UET</option>
                                <option value="Quaid-Azam">Quaid-Azam</option>
                            </select>
                        </div>

                        <span>Cover Letter</span>
                        <div className="cv-Email">

                            <textarea
                                type="text"
                                placeholder="Write a cover letter...."
                                value={applicantDescription}
                                onChange={(e) => setApplicantDescription(e.target.value)}
                            />
                        </div>
                        <span>Upload Resume</span>
                        <div className="cv-upload-div">
                        <input

                            className="cv-upload"
                            type="file"
                            name="avatar"
                            placeholder="choose profile picture"
                            value={cvFile}
                            accept="image/*"
                            onChange={handleChange}
                        ></input></div>

                        {
                            /*
                             <div id="reregisterImage">
                            <img src={avatarPreview} alt="avatar preiew" ></img>
                            <input
                            type="file"
                            name="avatar"
                            accept="image/*"
                            onChange={registerDataChange}
                            >
                            </input>
            
                         </div>
                            */
                        }

                        <Button className="cv-btn-input" type="submit" disabled={loading ? true : false} >Submit</Button>

                    </form>
                </div>
                <div>



                </div>

            </Fragment>
        )}

        </Fragment>

    )
}

export default CvUploadForm