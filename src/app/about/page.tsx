import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const about = () => {
  return (
    <div>
about page  
<br/>
<Link href={"/"}><Button> Home</Button></Link>
  </div>
  )
}
 
export default about