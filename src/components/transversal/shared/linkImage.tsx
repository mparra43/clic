import Link from 'next/link';
import Image from 'next/image'



interface LinkImageProps {
    image: {
        src: string;
        alt: string;
        className: string;
    }
    link?: {
        className?: string;
        url: string

    }

}

export const LinkImage = ({ image, link }: LinkImageProps) => {
   
    return (
        <>
            {link ? <Link className={link.className} href={link.url}>
                {image?.src && <Image className={image.className} src={image.src} alt={image.alt} width={100} height={100} />}
            </Link> : <Image className={image.className} src={image.src} alt={image.alt} width={100} height={100} />}
        </>
    );
} 