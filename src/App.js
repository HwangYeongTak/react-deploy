import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function Greeting({name}) {
  return <h1>Hello, {name}!</h1>;
}
function LikeButton() {
  const [liked, setLiked] = useState(false)
  if (liked) return '수고하셨습니다.';
  // return React.createElement( 'button', { onClick: () => setLiked(true), },'Like' )
  return <button onClick={() => setLiked(true)}>클릭</button>
}
function App() {
  return (
    //<Greeting name="World" />
    <LikeButton/>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
