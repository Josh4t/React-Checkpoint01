import {Link} from 'react-router-dom'

function Hero() {
  return (
    <div className='min-h-screen px-20'>
        <header className='flex justify-between items-center'>
            <div className='flex justify-center items-center'>
            <img src='/svgs/buy.svg' alt='Ooja logo' width={100} />
            <h2 className='font-iceberg text-5x1 text-secondary font-extrabold'>Ooja</h2>
            </div>

            <nav className=''>
                <ul className='flex justify-center items-center space-x-2'>
                    <li>
                     <Link to="/login" className='bg-primary text-tertiary py-2 px-4 rounded-md font-bold mb-[500px]'>Log In</Link>
                     <br />
                     <br />
                    
                    <li>
                    </li>
                    <Link to="/login" className='bg-tertiary text-secondary py-2 px-4 rounded-md font-bold'>Register</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <div className='flex flex-col items-center justify-center  min-h-96 relative'>
        <img src='/svgs/select-your-items-shopping.svg' alt='Ooja' width={75} className='absolute top-10 left-5 rotate-12 -z-10 my-10'/>
            <h1 className='text-7xl text-center text-secondary' >
                Welcome to the best place to buy and sell your favorite items. <span className='oj'></span>
                is your one stop <span className='oj'>market place</span>
            </h1>

            <p>
                We also offer delivery services, so you can get your items as soon as possible. Ooja serves everyone around the country. We sell varieties of everything from house hold items to food and groceries and every other needs...
            </p>
            <Link to="/register" className='bg-primary text-tertiary py-2 px-4 rounded-md font-bold'>Get Started</Link>

            <img src='/svgs/shopping-world-online.svg' alt='Ooja' width={100} className='absolute bottom-0 right-0 rotate-6'/>
        </div>
    </div>



  )
}

export default Hero
