import { useState } from "react"
import toast, { Toaster } from "react-hot-toast";

const NewsLetter = () => {
    const [emailValue , setEmailValue] = useState('');

    const subScribe_btn = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailPattern.test(emailValue.trim())) {
            toast.error('Please enter a valid email address')
            return false
        }
        window.open('/brochure.pdf', '_blank');
    }
    return (
        <div className="footer-top mb-5">
            <Toaster position="top-right" />
            <div className="row">
                <div className="col-md-6">
                    <div className="">
                        <h3>Download Vishal Plast Company Brochure</h3>
                    </div>
                </div>


                <div className="col-md-6">
                    <div className="row ">
                        <div className="footer-sub-form">
                            <div className="input-group">
                                <input type="email" className="form-control" name="email" placeholder="Enter Email Address" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} />
                                <input type="submit" value="Submit Now" className="btn submit-btn" onClick={subScribe_btn} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter
