import React from 'react';

const ComboComponent = props => {
    return (
        <p style={{
            color: props.textColor,
            backgroundColor: props.backgroundColor
        }}>The word is: {props.word}</p>
    )
}
export default ComboComponent;