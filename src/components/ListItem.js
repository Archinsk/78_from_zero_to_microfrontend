import React from "react";
import './ListItem.css'

function ListItem({itemText}) {
    return (
        <li className="list-item">{itemText}</li>
    )
}

export default ListItem