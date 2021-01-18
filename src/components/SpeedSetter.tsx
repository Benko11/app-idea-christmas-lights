import React, { useContext } from "react";
import { LightContext } from "../App";
import "../css/SpeedSetter.css";
import Lightning from "../images/Lightning.svg";
import Snail from "../images/Snail.svg";

interface Props {
    onChange: (e: any) => void;
}

const SpeedSetter = (props: Props) => {
    const { onChange } = props;
    const { on, range, duration } = useContext(LightContext);
    return (
        <div className={`speed-setter-container ${on ? "" : "off"}`}>
            <div className="icon-container">
                <img src={Snail} alt="Slower speed" />
                <span>Slower</span>
            </div>
            <input
                type="range"
                min={1}
                max={4}
                step={0.25}
                value={range}
                onChange={onChange}
                className="speed-setter"
                disabled={!on}
            />
            <div className="icon-container">
                <img src={Lightning} alt="Faster speed" />
                <span> Faster</span>
            </div>
        </div>
    );
};

export default SpeedSetter;
