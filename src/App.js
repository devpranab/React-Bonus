import './App.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useState } from 'react';
import MultiDataNested from './MultiDataNested/MultiDataNested';

function App() {
  const [likeColor, setLikeColor] = useState("");

  const handleLike = () => {
  setLikeColor();
  const color = likeColor ? "" : "primary";
  setLikeColor(color);
  }
  return (
    <div className="App">
      <p>Implement Facebook Like button:</p>
      <ThumbUpAltIcon onClick={handleLike} color={likeColor}/>
      <hr />
    <MultiDataNested/>
    </div>
  );
}

export default App;
