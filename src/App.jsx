import { useState } from "react";
import reactLogo from "./assets/homer.gif";
import viteLogo from "./assets/patrick.gif";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    
    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Hello! We are Already_Knows</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit nothing! we good :)
                </p>
            </div>
            <p className="read-the-docs">
                <b>Mahim,    Christina,    Willie </b>
            </p>
        </>
    );
}

export default App;
