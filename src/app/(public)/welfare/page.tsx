
import { Transversal } from '@/components/transversal/sections';
import { homePage } from '@/constants';
import { Event } from '@/interfaces';
import { splitArraysEquals } from '@/lib';
import Image from 'next/image';




export default async function Page() {



  const { alliesCampaign, sliderItems, services, event } = homePage;

  const { grups } = splitArraysEquals(event, 4);

  const events = grups.map((item) => item.map(({ title, description, image }: Event, index: number) => (
    <Transversal.Card key={index} file='events' title={title} description={description} image={image} />
  )))

  const eventsMobile = splitArraysEquals(event, 1).grups.map((item) => item.map(({ title, description, image }: Event, index: number) => (
    <Transversal.Card key={index} file='events' title={title} description={description} image={image} />
  )))

  return (
    <main className='flex min-h-screen justify-center bg-gray-100'>
      <section className='w-full grid grid-cols-6 gap-0'>
        <div className='col-start-1 col-end-7 md:col-start-1 md:col-end-5 bg-yellow-50 py-8 px-6 flex items-center'>
          <div>
            <h1 className='text-3xl text-green-600 font-ubuntu font-semibold'>Bienestar</h1>
            <h2 className='text-3xl text-green-600 font-ubuntu font-bold'>Conexiones que impulsan tu crecimiento</h2>
            <p className='text-sm md:text-sm lg:text-base mt-6'>Bienestar es un programa de Click diseñado para crear espacios donde asistentes y aliados se conectan para crecer juntos. A través de nuestros eventos, ofrecemos la oportunidad de:</p>

            <ul className='w-full'>
              <li className='flex items-center mt-4'>
                <i className='spa text-green-700 mr-2 ' />
                <p className='text-sm md:text-sm lg:text-base'>Adquirir productos y servicios de nuestros aliados estratégicos.</p>
              </li>

              <li className='flex items-center'>
                <i className='spa text-green-700 mr-2' />
                <p className='text-sm md:text-sm lg:text-base'>Conectar con emprendedores y empresas para expandir tu red de contactos.</p>
              </li>
              <li className='flex items-center'>
                <i className='spa text-green-700 mr-2' />
                <p className='text-sm md:text-sm lg:text-base'>Crear alianzas estratégicas con nuevos colaboradores.</p>
              </li>

            </ul>
          </div>
        </div>
        <div className='col-start-1 col-end-7 md:col-span-2 md:col-start-5 '>
          <Image className='w-full h-96' src={`/images/welfare/main.jpg`} alt='' width={300} height={100} />
        </div>
        <Transversal.CarouselWhitGrid classNameSection='col-span-6  my-8  '
          items={events}
          title='Únete a Bienestar'
          subtitle='Cada evento, una nueva oportunidad para crecer'
          itemsMobile={eventsMobile}
        />
      </section>
    </main>
  )
} 
