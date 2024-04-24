import React from 'react'

export interface Props {
  nameField: string
  name: string,
}

export const Fields = ({name, nameField}: Props) => {
  return (
    <div className='fields'>
      <label htmlFor="">{nameField}</label>
      <input type="text" name={name}/>
    </div>
  )
}
