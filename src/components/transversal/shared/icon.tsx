import clsx from 'clsx'



interface iconProps {
    icon: string;
    className: string;

}

export const Icon = ({ className, icon }: iconProps) => {
    return (
        <i className={clsx(icon, className)} />
    );
} 