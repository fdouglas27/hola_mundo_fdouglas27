import React, { useState, useEffect } from 'react';
import './changingColor.scss'


const InSquare = ({ inSquareAction, propStyle }) => {
    return (
        <p style={propStyle} onMouseEnter={ inSquareAction }>  </p>
    )
}

const OutSquare = ({ outSquareAction, propStyle }) => {
    return (
        <p style={ propStyle } onMouseOut={ outSquareAction }>  </p>
    )
}

const DoubleClick = ({ doubleClickAction, propStyle }) => {
    return (
        <p style={ propStyle } onDoubleClick={ doubleClickAction }>  </p>
    )
}

let square;

const ChangingColor = () => {

    const [change, setChange] = useState(false);

    const startChanging = () => {
        setChange(true);
    }

    const stopChanging = () => {
        setChange(false);
    }

    // const [colorsValues, setColorsValues] = useState([0,0,0]);
    const [colorsValues, setColorsValues] = useState('');
   
    useEffect(() => {
        if (change) {
            console.log(change)
            // accessValue = access.toString
            const interval = setInterval(() => {
                setColorsValues(Math.floor(Math.random() * 16777215).toString(16))
            }, 100);
            return () => clearInterval(interval);
            
        } 
        return
    }, [change]);

    change ? square = <OutSquare propStyle={{ background: '#' + colorsValues, height: '255px', width: '255px' }} outSquareAction={ stopChanging } ></OutSquare> : square = <InSquare propStyle={{ background: '#' + colorsValues, height: '255px', width: '255px' }} inSquareAction={ startChanging }></InSquare>

    const clickHandler = (event) => {
        if (event.detail === 2) {
            // square = <LogoutButton propStyle={{ background: '#' + colorsValues, height: '250px', width: '250px' }} logoutAction={ stopChanging } ></LogoutButton>
            setChange(false)
            square = <DoubleClick propStyle={{ background: '#' + colorsValues, height: '255px', width: '255px' }} doubleClickAction={ stopChanging } ></DoubleClick>
            // square = <DoubleClick propStyle={{ background: '#' + colorsValues, height: '255px', width: '255px' }} ></DoubleClick>
            console.log('if doubleClickAction: ' + change);
        } 
        
        // else {
        //     setChange(false)
        //     // setChange(false)
        //     square = <DoubleClick propStyle={{ background: '#' + colorsValues, height: '255px', width: '255px' }} doubleClickAction={ stopChanging } ></DoubleClick>
        //     console.log('else doubleClickAction access: ' + change);

        // }
    }
    
    // if(change === true) {
    //    square = <InSquare propStyle={{ background: '#' + colorsValues, height: '255px', width: '255px' }} inSquareAction={ startChanging }></InSquare>
    // } else { square =  <OutSquare propStyle={{ background: '#' + colorsValues, height: '255px', width: '255px' }} outSquareAction={ stopChanging } ></OutSquare>}


    return (
       
        <div onClick={ clickHandler } style={{background:'black', height: '255px', width:'255px'}}>
{/* <div> */}
            { square }

        </div>
    );

}


export default ChangingColor;
