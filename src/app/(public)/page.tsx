
import { Transversal } from '@/components/transversal/sections';
import { homePage } from '@/constants';
import { Event } from '@/interfaces';
import { splitArraysEquals } from '@/lib';


export default function Home() {

  const { sliderItems, services, event } = homePage;

  const { grups, pagination } = splitArraysEquals(event, 4);

  const events = grups.map((item) => item.map(({ title, description, image }: Event, index: number) => (
    <Transversal.Card key={index} file='events' title={title} description={description} image={image} />
  )))



  return (
    <main className='flex flex-col items-center justify-between'>
      <Transversal.Slider className='h-[12rem] md:h-[14.4rem] lg:h-[18rem] xl:h-[22rem] 2xl:h-[26rem] overflow-x-hidden' file='slider' items={sliderItems} />
      <Transversal.Services className='' services={services} />
      <Transversal.CarouselWhitGrid classNameSection='w-full h-full mt-14 bg-green-100/50 py-12 px-6'
        items={events}
        title='Eventos imperdibles'
        subtitle='Oportunidades que impulsan tu crecimiento'
      />
      <section className='w-full p-12'>
      <h2 className='text-2xl md:text-3xl font-bold text-center font-ubuntu'>Nuestros Aliados</h2>
      </section>
    </main>
  );
}
