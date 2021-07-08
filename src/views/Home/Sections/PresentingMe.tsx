import Link from '@Components/Links/Link'

const PresentingMe = () => {
  return (
    <div className="h-auto w-full xl:min-w-2xl xl:max-w-2xl xl:pt-5 dark:text-white">
      <section className="text-lg md:text-2xl xl:text-3xl font-bold dark:text-white ">
        <span>¡Hola! 😀</span>
        <br />
        <span>
          Soy{' '}
          <Link href="/">
            <h1 className="min-w-min inline-block text-purple-600">
              Luis Isasi
            </h1>
          </Link>
          , un Software Developer que convierte ideas en código usando
          principalmente Javascript y typescript.
        </span>
      </section>
      <br />
      <br />
      <section className="font-semibold xl:font-bold md:text-xl xl:text-2xl dark:text-white">
        <p>
          En lugar de tener un típico portafolio, este sitio almacenará todo lo
          que he ido (e iré) aprendido en forma de artículos, proyectos, links y
          demás.
        </p>
        <br />
        <p>
          La memoría es frágil, así que mi yo del futuro agradecerá el tener un
          espacio como este.
        </p>
      </section>
    </div>
  )
}

export default PresentingMe
