import React, { useEffect, useState } from "react";
import { data } from "../data";
import "./Slider.css";
import { images5 } from "../data";



export const Slider = () => {
  
  const [clints] = useState(data);
  const [Index, setIndex] = useState(0);
  const [photos] = useState(images5);
  const[imageClick, setImageClick]=useState(null)

  
  useEffect(() => {
    let lastindex = clints.length - 1;
    if (Index < 0) {
      setIndex(lastindex);
    }
    if (Index > lastindex) {
      setIndex(0);
    }
  }, [Index, clints]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(Index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [Index]);

  const handleImageClick=(e,value)=>{
    e.preventDefault();
    setImageClick(value)
  }

  return (
    <section className="section">
      <div>
        <h2>HAPPY CLIENTS</h2>
      </div>
      {/* {imageClick === Index && ( */}
        
      <div className="section-center">
        {clints.map((item, value) => {
          const { id, image, discription, name } = item;
          let position = "nextSlide";
          if (value === Index) {
            position = "activeSlide";
          }
          if (
            value === Index - 1 ||
            (Index === 0 && value === clints.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <p className="text">{discription}</p>
              <h4>by <br/>{name}</h4>
            </article>
          );
        })}
      </div>
      {/* )} */}
      <div>
        {photos.map((item, value) => {
          const { id, img } = item;
          return (
            <section key={id} className="client-img">
              <a href="/" onClick={(e)=>handleImageClick(e,value)}>
                <img src={img} alt={img} />
              </a>
            </section>
          );
        })}
      </div>
    </section>
  );
};
