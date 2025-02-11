import Link from "next/link";
import clsx from 'clsx';

import { Service } from "@/interfaces";

export interface ServicesProps {
    className: string;
    services: Service[]


}
export const Services = ({ services }: ServicesProps) => {

    return (
        <div className='w-full h-52 mt-14'>
            <h2 className='text-xl sm:text-3xl text-center font-kreon text-slate-900'>Nuestros servicios </h2>
            <div className=''>
                <div className='grid grid-cols-3 justify-items-center mt-12'>
                    {services.map(({ path, label, icon }, index) => (
                        <div key={index} className='relative w-11/12 h-24 sm:h-32 py-8 rounded-xl bg-green-600 '>
                            <div className='w-full flex justify-center'>
                                <i className={clsx(icon, 'text-2xl sm:text-4xl text-gray-900 ')} />
                            </div>
                            <h4 className='font-ubuntu text-center text-sm  mt-3 md:text-base hidden sm:block'>{label}</h4>
                            <Link className='absolute top-0 left-0 w-full h-full grid items-center px-3 rounded-lg text-transparent hover:bg-green-500 bg-gradient-to-rbg-opacity-75 bg-top-right hover:text-white'
                                href={path}>
                                <p className='text-xs sm:text-sm md:text-xs lg:text-sm 2xl:text-base text-center font-ubuntu font-semibold leading-5'>{label}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}