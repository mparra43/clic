import clsx from 'clsx'
import { LinkImage } from './linkImage';

interface corporateLogosProps {
    className?: string;
    classNameImageOne: string;
    classNameImageTwo: string;
    corporateLogo: {
        main: {
            image: string;
            url?: string
        }
        allied: {
            image: string;
            url: string
        }
    }

}

export const CorporateLogos = ({ className, classNameImageOne, classNameImageTwo, corporateLogo: { main, allied } }: corporateLogosProps) => {

    return (
        <div className={clsx('w-80', className)} >
            {main.url ? <LinkImage link={{ url: main.url }} image={{ className: `${classNameImageOne}`, src: main.image, alt: main.image }} /> :
                <LinkImage image={{ className: `${classNameImageOne}`, src: main.image, alt: main.image }} />}
            {allied && <LinkImage link={{ url: allied.url }} image={{ className: `${classNameImageTwo}`, src: allied.image, alt: allied.image }} />}
        </div>
    );
} 