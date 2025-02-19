import Image from 'next/image';


export default function Home() {
  return (
    <main className='lg:min-h-screen bg-gray-100 '>
      <section className='w-full grid grid-cols-6 gap-0'>
        <div className='col-span-4 col-start-2 my-8  '>
          <h1 className='text-4xl md:text-4xl lg:text-5xl text-green-600 font-ubuntu font-bold'>Somos Click</h1>
          <p className='text-sm md:text-sm lg:text-base mt-8'>Somos, un canal de información laboral apasionado y comprometido, dedicado a ofrecer soluciones innovadoras de alta calidad que transforman el ámbito laboral en Colombia.</p>
        </div>
        <div className='col-start-1 col-end-7 md:col-start-1 md:col-end-5 bg-green-200 py-8 px-6 flex items-center'>
          <div>
            <h2 className='text-3xl text-green-600 font-ubuntu font-bold '>Nuestro Propósito </h2>
            <p className='text-sm md:text-sm lg:text-base mt-6'>Nuestra misión es proporcionar información relevante y actualizada sobre el mundo del trabajo, promoviendo el desarrollo y el bienestar de los trabajadores. A través de noticias, recursos educativos y asesorías de expertos, buscamos tener un impacto positivo en nuestra comunidad, fundamentando nuestra labor en la colaboración, el respeto y la integridad.</p>
          </div>
        </div>
        <div className='col-start-1 col-end-7 md:col-span-2 md:col-start-5 '>
          <Image className='w-full h-72 lg:h-full' src={`/images/whoweare/purpose.jpg`} alt='' width={200} height={100} />
        </div>
        <div className='col-start-1 col-end-7  md:col-start-2 md:col-end-3 py-8'>
          <h2 className='text-center md:text-left text-3xl md:text-2xl lg:text-5xl text-green-600 font-ubuntu font-bold md:mt-8'>¿Qué te ofrecemos?</h2>
        </div>
        <ul className='col-start-1 col-end-7 mdcol-span-3 md:col-start-3 mx-auto md:py-8 lg:py-12'>
          <li className='flex items-center mt-4'>
            <i className='spa text-green-700 mr-2 ' />
            <p className='text-sm md:text-sm lg:text-base'>Vender tus productos y servicios.</p>
          </li>

          <li className='flex items-center'>
            <i className='spa text-green-700 mr-2' />
            <p className='text-sm md:text-sm lg:text-base'>Conectar con otros emprendedores y empresas.</p>
          </li>
          <li className='flex items-center'>
            <i className='spa text-green-700 mr-2' />
            <p className='text-sm md:text-sm lg:text-base'>Crear alianzas estratégicas con nuevos colaboradores.</p>
          </li>
          <li className='flex items-center'>
            <i className='spa text-green-700 mr-2' />
            <p className='text-sm md:text-sm lg:text-base'>Desarrollo Profesional</p>
          </li>
          <li className='flex items-center'>
            <i className='spa text-green-700 mr-2' />
            <p className='text-sm md:text-sm lg:text-base'>Información sobre cursos, certificaciones y seminarios.</p>
          </li>
        </ul>

        <div className='col-start-1 col-end-7 md:col-span-2 md:col-start-1 mt-8 md:mt-0'>
          <Image className='w-full h-72 lg:h-full' src={`/images/whoweare/ourValues.jpg`} alt='' width={200} height={100} />
        </div>
        <div className='col-start-1 col-end-7 md:col-start-3 md:col-end-7 bg-yellow-100/50 py-8 px-6 flex items-center'>
          <div>
            <h2 className='text-3xl md:text-2xl lg:text-5xl text-green-600 font-ubuntu font-bold '>Nuestros Valores</h2>
            <p className='ttext-sm md:text-sm lg:text-base mt-6 font-ubuntu'>Cada acción que emprendemos está basada en la colaboración, el respeto y la integridad. Buscamos generar un espacio seguro y accesible donde los trabajadores puedan expresar sus dudas y aprender en un ambiente de camaradería.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
