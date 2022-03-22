import React from "react";
import userImage from "../images/avatar5.png";
const CardContact = (props) => {
    const {id, name, email} = props.contact;
    return (
        <div className="item">
            <div className="content" style={{display: "flex", justifyContent: "space-between"}}>
                <div className="header">
                    <img className="ui avatar image" src={userImage} alt="user"></img>
                    {name}
                </div>
                <div>{email}</div>
                <i className="trash alternate outline icon" onClick={() => props.clickHandler(id)} style={{color:"red", marginTop:"7px"}}></i>
            </div>
        </div>
    );
};

export default CardContact;