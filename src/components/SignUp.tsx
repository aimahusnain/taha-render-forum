import { Icons } from '@/src/components/Icons'
import UserAuthForm from '@/src/components/UserAuthForm'
import Image from 'next/image'
import Link from 'next/link'

const SignUp = () => {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
      <div className='flex flex-col space-y-2 w-full justify-center items-center'>
      <Image src="/Logo.png" alt='Logo' width={56} height={56}/>
        <h1 className='text-2xl font-semibold tracking-tight'>Sign Up</h1>
        <p className='text-sm max-w-xs mx-auto text-center'>
          By continuing, you are setting up a Render Forum account and agree to our
          User Agreement and Privacy Policy.
        </p>
      </div>
      <UserAuthForm />
      <p className='px-8 text-center text-sm text-muted-foreground'>
        Already a Breadditor?{' '}
        <Link
          href='/sign-in'
          className='hover:text-brand text-sm underline underline-offset-4'>
          Sign in
        </Link>
      </p>
    </div>
  )
}

export default SignUp
