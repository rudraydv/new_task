import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
//import Prop from './Prop';
//import Playbutton from './Playbutton';
//import arrdata from './data';
//import Form from './Form';
//import MainFileTodo from './components/todo/MainFileTodo';
//import MainProductFile from './components/ecomcart/MainProductFile';


const App = () =>{
  // const [data,setArrData] = useState(arrdata);
  // const [editcon,setEditcon] = useState(null);


  // const deletedata = (id) =>{
  //  setArrData( data.filter(item =>item.id !== id))
  //   console.log(id);
  // }
  // const editdata = (id) =>{
  //   console.log((data.find(item =>item.id ===id)))
  //   setEditcon(data.find(item =>item.id ===id))
  // }

  return( 
    <>    
    {/* <div className='text-center my-4'>
    <button className='bg-black text-white px-4 py-2'
         onClick={() => setArrData( [ ...data,{
         name: "manish mishra",
         college: "Bansal Bhopal",
         Age: "28",
         company:"walkover",
         verified:true,

      }])}>add data</button>
    </div> */}

    {/* <div className='flex flex-wrap items-center justify-center gap-4'>
       {data.map((items) => (
      <>
      <Prop
      id={items.id}
      name={items.name}
      college = {items.college}
      Age = {items.Age}
      company = {items.company}
      verified = {items.verified}
      deletedt={deletedata}
      editdt = {editdata}
      editcontent = {editcon}

      />
      </>
    ))} 
    </div> */}
     {/* <Playbutton onPlay = {() => console.log("playvideo")} onPause = {() => console.log("pause video")}/> */}
     
     {/* <MainFileTodo/>
     <MainProductFile/> */}
     <Products/>
     <AddProduct/>
  </>
  );
};
export default App;

