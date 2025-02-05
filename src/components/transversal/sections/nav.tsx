'use client'

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export interface NavProps {
    className: string;
    // itemsMenu: MenuItem[]
}
export const Nav = ({ className }: NavProps) => {
   
    return (
        <nav className={className}>
            {/* {itemsMenu && itemsMenu.map(({ name, icon, path }, index) => (
                <Link className={clsx(`${index < itemsMenu.length && 'mr-7'}`, 'font-ubuntu my-2 lg:my-0 h-16 lg:h-full text-lg lg:text-base text-primary-400 lg:text-blue-900 leading-6 font-normal tracking-normal hover:font-bold pl-4 lg:pl-0 hover:border-orange-600 flex items-center hover:border-l-4 lg:hover:border-l-0 lg:hover:border-b-4')}
                    href={path}
                    key={index}>
                    {icon && <Image className='mr-2 flex lg:hidden' src={icon} alt='phone' width={20} height={20} />}
                    {name}
                </Link>
            ))} */}
        </nav>
    );
}