import React from 'react'
import Title from './Title'
import { tours } from '../data'
import img1 from "../images/tour-1.jpeg"

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="Featured" subtitle="Tours"/>
      <div className="section-center featured-center">
        
          {tours.map((tour)=>{
            const {id,img,tourDate,tourTitle,tourInfo,TourfooterTitle,TourfooterDate,TourfooterPrice}= tour
            return(
            <article className="tour-card" key={id}>
              <div className="tour-img-container" >
                <img src={img} alt={tourDate} />
                <p className="tour-date">{tourDate}</p>
              </div>
              <div className="tour-info">
               <div className="tour-title">
              <h4>{tourTitle}</h4>
            </div>
            <p>{tourInfo}</p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span>{TourfooterTitle}
              </p>
              <p>{TourfooterDate}</p>
              <p>{TourfooterPrice}</p>
            </div>
          </div>
          </article>
            )
          })}
        
      </div>
    </section>
  )
}

export default Tours