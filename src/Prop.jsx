import React from 'react'

const Prop = ({name,college,Age, company, verified,id,deletedt,editdt}) => {
    

  return (
    <>
      <div className="shadow px-4 py-2">
       <div className="">
       <img src={`https://picsum.photos/id/${id}/160/90`} alt="images" className='h-40 w-44' />
       </div>
       <div className="">
       <h1 className="text-xl font-semibold">{name}</h1>
        <p className="">{college}</p>
        <p className="">{Age}</p>
        
   
        {verified ? (
            <p className="">{company} 😄</p> 
        ) : (
            <p>{company}</p>
        )}
        <div className="flex items-center justify-between">
        <button onClick={() =>deletedt(id)}  className='bg-red-500 text-white px-3 py-1 text-xs'>delete</button>
         <button onClick={() =>editdt(id)} className='bg-blue-500 text-white px-3 py-1 text-xs'>edit</button>
        </div>
       </div>
        
      </div>

    </>
  )
}

export default Prop;