import React from 'react'
import './NewsLetterContent.css'
//import ContactUs from '../Images/Contact_Us.jpg'

function NewsLetterContent() {
  return (
    <div>
        <div className="contact">
            <div className="contact-container">
                <form action="">
                    <h1>Get in Touch</h1>
                    <input type="text" id="name" name="name" placeholder="Your name.."/>
                    <select id="subject" name="subject">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    <textarea id="message" name="message" placeholder="Write your message..."
                        style={{height: "70px"}}></textarea>
                    <input type="submit" value="SUBMIT NOW" className="btn" id="submit"/>
                </form>
            </div>
        </div>

        <div className="contact-box">
            <div className="box">
                <div className="icon-text">
                    <a href="#" className="fa fa-phone"></a>
                    <p>Phone</p>
                </div>
                <div className="number">
                    <p>+91 2328737387</p>
                </div>
            </div>
            <div className="box">
                <div className="icon-text">
                    <a href="#" className="fa fa-envelope"></a>
                    <p>Email</p>
                </div>
                <div className="number">
                    <p>info@ieeensut.in</p>
                </div>
            </div>
            <div className="box">
                <div className="icon-text">
                    <a href="#" className="fa fa-address-card"></a>
                    <p>Address</p>
                </div>
                <div className="number">
                    <p>Dwarka, Delhi</p>
                </div>
            </div>
        </div>

        <div className="contact-box main-box">
            <div className="text-box">
                <div className="text-1">
                    <h1>We're here to build your dream.</h1>
                </div>
                <div className="text-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero accusantium distinctio ullam atque
                    deleniti quisquam?
                </div>
                <button className="btn" id="btn3">Contact Us</button>
            </div>
            <div className="img-box">
               <img src="" alt=""/>   
            </div>
        </div>
    </div>
  )
}

export default NewsLetterContent