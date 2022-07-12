import React from 'react'
import './Gallery.css'

function Gallery() {
    return (               
                <div className="container">
                    <navbar>
                        <a>Show all<sup>15</sup></a>
                        <a>Design<sup>9</sup></a>
                        <a>Branding<sup>23</sup></a>
                        <a>Illustration<sup>4</sup></a>
                        <a>Motion<sup>11</sup></a>
                    </navbar>

                    <div className="grid-container">
                        <div className="grid-item">
                            <div className="image"><img src="Images/Black Adam.jpg" alt="" /></div>
                        </div>
                        <div className="grid-item w-2">
                            <div className="image"><img src="Images/Black Adam.jpg" alt="" /></div>
                        </div>
                        <div className="grid-item w-2">
                            <div className="image"><img src="Images/Black Adam.jpg" alt="" /></div>
                        </div>
                        <div className="grid-item">
                            <div className="image"><img src="Images/Black Adam.jpg" alt="" /></div>
                        </div>
                    </div>

                    <button className="explore">Explore More</button>

                    <div className="advertisement"></div>

                    <div className="event">EVENTS</div>

                    <div className="card-header">Explore Future Confrences</div>

                    <div className="card-container">

                        <div className="card">
                            <div className="date-container">
                                <div className="date">3</div>
                                <div className="month-year">
                                    <div className="month">November</div>
                                    <div className="year">2021</div>
                                </div>
                            </div>

                            <div className="timing">
                                <span className="material-icons">schedule</span>
                                <p>9:00am - 3:00pm</p>
                            </div>
                            <div className="divider-line"></div>

                            <div className="card-content">
                                <h3>Design Weeks</h3>
                                <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Laborum sit libero nihil cum facilis corrupti!
                                </div>
                            </div>

                            <button className="read-more">Explore Now</button>

                        </div>

                        <div className="card">
                            <div className="date-container">
                                <div className="date g-1">15</div>
                                <div className="month-year g-2">
                                    <div className="month">November</div>
                                    <div className="year">2021</div>
                                </div>
                            </div>

                            <div className="timing">
                                <span className="material-icons">schedule</span>
                                <p>10:00am - 12:00pm</p>
                            </div>

                            <div className="divider-line"></div>

                            <div className="card-content">
                                <h3>Interior Design</h3>
                                <div className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Nostrum, explicabo. Doloribus vitae.
                                </div>
                            </div>

                            <button className="read-more">Explore Now</button>
                        </div>

                        <div className="card">
                            <div className="date-container">
                                <div className="date">2</div>
                                <div className="month-year">
                                    <div className="month">December</div>
                                    <div className="year">2021</div>
                                </div>
                            </div>

                            <div className="timing">
                                <span className="material-icons">schedule</span>
                                <p>10:00am - 12:00pm</p>
                            </div>

                            <div className="divider-line"></div>

                            <div className="card-content">
                                <h3>The F design events</h3>
                                <div className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Alias eum repellendus pariatur sapiente.
                                </div>
                            </div>
                            <button className="read-more">Explore Now</button>
                        </div>

                    </div>

                </div>

            

        
    )
}

export default Gallery