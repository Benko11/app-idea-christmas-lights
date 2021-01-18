import React from "react";
import Light from "./Light";
import "../css/Lights.css";

interface Props {
    on: boolean;
    duration: number;
}

const Lights = (props: Props) => {
    return (
        <div className="lights">
            <Light colour="red" />
            <Light colour="yellow" />
            <Light colour="green" />
            <Light colour="blue" />
            <Light colour="red" />
            <Light colour="yellow" />
            <Light colour="green" />
            <Light colour="blue" />
            <Light colour="red" />
        </div>
    );
};

export default Lights;
