import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate()
  return (
    <div style={{width:"100%"}}>
        
      <div style={{marginTop:"0%",textAlign:"center",paddingTop:"0", fontSize:"1.5rem",width:"100%"  }}>Sentence construction</div>
      <br />
      <hr style={{width:"100%"}} />
<br />
<br />
<br />
      <div style={{display:"flex",placeItems:"center",flexDirection:"column"}} >

      <i class='bx bxs-comment-edit' style={{color:"gray",fontSize:"2rem"}}></i>
      <h1 style={{marginBottom:"0"}}>sentence construction</h1>
      <br />
      <p style={{color:"gray",fontSize:"1.5rem",marginLeft:"20%",marginRight:"20%",marginTop:"0"}}>Select the correct words to complete the sentence by arranging the provided option in the bottom</p>
     <div className='otss' style={{display:"flex",justifyContent:"space-around",gap:"40px"}}>
        <div  >
            <p>Time per question</p>
            <p>30 sec</p>
           
        </div>
        <hr />
        <div>
            <p>Total question</p>
            <p>10</p>
        </div>
        <hr />
        <div>
            <p>coins</p>
            <i class='bx bxl-bitcoin' style={{color:"yellow"}} ></i>
        </div>
        
     </div>
      </div>
      <br />
      <br />
      <br />
      <button style={{background:"rgb(69,63,225",color:"white"}} onClick={()=>navigate('/quiz')}  >Get Started</button>

    </div>
  )
}

export default Home