'use client'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { SocialIcon } from 'react-social-icons'

interface Props {
  data: any
}

export function Footer({ data }: Props) {

  console.log(data)

  return (
    <footer className="w-full bg bg-[#F7F7F7] lg:mt-20 mt-10 ">
      <div className="flex flex-col justify-around px-10">
      <div className="flex lg:flex-row flex-col  flex-wrap items-center justify-center lg:gap-y-6 gap-y-8 lg:gap-x-12 gap-x-3  text-center md:justify-between">
        <img src="/pdsLogo.png" alt="logo-ct" className="w-[190px]" />
        <div>
          <p
            color="blue-gray"
            className="font-semibold text-[20px] "
          >

            Nuestras Redes Sociales
          </p>

          <p
            color="blue-gray"
            className="font-light text-[20px]"
          >

            Peru Destino Seguro S.R.L
          </p>
          <div className="flex flex-row gap-x-3 mt-4">
            <SocialIcon bgColor="#D20000" url={data.youtube} />
            <SocialIcon bgColor="#D20000" url={data.facebook} />
            <SocialIcon bgColor="#D20000" url={data.instagram} />
            <SocialIcon bgColor="#D20000" url={data.tiktok} />
            <SocialIcon bgColor="#D20000" network="whatsapp" url={data.whatsapp} />
          </div>
        </div>
        <ul className="flex flex-wrap items-center gap-x-8 lg:text-right text-center leading-none">
          <li>
            <p
              color="blue-gray"
              className=" leading-normal"
            >

              RAZON SOCIAL:
            </p>
            <p
              color="blue-gray"
              className="font-normal leading-normal"
            >
              {data.razonSocial}
            </p>
            <p
              color="blue-gray"
              className=" leading-normal"
            >
              Direccion:
            </p>

            <p
              color="blue-gray"
              className=" leading-normal"
            >
              <MapPinIcon className="w-5 pb-2 inline-block " color="#D20000" />   Av. Tacna Nro. 168 - Cusco
            </p>


            <p
              color="blue-gray"
              className=" leading-normal"
            >
              Telefono
            </p>
            {data.numeros.map((ele) => <p
              color="blue-gray"
              className="font-normal leading-normal"
            >

              <PhoneIcon className="w-5 pb-2 inline-block" color="#D20000" />  {ele.item}
            </p>
            )}

            <p
              color="blue-gray"
              className=" leading-normal"
            >
              Correo Electronico:
            </p>

            <p
              color="blue-gray"
              className=" leading-normal"
            >
              <EnvelopeIcon className="w-5 pb-1 inline-block" color="#D20000" />     {data.email}
            </p>
          </li>
        </ul>
      </div>
      </div>
      <hr className="my-8 border-blue-gray-50" />

      <div className="w-full flex flex-col justify-center">
        <div>
        <p color="blue-gray" className="text-center font-normal">
            Derechos Reservados - Perú Destino Seguro 2024
        </p>
        <p color="blue-gray" className="text-center font-normal">
                Desarrollado por: 
            {/* <img src="" /> */}
          </p>
        {/* <img src="/tarjetas.png" alt="logo-ct" className="w-2/12" /> */}
        </div>
      </div>
    </footer>
  );
}
