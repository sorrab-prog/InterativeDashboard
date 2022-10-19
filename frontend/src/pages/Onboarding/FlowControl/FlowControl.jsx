import React from 'react'
import './FlowControl.css'
import axiosInstanceOnboarding from '../../../api/onboarding'

function FlowControl() {

  React.useEffect(() => {
    axiosInstanceOnboarding.get('person/natural/')
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.error(error)
    })
  }, [])

  return (
    <div>Flow Control</div>
  )
}

export default FlowControl