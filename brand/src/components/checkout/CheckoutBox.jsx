import React from 'react'

export const CheckoutBox = ({number, className, labelName}) => {
    return (
        <div className={`${className}${number}`}>
            <input className={`${className}-input`} type="radio" />
            <label className={`${className}-title`} htmlFor="">{labelName}</label>
        </div>
    )
}
