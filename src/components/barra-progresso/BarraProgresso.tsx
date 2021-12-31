import React, { useState } from "react";

const BarraProgresso = (props: { bgcolor: string, completed: number, initialTime: Date }) => {
    const { bgcolor, completed, initialTime } = props;
    //const [minutes, setMinutes] = useState(0);

    //var diff = initialTime.getTime() - new Date().getTime();
    //setMinutes(Math.floor((diff / 1000) / 60));

    const containerStyles = {
        height: 10,
        width: 200,
        backgroundColor: "#fafafa",
        borderRadius: 50,
        marginTop: '1%'
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        TextAlign: 'right'
    }

    const labelStyles = {
        padding: 5
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles} />
        </div>
    );
};

export default BarraProgresso;