import React from "react"
import './List.css'

function List({children}) {
    return (
        <ol className="list">{children}</ol>
    )
}

export default List