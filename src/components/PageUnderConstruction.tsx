import UnderConstruction from '@Components/Icons/UnderConstruction'
import useResponsive from '@Hooks/useResponsive'
import { MEDIAQUERY_SM } from '@Constants'

const PageUnderConstruction: React.FC = () => {
  const isMovil = useResponsive({
    maxMediaQuery: MEDIAQUERY_SM,
  })

  return (
    <div
      className="min-h-2xl h-screen w-screen"
      style={{
        background:
          'linear-gradient(321deg, rgba(70,101,252,1) 0%, rgba(255,78,78,1) 100%)',
      }}
    >
      <div className="w-full max-w-3xl mx-auto h-full  py-10 flex flex-col justify-center items-center">
        <h2 className="text-dark-light text-4xl font-bold">Luis Isasi</h2>
        <p className="text-dark-light text-lg text-center font-medium py-2">
          Website under construction 😕
        </p>
        <div className="relative w-full h-auto max-h-xl">
          <UnderConstruction className="w-full h-full" />
        </div>
        <a
          target="_blank"
          href="https://codepen.io/bungeedesign/pen/yMqZyv"
          className="text-black hover:text-dark-light text-xs transition-colors ease-in-out duration-150 hover:underline text-center"
        >
          {isMovil
            ? '¡codepen here!'
            : 'codepen: https://codepen.io/bungeedesign/pen/yMqZyv'}
        </a>
      </div>
    </div>
  )
}

export default PageUnderConstruction
