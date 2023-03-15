import React from 'react'
import Display from './Display';
import Cpu from './Cpu';

const MacBook = () => {
  return (
    <div className='macbook-container'>
        <Display />
        <Cpu />
    </div>
  )
}

export default MacBook