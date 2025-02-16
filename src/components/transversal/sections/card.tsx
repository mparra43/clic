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
        <Link className='w-full overflow-hidden shadow-lg bg-white rounded-xl' href=''>
            <Image
                className='w-full h-40 lg:h-48 rounded-t-xl'
                data-fetchpriority='high'
                loading='lazy'
                src={`/images/${file}/${image}`}
                alt={title}
                width={100}
                height={100} />
            <div className='p-3 '>
                <h4 className='font-kreon text-sm lg:text-md font-bold'>{title}</h4>
                <p className='text-xs lg:text-sm'>{description}</p>
            </div>
        </Link>
    );
}