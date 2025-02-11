
import clsx from 'clsx';

export interface HeaderProps {
    className?: string;
    children?: React.ReactNode
    firstElement?: React.ReactNode;
    lastElement?: React.ReactNode;
}


export const Header = async ({ children, className, firstElement, lastElement }: HeaderProps) => {

    return (
        <header className={clsx('w-full h-20 bg-green-600 shadow-md opacity-100 items-center sticky top-0 z-40', className)} data-testid='header'>
            {firstElement}
            {children && children}
            <div className='flex justify-end'>
                {lastElement}
            </div>
        </header>
    )
}




