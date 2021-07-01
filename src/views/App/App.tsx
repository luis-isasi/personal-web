import Link from '@Components/Links/Link'

import Wave from '@Components/Wave'

const App = () => {
  return (
    <div className="w-full h-auto bg-green-400">
      <div className=" relative h-auto p-5">
        <span className="text-lg font-bold">¡Hola! 😀</span>
        <p className="font-bold">
          Soy{' '}
          <Link href="/">
            <h1 className="min-w-min inline-block text-blue-600">Luis Isasi</h1>
          </Link>
          , un Software Developer que convierte ideas en código usando
          principalmente Javascript y typescript.
        </p>
        <br />
        <p className="font-semibold">
          En lugar de tener un típico portafolio, este sitio almacenará todo lo
          que he ido (e iré) aprendido en forma de artículos, proyectos, links y
          demás.
        </p>
        <br />
        <p className="font-semibold">
          La memoría es frágil, así que mi yo del futuro agradecerá el tener un
          espacio como este.
        </p>
      </div>
      <Wave />
    </div>
  )
}

export default App
