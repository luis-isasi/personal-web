import Wave from '@Components/Wave'

const App = () => {
  return (
    <div className="w-full h-screen bg-transparent">
      <div className="bg-green-400 relative w-full h-auto">
        <span>¡Hola!</span>
        <br />
        <p>
          Soy <h1>Luis Isasi</h1> un Software Developer que convierte ideas en
          código usando principalmente Javascript y Golang.
        </p>
        <p>
          En lugar de tener un típico portafolio, este sitio almacenará todo lo
          que he ido (e iré) aprendido en forma de artículos, snippets,
          proyectos, boilerplates, links y demás.
        </p>
        <p>
          La memoría es frágil, así que mi yo del futuro agradecerá el tener un
          espacio como este.
        </p>
        <Wave />
      </div>
    </div>
  )
}

export default App
