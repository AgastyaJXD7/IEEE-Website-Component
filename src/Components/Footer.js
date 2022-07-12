import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
    <div className="footer-container">
        <div className="footer-wrapper">
            <h4>IEEE NSUT</h4>
        </div>
        <div className="footer-wrapper" >
            <h4>ABOUT</h4>
            <a href="#">Company</a>
            <a href="#">Team</a>
            <a href="#">Careers</a>
            <a href="#">Github</a>
        </div>
        <div className="footer-wrapper">
            <h4>ABOUT</h4>
            <a href="#">Company</a>
            <a href="#">Team</a>
            <a href="#">Careers</a>
            <a href="#">Github</a>
        </div>
        <div className="social-media ">
            <a href="#" className="fa-brands fa-linkedin"></a>
            <a href="#" className="fa-brands fa-facebook"></a>
            <a href="#" className="fa-brands fa-instagram"></a>
            <a href="#" className="fa-brands fa-twitter"></a>
        </div>
    </div>
    <hr className="divider"/>
    <div className="webright">
        <div className="webright-left">
           <p>Copyright &#169 2022 IEEE NSUT.ALL RIGHTS RESERVED</p>
        </div>
        <div className="webright-right">
            <a href="#">Terms of use</a>
            <a href="#">Privacy Policy</a>
        </div>
    </div>
</footer>
  )
}

export default Footer