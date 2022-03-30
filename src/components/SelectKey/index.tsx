import React from 'react'
import { Fragment } from 'react'
export default function SelectKey({onChange}:any) {
  return (
    <Fragment>
      <label htmlFor='key-select'></label>
      <select id='key-select' onChange={onChange}>
        <option value='cases'>cases</option>
        <option value='todayCases'>todayCases</option>
        <option value='deaths'>deaths</option>
        <option value='active'>active</option>
        <option value='recovered'>recovered</option>
      </select>
    </Fragment>
  )
}
