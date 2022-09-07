import logo from './logo.svg';
import './App.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useState } from 'react';

function App() {
  const [likeColor, setLikeColor] = useState("");

  const handleLike = () => {
  setLikeColor();
  const color = likeColor ? "" : "primary";
  setLikeColor(color);
  }
  return (
    <div className="App">
      <ThumbUpAltIcon onClick={handleLike} color={likeColor}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
