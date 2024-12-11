import React from "react";

const SecondsCounter = ({ seconds }) => {
    const formatNumber = (num) => Math.floor(num % 10); // Formatear cada dígito

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem" }}>
            {/* Icono de reloj */}
            <div style={{ padding: "15px", backgroundColor: "black", color: "white", margin: "5px" }}>
                <i className="fa fa-clock"></i>
            </div>

            { }
            <div style={{ padding: "15px", backgroundColor: "black", color: "white", margin: "5px" }}>
                {formatNumber(seconds / 100000)}
            </div>

            { }
            <div style={{ padding: "15px", backgroundColor: "black", color: "white", margin: "5px" }}>
                {formatNumber(seconds / 10000)}
            </div>

            { }
            <div style={{ padding: "15px", backgroundColor: "black", color: "white", margin: "5px" }}>
                {formatNumber(seconds / 1000)}
            </div>

            { }
            <div style={{ padding: "15px", backgroundColor: "black", color: "white", margin: "5px" }}>
                {formatNumber(seconds / 100)}
            </div>

            { }
            <div style={{ padding: "15px", backgroundColor: "black", color: "white", margin: "5px" }}>
                {formatNumber(seconds / 10)}
            </div>

            { }
            <div style={{ padding: "15px", backgroundColor: "black", color: "white", margin: "5px" }}>
                {formatNumber(seconds)}
            </div>
        </div>
    );
};

export default SecondsCounter;
