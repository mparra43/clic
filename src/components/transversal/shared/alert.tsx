import clsx from 'clsx'
import { ConfirmationMessage } from '@/interfaces';


interface AlertProps extends ConfirmationMessage {
    background?: string;
    colorBorder?: string;
    colorTitle?: string;
    colorParagraph?: string;
    className: string
    onClick: () => void;
}

export const Alert = ({
    className,
    colorTitle,
    colorParagraph,
    onClick,
    paragraph,
    title,
}: AlertProps) => {

    return (
        <div className={clsx(className, 'pt-2 pb-4 px-4 border-2 rounded-lg')}>
            <div className='w-full flex justify-between'>
                <h3 className={clsx(colorTitle, 'text-left text-lg md:text-2xl lg:text-xl font-bold font-kreon pt-2')}>{title}</h3>
                <i className='xmark text-xl sm:text-2xl text-slate-300 not-italic' onClick={onClick} />
            </div>
            <div className='w-[96%] '>
                <p className={clsx(colorParagraph, 'text-left text-xs sm:text-sm md:text-base lg:text-md font-ubuntu font-normal leading-4 lg:leading-5 mt-1')} >{paragraph}</p>
            </div>
        </div>
    );
}