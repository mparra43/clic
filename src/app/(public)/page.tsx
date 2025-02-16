
import { Transversal } from '@/components/transversal/sections';
import { homePage } from '@/constants';
import { Event } from '@/interfaces';
import { splitArraysEquals } from '@/lib';


export default function Home() {

  const { alliesCampaign, sliderItems, services, event } = homePage;

  const { grups } = splitArraysEquals(event, 4);

  const events = grups.map((item) => item.map(({ title, description, image }: Event, index: number) => (
    <Transversal.Card key={index} file='events' title={title} description={description} image={image} />
  )))

  const eventsMobile =  splitArraysEquals(event, 1).grups.map((item) => item.map(({ title, description, image }: Event, index: number) => (
    <Transversal.Card key={index} file='events' title={title} description={description} image={image} />
  )))



  return (
    <main className='flex flex-col items-center justify-between'>
      <Transversal.Slider className='h-[12rem] md:h-[14.4rem] lg:h-[18rem] xl:h-[22rem] 2xl:h-[26rem] overflow-x-hidden' file='slider' items={sliderItems} />
      <Transversal.Services className='w-full mt-8 md:mt-14' services={services} />
      <Transversal.CarouselWhitGrid classNameSection='w-full h-full mt-8 lg:mt-14 bg-green-100/50 py-12 px-6'
        items={events}
        title='Eventos imperdibles'
        subtitle='Oportunidades que impulsan tu crecimiento'
        itemsMobile={eventsMobile}
      />
      <Transversal.AlliesCampaign image={alliesCampaign.image} title={alliesCampaign.title} />
    </main>
  );
}
