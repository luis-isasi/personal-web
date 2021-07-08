import Wave from '@Components/Wave'
import Technologies from './components/Technologies'
import PresentingMe from './Sections/PresentingMe'
import RecentContent from './Sections/RecentContent'
import Categories from './components/Categories'

const Home = () => {
  return (
    <div className="w-full dark:bg-dark-primary">
      <div className="w-full h-auto bg-gradient-to-r from-gradient-start to-gradient-end dark:from-dark-secondary dark:to-dark-secondary">
        <div className="relative h-auto w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl p-5 md:pt-5 md:pb-0 lg:px-0 mx-auto xl:flex">
          <PresentingMe />
          <Technologies />
        </div>
        <Wave className="text-white dark:text-dark-primary" />
      </div>
      <div className="h-auto w-full flex flex-col lg:flex-row lg:justify-between md:max-w-3xl lg:max-w-4xl xl:max-w-5xl p-5 md:pt-5 md:pb-0 lg:px-0 mx-auto ">
        <RecentContent />
        <Categories />
      </div>
    </div>
  )
}

export default Home
