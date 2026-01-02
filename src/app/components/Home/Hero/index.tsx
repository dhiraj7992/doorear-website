import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
  return (
    <section className='bg-header pt-28 lg:pb-14 overflow-hidden'>
      <div className='container'>
        <div className='grid gap-5 grid-cols-1 lg:grid-cols-12 content-center'>
          <div className='lg:col-span-7 flex flex-col justify-center relative'>
            <div className='flex flex-col gap-5'>
              <h1 className='text-6xl max-w-2xl leading-16 text-midnight_text text-center lg:text-start mx-auto lg:mx-0 pt-5'>
                Smarter Logistics Starts Here.
              </h1>
              <p className='text-black/75 text-lg font-normal text-center lg:text-start max-w-lg mx-auto lg:mx-0'>
                Track your shipments, manage bookings, and stay in control of every delivery,<br></br>
                all in one powerful, intuitive platform. With Doorear, your logistics works smarter for you.
              </p>
              <div className='mx-auto lg:mx-0'>
                <Link href={'https://nav-doot.vercel.app/dashboard/sales'}>
                  <button className='text-white text-xl font-medium py-4 px-8 rounded-full transition duration-300 border border-primary bg-primary hover:bg-transparent hover:cursor-pointer hover:text-primary'>
                    Get started
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className='mt-10 lg:mt-0 lg:col-span-5'>
            <div>
              <Image
                src='/images/hero/banner.png'
                alt='nothing'
                width={948}
                height={652}
                
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
