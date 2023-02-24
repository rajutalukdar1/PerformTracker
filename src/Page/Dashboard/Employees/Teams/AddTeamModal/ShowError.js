import React from 'react'

const ShowError = ({ errors, errFor }) => {
  return (
    <>
      {errors.find(err => err.for === errFor) && <p className="text-error text-sm mt-0" style={{"marginTop": 0 }}>{errors.find(err => err.for === errFor).value}</p>}
    </>
  )
}

export default ShowError