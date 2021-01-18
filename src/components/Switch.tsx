import React from "react";
import "../css/Switch.css";

interface Props {
    onPowerOn: (e: any) => void;
    onPowerOff: (e: any) => void;
    on: boolean;
}

const Switch = (props: Props) => {
    const { onPowerOff, onPowerOn, on } = props;
    return (
        <div className="switch">
            <button
                className={`button button-on ${on ? "" : "button-inactive"}`}
                onClick={onPowerOn}
            />
            <button
                className={`button button-off ${!on ? "" : "button-inactive"}`}
                onClick={onPowerOff}
            />
        </div>
    );
};

export default Switch;
