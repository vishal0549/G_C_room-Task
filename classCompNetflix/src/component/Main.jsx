import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';
import p6 from '../assets/p6.png';

import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
        <section className="main-container">
        <div class="location" id="home">
            <h1 id="home">Popular on Netflix</h1>
            <div class="box">

                <a href="#">                    
                        <img src={p1} alt="" />
                </a>
                <a href="#">                    
                        <img src={p2} alt="" />
                </a>
                <a href="#">                    
                        <img src={p3} alt="" />
                </a>
                <a href="#">                    
                        <img src={p4} alt="" />
                </a>
                <a href="#">                    
                        <img src={p5} alt="" />
                </a>
                <a href="#">                    
                        <img src={p6} alt="" />
                </a>
            </div>

        </div>

        <h1 id="myList">Trending Now</h1>
      <div class="box">
      <a href="#">                    
                        <img src={p1} alt="" />
                </a>
                <a href="#">                    
                        <img src={p2} alt="" />
                </a>
                <a href="#">                    
                        <img src={p3} alt="" />
                </a>
                <a href="#">                    
                        <img src={p4} alt="" />
                </a>
                <a href="#">                    
                        <img src={p5} alt="" />
                </a>
                <a href="#">                    
                        <img src={p6} alt="" />
                </a>
      </div>
      
      <h1 id="tvShows">TV Shows</h1>
      <div class="box">
      <a href="#">                    
                        <img src={p1} alt="" />
                </a>
                <a href="#">                    
                        <img src={p2} alt="" />
                </a>
                <a href="#">                    
                        <img src={p3} alt="" />
                </a>
                <a href="#">                    
                        <img src={p4} alt="" />
                </a>
                <a href="#">                    
                        <img src={p5} alt="" />
                </a>
                <a href="#">                    
                        <img src={p6} alt="" />
                </a><a href="#">                    
                        <img src={p1} alt="" />
                </a>
                <a href="#">                    
                        <img src={p2} alt="" />
                </a>
                <a href="#">                    
                        <img src={p3} alt="" />
                </a>
                <a href="#">                    
                        <img src={p4} alt="" />
                </a>
                <a href="#">                    
                        <img src={p5} alt="" />
                </a>
                <a href="#">                    
                        <img src={p6} alt="" />
                </a>
      </div>
      

      <h1 id="movies">Blockbuster Action & Adventure</h1>
      <div class="box">
      <a href="#">                    
                        <img src={p1} alt="" />
                </a>
                <a href="#">                    
                        <img src={p2} alt="" />
                </a>
                <a href="#">                    
                        <img src={p3} alt="" />
                </a>
                <a href="#">                    
                        <img src={p4} alt="" />
                </a>
                <a href="#">                    
                        <img src={p5} alt="" />
                </a>
                <a href="#">                    
                        <img src={p6} alt="" />
                </a>
      </div>

      <h1 id="originals">Netflix Originals</h1>
      <div class="box">
      <a href="#">                    
                        <img src={p1} alt="" />
                </a>
                <a href="#">                    
                        <img src={p2} alt="" />
                </a>
                <a href="#">                    
                        <img src={p3} alt="" />
                </a>
                <a href="#">                    
                        <img src={p4} alt="" />
                </a>
                <a href="#">                    
                        <img src={p5} alt="" />
                </a>
                <a href="#">                    
                        <img src={p6} alt="" />
                </a>
      </div>
        
      </section>
    );
  }
}

export default Main;
