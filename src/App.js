import './App.css';
import "react-tooltip/dist/react-tooltip.css";
import {Tooltip } from 'react-tooltip';
import { useState } from 'react';
function App() {

  //SET TOOLTIPS STATUS
  const [showTooltip,setShowTooltip]=useState('false');
 
  // Styled to button
  const styles={
    backgroundColor: "lightblue",
    position:"absolute",
    top:'50%',left:'40%',
    borderRadius:'5px',
    padding:'10px',
    color:'black',
    fontSize:'15px',
    border:'none',

   
  }

  return (
    <>
      <div className="App">
        <h1>React Tooltips</h1>
        

        <button style={styles} id="show-tooltip-msg" onMouseOver={()=>setShowTooltip('true')}  onMouseOut={()=>setShowTooltip('false')} >
          Hover on me to get information about google
        </button>


        {showTooltip 

          ? <Tooltip
                place="bottom"
                variant="info"
                content="Google is an American multinational technology company focusing on online advertising, 
                      search engine technology, cloud computing, computer software, quantum computing, 
                      e-commerce etc"
                anchorId="show-tooltip-msg"/> 
          : null}

      </div>
    </>
  );
}

export default App;
