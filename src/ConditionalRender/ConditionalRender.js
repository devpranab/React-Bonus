import React, {useState} from 'react';
import User from './User';

const ConditionalRender = () => {
    const [Familiar, setFamiliar] = useState(false);
    return (
        <div>
            <h2>Is Familiar: {Familiar.toString()}</h2>
            <button onClick={() => setFamiliar(!Familiar)}>Toggle Friend</button>
            <User familiar={Familiar}/>
        </div>
    );
};

export default ConditionalRender;