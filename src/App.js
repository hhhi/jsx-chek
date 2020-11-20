import React from "react";
import photo from"./imageInSrc.jpg";
import "./style.css"

function App() {
  return (
    <div className="App">
      <div>
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title red">Youssef fathallah</h1>
    <br />

    <img src={photo}  style={ {width:"200px" , height:"400px"}  } />
    <br />
    <img src="/logo192.png"/>
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</div>

      
    </div>
  );
}

export default App;
