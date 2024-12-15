import React, { useEffect, useState } from 'react';

function Form({editcontent}) {
  const [submit, setSubmit] = useState({
    name:"rudra",
    email:"r@gmail.com",
    address:"bhopal",
  

  })

    const hanleSubmit = (e) =>{
      e.preventDefault();
      setSubmit(submit)
      setSubmit();
      console.log(submit);
      
    }

    const handleChange = (e) =>{
        console.log(e.target.name , e.target.value);
        setSubmit({...submit, [e.target.name] : e.target.value});

    }

    useEffect(() =>{
      if(editcontent){
      setSubmit(editcontent);
      }
    },[editcontent]);

  return (
    <>
  <div className="flex flex-col text-center">
  <form>
        <div className="">
        <input
        type="text" 
        name='title'
        className=' text-black px-4 py-2 my-2 border'
        onChange={handleChange}
        placeholder='title'
         />
        </div>

        <div className="">
        <input
        type="text" 
        name='views'
         className=' text-black px-4 py-2 my-2 border'
         onChange={handleChange}
         placeholder='views'
         />

        </div>
         <button className='bg-blue-500 text-white px-4 py-2 mt-4' onClick={hanleSubmit}>click</button>
    </form>
  </div>
    </>
  )
}

export default Form;