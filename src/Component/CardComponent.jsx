import { Button, Card, Rating } from 'flowbite-react'
import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/all";

const CardComponent = ({cardtitle,cardImg,cardDescription,price,rating,id,reviwe,eventHandlar}) => {

 

     
  return (
    <div>
       <div className="my-10 mx-7" style={{width :'18rem'}}>
  <Card imgSrc={cardImg}>
    <h5 className="text-xl font-bold tracking-tighter text-gray-700 dark:text-white">
     {cardtitle}
    </h5>
    <p className="font-bold text-gray-500 dark:text-gray-400">
     {cardDescription}
    </p>
    <h5 className="text-2xl font-bold tracking-tight text-gray-700 gap-3 dark:text-white flex items-center">
      Price:<p className=' text-gray-600'>${price}</p>
    </h5>
    <div>
    <Rating>
  <Rating.Star />
  <Rating.Star />
  <Rating.Star filled={(rating >=3) ? true: false}/>
  <Rating.Star filled={(rating >=4) ? true: false} />
  <Rating.Star filled={(rating >=5) ? true: false}/>
  <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
    {rating} out of 5
  </p>
  <a
  
    className="text-sm font-medium ml-2 text-gray-900 underline hover:no-underline dark:text-white"
  >
    {reviwe} reviews
  </a>
</Rating>
    </div>
    <div className='flex  justify-around items-center'>
      <Button  color={'failure'} onClick={()=>eventHandlar(id)}> <AiOutlineShoppingCart className='mr-1'/> Add To card </Button>
      <Button color={'purple'}> Buy Now </Button>
    </div>
    
  </Card>
</div>
    </div>
  )
}

export default CardComponent