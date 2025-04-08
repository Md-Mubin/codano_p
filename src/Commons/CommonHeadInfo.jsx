import React from 'react'

const CommonHeadInfo = ({commonHeadInfo}) => {
    return (
        <>
            <p className="lg:w-[1000px] m-auto font-normal text-xl text-[#555555] text-center mt-4">
                {commonHeadInfo}
            </p>
        </>
    )
}

export default CommonHeadInfo