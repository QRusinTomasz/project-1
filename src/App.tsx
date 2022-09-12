import React from 'react';
import {Button} from "./core-ui/src/components/Button/Button";
import {Highlight} from "./core-ui/src/components/Highlight/Highlight";

function App() {
    return (
        <div className="App">
            Project-1
            <Highlight label="Text Project-1" color="gray"/>
            <Button prefix="Prefix" label="Project 1 trigger" onClick={() => console.log("Project-1 Click")}/>
        </div>
    );
}

export default App;
