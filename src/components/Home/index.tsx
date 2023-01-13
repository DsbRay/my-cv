import React, { useEffect, useState } from 'react'
import TransitionButton from '../elements/TransitionButton'

const HomePage: React.FC<{}> = () => {
  return (
    <div>
      <TransitionButton label='Next page' to='/page-2' color='blue' direction='up' />
    </div>
  )
}

export default HomePage
