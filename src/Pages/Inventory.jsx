import React, { useContext } from 'react'
import { AuthContext } from '../Auth/AuthProvider'
import { useForm } from "react-hook-form";

const Inventory = () => {
  const {getId} = useContext(AuthContext);


  //! Here USE React Hook Form /
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);



  //! Here USE React Hook Form /
  return (
    <div>

      <div className='justify-center flex'>
        <div className=' border px-5 rounded-lg shadow-md'>
         <img src={getId.img} alt=""  className=' h-40 md:h-60 lg:h-96 rounded-lg my-5 '/>
         <div>
          {getId.name}
         </div>
        </div>

      </div>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
      <input {...register("email", { required: true })} className="bg-gray-50 border-none ring text-gray-900 text-sm rounded-lg  
      block w-full p-2.5 focus:border-red-500 border focus-within:ring-blue-400" />
      {errors.email && <span>This field is required</span>}
   
  </div>
      
      {/* include validation with required or other standard HTML validation rules */}
      {/* errors will return when field validation fails  */}
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>

      </select>
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      
      <input type="submit" />
    </form>
    
    </div>
  )
}

export default Inventory