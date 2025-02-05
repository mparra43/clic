
import Image from 'next/image';


export interface GroupMainLogoProps {
  className?: string
  country?: string
  flag?: string
  mainlogo?: string
}

export const GroupMainLogo = ({ className, country, flag, mainlogo }: GroupMainLogoProps) => {


  return (
    <div className={`${className}`}>
      <div className='items-center flex'>
        {(country && flag) && <div className='mr-2 sm:mr-4 h-10 sm:h-12 flex flex-col justify-end'>
          <Image
            className='w-7 sm:w-8 lg:w-12 h-3.5 sm:h-4  mx-auto'
            data-fetchpriority='high'
            width={100}
            height={100}
            src={flag}
            alt={country}
            loading='lazy'
          />
          <h6 className='text-[0.5rem] sm:text-xs lg:text-sm text-gray-400 font-normal font-ubuntu tracking-normal mt-1'>
            {country}
          </h6>
        </div>}
        {mainlogo && <Image className='w-36 sm:w-44 md:w-48 h-10 sm:h-12 lg:h-16'  data-fetchpriority='high' loading='lazy' src={mainlogo} alt='Bases universitarias' width={100} height={100} />}
      </div>
    </div>
  );
}

