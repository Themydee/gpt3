import React from 'react'
import { Feature } from '../../components'
import './features.css'


const featuresData = [
  {
    title: 'Improving and distrusts instantly',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus reiciendis fugit aperiam! Numquam veniam sit, dolores necessitatibus tempora qui natus!'
  },

  {
    title: 'Become the tended active',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus reiciendis fugit aperiam! Numquam veniam sit, dolores necessitatibus tempora qui natus!'
  },

  {
    title: 'Message or am nothing',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus reiciendis fugit aperiam! Numquam veniam sit, dolores necessitatibus tempora qui natus!'
  },

  {
    title: 'Really boylaw county',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus reiciendis fugit aperiam! Numquam veniam sit, dolores necessitatibus tempora qui natus!'
  },



]
const Features = () => {
  return (
    <div className='gpt3__features section__padding ' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future Is Now and You Just Need To Realize It. Step Into The Future Today & Make It Happen</h1>
        <p>Request Early Access to Get Startedd</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features