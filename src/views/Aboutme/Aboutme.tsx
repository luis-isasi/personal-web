import PresentingMe from './sections/PresentingMe'
import AboutmeText from './sections/AboutmeText'

const Aboutme = () => {
  return (
    <div className="h-full mx-auto w-full max-w-7xl flex flex-col items-center dark:text-white px-5">
      <div className="w-full mt-10 md:mt-20 mb-20 md:mb-30">
        <PresentingMe />
      </div>
      <div className="w-full mb-10">
        <AboutmeText />
      </div>
    </div>
  )
}

export default Aboutme
