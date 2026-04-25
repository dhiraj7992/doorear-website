import Signin from '@/app/components/Auth/SignIn'
import Breadcrumb from '@/app/components/Common/Breadcrumb'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign in',
  robots: {
    index: false,
    follow: false,
  },
}

const SigninPage = () => {
  return (
    <>
      <Breadcrumb pageName='Sign In Page' />

      <Signin />
    </>
  )
}

export default SigninPage
