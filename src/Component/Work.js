import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png"
import ChooseMeals from "../Assets/choose-image.png"
import DeliveryMeals from "../Assets/delivery-image.png"

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: " Lorem ipusm dolor sit amet consectetur. Non tincidunt magna non et elit.dolor "
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: " Lorem ipusm dolor sit amet consectetur. Non tincidunt magna non et elit.dolor "
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: " Lorem ipusm dolor sit amet consectetur. Non tincidunt magna non et elit.dolor "
    },
  ]
  return (
    <div className='work-section-wrapper'>
      <div className="work-section-top">
        <p className="primary-subheading"> Work </p>
        <h1 className="primary-subheading">How It works</h1>
        <p className="primary-text">Lorem ipusm dolor sit amet consectetur. Non tincidunt magna non et
          elit.dolor turpis molestindui magnis facilisis at fringilla quamNon</p>
      </div>
      <div className="work-section-button">
        {
          workInfoData.map(data => (
            <div className='work-section-info'>
              <div className="info-boxes-img-container">
                <img src= {data.title} alt="" />
                <p>{data.text}</p>
              </div>
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default Work
