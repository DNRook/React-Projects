import data from './data'
import React, {useState} from 'react';

function App() {
  return (
    
    <>
    <h1 className='title'> My Projects</h1>
    <div className='underline'></div>
    <div className="card-grid">

      {data.map((item)=>{
        const {id,link,image, name}=item;
        return(
          	<div className="card" key={id}>
            <div className="card-header"> {name}</div>
            <img src={image} class="card-body"/>
            
            <div className="card-footer">
				      <button className="btn"><a href={link}> Visit Project </a> </button>
			      </div>
         </div>
        )
      })}
			
			
	</div>
  </>
  )
}

export default App;
