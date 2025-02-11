import Image from "next/image";
import Link from "next/link";

export interface CardProps {
    description: string;
    file: string;
    title: string;
    image: string;

}


export const Card = ({ description, file, title, image }: CardProps) => {

    return (
        <Link className='w-full rounded overflow-hidden shadow-lg bg-white' href=''>
            <Image
                className='w-full h-48'
                data-fetchpriority='high'
                loading='lazy'
                src={`/images/${file}/${image}`}
                alt={title}
                width={100}
                height={100} />
            <div className='p-3 '>
                <h4 className='font-kreon text-md font-bold'>{title}</h4>
                <p className='text-sm'>{description}</p>
            </div>
        </Link>
    );
}