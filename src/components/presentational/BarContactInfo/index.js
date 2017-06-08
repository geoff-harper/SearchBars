import React from 'react'

const BarContactInfo = ({address, phone}) => {

  const phoneLink = phone
    .replace(/[^\d]/g, "")
    .replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");

  return (
    <div className="bar-contact">
      <p>{address}</p>
      <p><a href={`tel:${phoneLink}`}>{phone}</a></p>
    </div>
  )
}

export default BarContactInfo
