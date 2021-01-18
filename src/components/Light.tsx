import React, { useContext } from "react";
import { LightContext } from "../App";
import "../css/Light.css";

interface Props {
    colour: string;
}

const Light = (props: Props) => {
    const { colour } = props;
    const { on, duration } = useContext(LightContext);

    document.documentElement.setAttribute("style", `--duration: ${duration}`);

    return (
        <div>
            <div className="hanger">
                <div className="hanging-on"></div>
                <div className="meeting-point"></div>
            </div>
            <div
                className={`light ${colour} ${on === true ? "" : "off"}`}
            ></div>
        </div>
    );
};

export default Light;
