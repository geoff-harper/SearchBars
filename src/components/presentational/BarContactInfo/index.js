import React from 'react'

const BarContactInfo = ({address, phone}) => {

  const phoneLink = phone .replace(/[^\d]/g, "")
                          .replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");

  return (
    <div className="barView-contact">
      <h3 className="subtitle">Bar Details</h3>
      <p className="address">{address}</p>
      <p className="phoneNumber">Call: <a href={`tel:${phoneLink}`}>{phone}</a></p>
    </div>
  )
}

export default BarContactInfo
