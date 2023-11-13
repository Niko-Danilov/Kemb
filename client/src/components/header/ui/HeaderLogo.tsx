import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import logo from './../../../../public/Logo.svg'



const HeaderLogo: FC = () => {
  return (
    <Link href='/'>
      <Image src={logo} alt="Logo" />
    </Link>
  )
}

export default HeaderLogo