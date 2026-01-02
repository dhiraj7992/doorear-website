import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href='/'>
      <Image
        src='/images/logo/logo.png'
        alt='logo'
        width={250}
        height={100}
        quality={100}
      />
    </Link>
  )
}

export default Logo
