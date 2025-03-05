import React from 'react'

export const CollectionItem = ({className, offer, label}) => {
    return (
        <div className={className}>
            <div className={`${className}-deal`}>
                <p><span className={`${className}-offer`}>{offer}</span><br />{label}</p>
            </div>
        </div>
    )
}
