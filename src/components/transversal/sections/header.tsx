
import Image from 'next/image'
import Link from 'next/link';
import clsx from 'clsx';

export interface HeaderProps {
    className?: string;
    children?: React.ReactNode
    firstElement?: React.ReactNode;
    header?: {
        loginButton?: {
            label: string;
            icon: string;
            link: string;
        }
        iconUser?: string;
    }
}


export const Header = async ({ children, className, firstElement, header}: HeaderProps) => {

    return (

        <header className={clsx('w-full h-20 bg-white shadow-md opacity-100 items-center sticky top-0 z-40', className)} data-testid='header'>
            <div className='flex justify-start md:justify-end'>
                {firstElement}
            </div>
            {children && children}
            <div className='flex justify-center md:justify-start'>
              
            </div>
        </header>

    )
}




