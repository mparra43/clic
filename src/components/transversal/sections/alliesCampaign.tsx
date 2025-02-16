import Image from 'next/image'
import Link from 'next/link'

interface AlliesCampaignProps {
    image: string;
    title: string;
}
export const AlliesCampaign = ({ image, title }: AlliesCampaignProps) => {

    return (
        <section className='w-10/12 lg:h-96 lg:flex my-12 shadow-xl'>
            <Image className='w-full h-full flex lg:w-6/12 rounded-lg' src={image} alt={title} width={400} height={100} />
            <div className='w-full lg:w-6/12 bg-gray-50 p-6 rounded-r-lg'>
                <div className='w-full'>
                    <span className='text-md text-green-700 font-extrabold font-ubuntu'>Únete como aliado </span>
                    <h2 className='text-2xl md:text-2xl/14 lg:text-4xl/9 font-extrabold e font-ubuntu '>¡Haz crecer tu empresa con Click!</h2>
                    <p className='text-sm lg:text-md mt-4'>Únete como aliado y lleva tu negocio al siguiente nivel. Sé parte de nuestros eventos exclusivos, donde podrás:</p>

                    <ul className='mt-4 ml-6'>
                        <li className='flex'>
                            <i className='spa text-green-700 mr-2' />
                            <p className='text-xs'>Vender tus productos y servicios.</p>
                        </li>

                        <li className='flex'>
                            <i className='spa text-green-700 mr-2' />
                            <p className='text-xs'>Conectar con otros emprendedores y empresas.</p>
                        </li>
                        <li className='flex'>
                            <i className='spa text-green-700 mr-2' />
                            <p className='text-xs'>Crear alianzas estratégicas con nuevos colaboradores.</p>
                        </li>
                    </ul>
                    <p className='text-sm lg:text-md mt-4 '>No dejes pasar la oportunidad de expandir tu alcance y fortalecer tu marca.</p>
                </div>
              
                <div className='w-full flex justify-end'>
                    <Link href='/alliances' className= 'w-full md:w-auto bg-green-700 shadow-xl text-white text-sm text-center md:text-end font-ubuntu rounded-lg mt-4 py-2 px-4'>Escribe hoy y únete a Click</Link>
                </div>
            </div>
        </section>
    )

}

