import './App.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useState } from 'react';
import MultiDataNested from './MultiDataNested/MultiDataNested';
import DataLoadReturn from './DataLoadReturn/DataLoadReturn';
import ConditionalRender from './ConditionalRender/ConditionalRender';
import Storage from './Storage/Storage';

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
    <hr />
    <DataLoadReturn/>
    <ConditionalRender/>
    <Storage/>
    </div>
  );
}

export default App;
