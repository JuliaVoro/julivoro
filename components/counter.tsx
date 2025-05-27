'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'

export default function Counter() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <div className='flex items-center gap-3' data-oid='4n2vrl3'>
      <Button size='icon' onClick={decrement} data-oid='yk_:ek7'>
        <MinusIcon data-oid='xllp625' />
      </Button>
      <p data-oid='mikto34'>Current vote: {count}</p>
      <Button size='icon' onClick={increment} data-oid='deyc5lo'>
        <PlusIcon data-oid='i7fzcyb' />
      </Button>
    </div>
  )
}
