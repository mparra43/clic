import { Transversal } from '@/components/transversal/sections';
import { homePage } from '@/constants';
import { Event } from '@/interfaces';
import { splitArraysEquals } from '@/lib';
import Image from 'next/image';


interface Props {
  params: {
    id: string;
  };
}

export default async function Page({ params }: Props) {

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
        <div className='col-start-1 col-end-7 md:col-start-1 md:col-end-5 bg-green-100  px-6 lg:px-12 flex items-center'>
          <div>
            <h1 className='text-3xl text-green-600 font-ubuntu font-semibold'>Crecimiento Personal</h1>
            <h2 className='text-3xl text-green-600 font-ubuntu font-bold'>Impulsa tu desarrollo y expande tu red</h2>
            <p className='text-sm md:text-sm lg:text-base mt-6'>Crecimiento Personal es un programa de Click que te brinda herramientas y oportunidades para impulsar tu desarrollo, conectando a asistentes y aliados en nuestros eventos.</p>
            <p className='text-sm md:text-sm lg:text-base mt-6'>Únete a Crecimiento Personal y transforma cada evento en una oportunidad para avanzar. 🚀</p>
           
          </div>
        </div>
        <div className='col-start-1 col-end-7 md:col-span-2 md:col-start-5 '>
          <Image className='w-full h-96' src={`/images/events/main.jpg`} alt='' width={400} height={100} />
        </div>
        <Transversal.CarouselWhitGrid classNameSection='col-span-6  my-8  '
          items={events}
          title='Forma parte de Crecimiento Personal'
          subtitle='convierte cada evento en un paso hacia tu éxito'
          itemsMobile={eventsMobile}
        />
      </section>
    </main>
  )
} 