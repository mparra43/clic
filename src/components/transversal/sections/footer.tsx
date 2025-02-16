import Link from "next/link"
import Image from "next/image"


export const Footer = () => {

  return (
    <footer className='w-full bg-green-700 grid place-items-center md:grid-cols-3 p-6' data-testid='footerComponent'>
      <div className='mb-6 md:mt-0lg:mb-0'>
        <h1 className='text-4xl lg:text-6xl text-center lg:text-left text-white font-kreon'>CLICK</h1>
        <p className='text-white text-lg text-center lg:text-left'>Oficios y profesiones</p>
      </div>
      <ul className=' mb-6 md:mt-0 text-white font-ubuntu'>
        <li>Bogóta</li>
        <li>Dirección: </li>
        <li>Tel: 3165083429</li>
      </ul>
      <div className='w-full flex justify-center md:justify-end '>
        <Link className='mr-4' href=''>
          <Image  className='w-8 h-8' src='/images/icons/facebook.svg' alt='tgf' width={100} height={100} />
        </Link>
        <Link className='mr-4' href=''>
          <Image  className='w-8 h-8' src='/images/icons/instagram.svg' alt='tgf' width={100} height={100} />
        </Link>
        <Link className='mr-4' href=''>
          <Image className='w-8 h-8' src='/images/icons/tiktok.svg' alt='tgf' width={100} height={100} />
        </Link>
      </div>
    </footer>
  );
}