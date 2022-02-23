import React, { useRef } from 'react'
import { useHover } from '../hooks/useHover'

export const Hover = () => {
  const ref = useRef()
  const isHover = useHover(ref)
  return (
    <div ref={ref} style={{height: 300, width: 300, background: isHover ? 'red' : 'blue'}}>Hover</div>
  )
}
