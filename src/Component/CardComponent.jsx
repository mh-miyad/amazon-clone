import { Button, Card, Rating } from 'flowbite-react'
import React, { useState } from 'react'

const CardComponent = ({cardtitle,cardImg,cardDescription,price,rating,onAddToCart}) => {

  const [data ,setData] = useState(0)
     
  return (
    <div>
       <div className="" style={{width :'20rem'}}>
  <Card imgSrc={cardImg}>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
     {cardtitle}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
     {cardDescription}
    </p>
    <h5 className="text-2xl font-bold tracking-tight text-gray-700 gap-3 dark:text-white flex items-center">
      Price:<p className=' text-gray-600'>${price}</p>
    </h5>
    <div>
    <Rating>
  <Rating.Star />
  <Rating.Star />
  <Rating.Star />
  <Rating.Star />
  <Rating.Star filled={(rating >=5) ? true: false}/>
  <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
    {rating} out of 5
  </p>
</Rating>
    </div>
    <div className='flex  justify-around items-center'>
      <Button color={'failure'} onClick={onAddToCart} > Add TO card </Button>
      <Button color={'purple'}> Buy Now </Button>
    </div>
    
  </Card>
</div>
    </div>
  )
}

export default CardComponent