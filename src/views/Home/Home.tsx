import Wave from '@Components/Wave'
import Technologies from './components/Technologies'
import PresentingMe from './Sections/PresentingMe'

const Home = () => {
  return (
    <div className="w-full h-auto bg-green-400 ">
      <div className="relative h-auto w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl p-5 md:pt-5 md:pb-0 lg:px-0 mx-auto xl:flex">
        <PresentingMe />
        <Technologies />
      </div>
      <Wave />
      <div className="bg-white w-full h-9xl"></div>
    </div>
  )
}

export default Home
