import React from 'react'

const TopBar = () => {
  return (
    <>
    <div className=' bg-[#1A1F26] text-white py-2 flex justify-between container border-b-2 border-[#1E2328]'>
        <img src='/assets/cysunc logo.png' alt='logo-loading...'/>
        <button className=' text-[#E0B36A] font-lato flex gap-1 items-center cursor-pointer'> <img src="/assets/SyncIcon.png" alt='target'/> Synced</button>
    </div>
    </>
  )
}

export default TopBar;