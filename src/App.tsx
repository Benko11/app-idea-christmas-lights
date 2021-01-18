import React, { createContext, useEffect, useState } from "react";
import Credits from "./components/Credits";
import Lights from "./components/Lights";
import SpeedSetter from "./components/SpeedSetter";
import Switch from "./components/Switch";
import "./css/App.css";

interface LightContextProps {
    on: boolean;
    range: number;
    duration: number;
}

export const LightContext = createContext<Partial<LightContextProps>>({});

function App() {
    const [on, toggleOn] = useState<boolean>(true);
    const [duration, setDuration] = useState(2.5);
    const [range, setRange] = useState(2.5);

    useEffect(() => {
        const max = 5;
        setDuration(max - range);
    }, [range]);

    const contextData = {
        on,
        duration,
        range,
    };

    function handleToggleOn() {
        toggleOn(true);
    }

    function handleToggleOff() {
        toggleOn(false);
    }

    function handleRangeChange(e: any) {
        setRange(e.target.value);
    }

    return (
        <LightContext.Provider value={contextData}>
            <div className="cord"></div>

            <Lights on={on} duration={2.5} />
            <Switch
                onPowerOff={handleToggleOff}
                onPowerOn={handleToggleOn}
                on={on}
            />
            <SpeedSetter onChange={handleRangeChange} />
            <Credits />
        </LightContext.Provider>
    );
}

export default App;
