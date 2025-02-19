import { Transversal } from "@/components/transversal/sections";
import { Field, TypeButton } from "@/enum";


export default function Page() {
  return (
      <main className='min-h-screen bg-gray-100 flex justify-center items-center '>
          <Transversal.ContactForm
            className='md:w-7/12 bg-white rounded-lg p-6 md:px-20 md:py-12'
            title="Únete como aliado a Click"
            
            // companyLogo="/images/company-logo.png"
            // companyId="1234"
            resetForm={true}
            name='name'
    
            button={{
              active: 'bg-green-600 hover:bg-blue-700',
              disabled: 'bg-green-600 mt-4 text-white py-4 cursor-not-allowed',
              label: 'Enviar solicitud',
              type: TypeButton.SUBMIT,
              style:'mx-auto w-5/12 py-3 mt-8 flex justify-center text-white rounded-lg'
            }}
            inputs={[
              {
                field: Field.INPUTFIELD,
                name: 'companyName',
                label: 'Nombre de la empresa',
                rules: { required: 'El correo electrónico es obligatorio' },
              },
              {
                field: Field.INPUTFIELD,
                name: 'contactName',
                label: 'Nombre de contacto',
                rules: { required: 'El correo electrónico es obligatorio' },
              },
              {
                field: Field.INPUTFIELD,
                name: 'email',
                label: 'Correo Electrónico',
                rules: { required: 'El correo electrónico es obligatorio' },
              },
              {
                field: Field.NUMERICFIELD,
                name: 'phone',
                label: 'Teléfono',
                rules: { required: 'El correo electrónico es obligatorio' },
              },
              {
                field: Field.TEXTAREAFIELD,
                name: 'message',
                label: 'Cuéntanos sobre tu empresa y qué te interesa',
                rules: { required: 'El correo electrónico es obligatorio' },
              },
            ]}
          />
        </main>
  );
}
