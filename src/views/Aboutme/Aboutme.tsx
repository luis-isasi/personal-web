import MyGmail from './components/MyGmail'

import PresentingMe from './sections/PresentingMe'
import AboutmeText from './sections/AboutmeText'

const Aboutme = () => {
  return (
    <div className="h-full mx-auto w-full max-w-7xl flex flex-col items-center dark:text-white">
      <div className="w-full mt-20 mb-10">
        <PresentingMe />
      </div>
      <div className="self-start mb-15">
        <MyGmail />
      </div>
      <div>
        <AboutmeText />
      </div>
    </div>
  )
}

export default Aboutme
