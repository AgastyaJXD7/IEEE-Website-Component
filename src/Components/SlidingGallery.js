import React from 'react'
import './SlidingGallery.css'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css"

function SlidingGallery() {
    return (
        <div class="slider-container">
            <Splide options={{ perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '1rem',
                    breakpoints: {
                        1024: {
                            perPage: 3,
                        },

                        767: {
                            perPage: 2,
                        },

                        542:{
                            perPage: 1,
                        },
                    },
                    }}>
                
                <SplideSlide>
                    <div class="slide-card">
                        <div class="slide-card-content">
                            <div class="image">
                                <img alt="" />
                            </div>

                            <div class="media-icons">
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-github"></i>
                            </div>

                            <div class="name">Name1 </div>
                            <button class="aboutMe">About Me</button>
                        </div>
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div class="slide-card">
                        <div class="slide-card-content">
                            <div class="image">
                                <img alt="" />
                            </div>

                            <div class="media-icons">
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-github"></i>
                            </div>
                            
                            <div class="name">Name 2</div>
                            <button class="aboutMe">About Me</button>
                        </div>
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div class="slide-card">
                        <div class="slide-card-content">
                            <div class="image">
                                <img alt="" />
                            </div>

                            <div class="media-icons">
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-github"></i>
                            </div>

                            <div class="name">Name 3</div>
                            <button class="aboutMe">About Me</button>
                        </div>
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div class="slide-card">
                        <div class="slide-card-content">
                            <div class="image">
                                <img alt="" />
                            </div>

                            <div class="media-icons">
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-github"></i>
                            </div>

                            <div class="name">Name 4</div>
                            <button class="aboutMe">About Me</button>
                        </div>
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div class="slide-card">
                        <div class="slide-card-content">
                            <div class="image">
                                <img alt="" />
                            </div>

                            <div class="media-icons">
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-github"></i>
                            </div>

                            <div class="name">Name 5</div>
                            <button class="aboutMe">About Me</button>
                        </div>
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div class="slide-card">
                        <div class="slide-card-content">
                            <div class="image">
                                <img alt="" />
                            </div>

                            <div class="media-icons">
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-github"></i>
                            </div>

                            <div class="name">Name 6</div>
                            <button class="aboutMe">About Me</button>
                        </div>
                    </div>
                </SplideSlide>
                
            </Splide>            
        </div>        
    )
}

export default SlidingGallery