import React from 'react'
import './NewsLetterHeader.css'

function NewsLetterHeader() {
  return (
    <div className='NewsLetter-container'>
      <h1>NewsLetter</h1>
      <div className="rightLetter">
        <a><input type="text" id="Email" name="yourEmail" placeholder="Your email..." /></a>
        <a><button className="btn btn1">Subscribe</button></a>
      </div>
    </div>
  )
}

export default NewsLetterHeader