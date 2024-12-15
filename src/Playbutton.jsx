import React,{useState} from 'react'

function Playbutton({onPlay,onPause}) {
  const [playing,setPlaying] = useState(false);

  
  const playhandler = () =>{
    if(playing){
      onPlay();
    }
    else{
      onPause();
      setPlaying(!playing);
    }
  };
  return (
    <>
   <div className="text-center py-24">
   <div>{playing}</div>
    <button  onClick={playhandler}>click :{playing ? "p" : "s"}</button>
   </div>
    </>
  )
}

export default Playbutton;