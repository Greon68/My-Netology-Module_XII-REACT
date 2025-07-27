import React from "react";

export const Widjet = ({title, children}) => {
    return (
        <div className="widget pt-3">
            <h5>{title}</h5>
            {children}
        </div>
    )
}
