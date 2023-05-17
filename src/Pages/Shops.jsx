import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import CardComponent from '../Component/CardComponent'
import { AuthContext } from '../Auth/AuthProvider'
const Shops = () => {

const [data , setData] = useState([])
  useEffect(() => {
    const fetchingData = async ()=>{

      const jsonData  =  await fetch(`http://localhost:4000/shopping`)
      const result = await jsonData.json()
      setData(result)
   
  
    }
  
    fetchingData()
    
  }, [])
  
const {setId} = useContext(AuthContext);
const eventHandlar = (id)=>{
setId(id)

}
  
 
  return (
    <div>


<div>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
{
    data.map((ele)=>{
  return <>
  
  <CardComponent key={ele._id}  cardDescription={ele.name} cardImg={ele.img} cardtitle={ele.seller}  price={ele.price} rating={ele.ratings} reviwe={ele.ratingsCount} eventHandlar={eventHandlar} id={ele} />
  </>
})


}
  </div>
</div>


    </div>
  )
}

export default Shops