import React from 'react'

export default function Alert(props) {
    // create a function for capitalise first letter
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (

        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {/* use alert using props */}
            <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}

            {/* {props.alert} */}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

    )
}
