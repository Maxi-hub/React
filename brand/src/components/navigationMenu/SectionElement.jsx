import React from 'react'

export const SectionElement = ({title, children}) => {
    return (
        <div className="top__item">
            <h3 className="top__title">{title}</h3>
            {children}
        </div>
    )
}
