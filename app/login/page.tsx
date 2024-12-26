import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='cursor-pointer'>
        <Link href={'/login/rafay'}><li>rafay</li></Link>
        <Link href={'/login/moiz'}><li>moiz</li></Link>
        <Link href={'/login/dua'}><li>dua</li></Link>

    </div>
  )
}

export default page
