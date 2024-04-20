import React from "react";
import { useState } from 'react';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = (props) => {
	let unit = props.seconds;
    let ten = 0;
    let hundred = 0;
    let thousand = 0;
    let tenThousand = 0;
    let hunThousand = 0;
    if(props.seconds > 9){
        ten =   Math.floor(props.seconds / 10);
        unit = props.seconds % 10;
        if (ten > 9){
            hundred =  Math.floor(ten / 10);
            ten = ten % 10;
            if(hundred > 9){
                thousand = Math.floor(hundred / 10);
                hundred = hundred %  10;
                if(thousand > 9){
                    tenThousand = Math.floor(thousand / 10);
                    thousand = thousand % 10;
                    if(tenThousand > 9){
                        hunThousand = Math.floor(tenThousand / 10);
                        tenThousand = tenThousand % 10;
   
                    }
                }
            }
        }
    }

	return (
		<>
		<div className ="timer d-flex justify-content-center">
		<div className="icon"><i className="far fa-clock"></i></div>
		
			<div className="counter">{hunThousand}</div>
            <div className="counter">{tenThousand}</div>
            <div className="counter">{thousand}</div>
            <div className="counter">{hundred}</div>
            <div className="counter">{ten}</div>
            <div className="counter">{unit}</div>
		</div>
		</>
	);
};

export default Home;
