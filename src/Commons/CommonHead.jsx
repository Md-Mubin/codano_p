import React from 'react'

const CommonHead = ({commonHead}) => {
    return (
        <>
            <h2 className="font-bold text-4xl text-[#000] tracking-widest text-center">
                {commonHead}
            </h2>
        </>
    )
}

export default CommonHead