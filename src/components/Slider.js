import React,{useEffect} from 'react'
import './Slider.css'

import image1 from "../images/slider/image1.jpg"
import image2 from "../images/slider/image2.jpg"
import image3 from "../images/slider/image3.jpg"
import image4 from "../images/slider/image4.jpg"
import image5 from "../images/slider/image5.jpg"


function Slider() {

  useEffect(()=>{
    $(document).ready(function() {
      var $carousel = $('.carousel');
      var $nextBtn = $('#next');
      var $prevBtn = $('#prev');
      var pause = 5000;
      var interval;
      let currentIndex = 0;
    
      const DemoTextList = [
        {
          largetitle:"Looking to shop",
          bigtitle:"Pick from the widest range of products. ",
          smalltitle:"Shop Now"
        },
        {
          largetitle:"To Mom, with love",
          bigtitle:" Get meaningful  Mother’s Day gifts very fast with free two-day delivery.*",
          smalltitle:"Shop Now"
        },
        {
          largetitle:"Free shipping*",
          bigtitle:"Items ship free as often as you need with no order minimum!",
          smalltitle:"Try it free"
        },
        {
          largetitle:"Fresh squeesed-style",
          bigtitle:"Let the sunshine in with colorful updates.",
          smalltitle:"Shop Now"
        },
        {
          largetitle:"Sun-ready style",
          bigtitle:"The latest swimwear, shorts, & sandals for all.",
          smalltitle:"Shop Now"
        },
       
      ]
     
  
      $('.largetitle').html(DemoTextList[currentIndex].largetitle);
      $('.bigtitle').html(DemoTextList[currentIndex].bigtitle);
      $('.smalltitle').html(DemoTextList[currentIndex].smalltitle);
  
    
    
      function nextSlide() {
        // console.log(currentIndex)
      
        
  
        $('.carousel__list').animate({
          left: '-100%'
        
        }, 500, function() {
         
          
    
           $('.carousel__list').css({'left': '-100%'});
          
    
          $('.carousel__item').last().after($('.carousel__item').first());
          // .................................................................
          if(currentIndex<DemoTextList.length){
            currentIndex++;
          }
          if(currentIndex>=DemoTextList.length){
            currentIndex=0;
          } 
        $('.largetitle').html(DemoTextList[currentIndex].largetitle);
        $('.bigtitle').html(DemoTextList[currentIndex].bigtitle);
        $('.smalltitle').html(DemoTextList[currentIndex].smalltitle);
  
  
       
        });
      }
    
    
      function prevSlide() {
      // console.log(currentIndex);
      
  
        $('.carousel__list').animate({
          left: '0%'
        }, 500, function() {
          
    
          $('.carousel__list').css({'left': '-100%'});
    
          $('.carousel__item').first().before($('.carousel__item').last());
  
          if(currentIndex>0){
            currentIndex--;
          }
          if(currentIndex<=0){
            currentIndex=DemoTextList.length-1;
          }
          
        $('.largetitle').html(DemoTextList[currentIndex].largetitle);
        $('.bigtitle').html(DemoTextList[currentIndex].bigtitle);
        $('.smalltitle').html(DemoTextList[currentIndex].smalltitle);
        console.log(currentIndex);
  
      
        });
      }
    
    
      function startSlider() {
        interval = setInterval(function() {
          nextSlide();
        }, pause); 
      }
    
    
      function stopSlider() {
        clearInterval(interval);
      }
    
    
      $carousel.on('mouseenter', stopSlider).on('mouseleave', startSlider);
    
      startSlider();
    
      $nextBtn.on('click', function() {
        // stopSlider();
        nextSlide();
        // startSlider();
    
      });
    
      $prevBtn.on('click', function() {
        // stopSlider();
    
        prevSlide();
    
        // startSlider();
      });
    
    });
  },[])




    return (
    <>
         <section class="carousel">
    <ul class="carousel__list">
    
      <li class="carousel__item ">
        <img src={image1} alt=""/>

        <div class="headingp1">
          <div class="largetitle"></div>
          <div class="bigtitle"></div>
          <div class="smalltitle">

          </div>
        </div>
      </li>

      <li class="carousel__item   ">
        <img src={image2} alt=""/>

      </li>
      <li class="carousel__item  ">
        <img src={image3} alt=""/>

      </li>
      <li class="carousel__item  ">
        <img src={image4} alt=""/>

      </li>
      <li class="carousel__item  ">
        <img src={image5} alt=""/>

      </li>
    </ul>
  </section>

  <div id="prev"> &#10094; </div>
  <div id="next"> &#10095; </div>
  <div class="sliderContent">
    <div class="headingp1">
      <div class="largetitle"></div>
      <div class="bigtitle"></div>
       <div class="smalltitle">
        
      </div>
    </div>

  </div>
     

        </>
    )
}

export default Slider
