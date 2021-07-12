import Link from '@Components/Links/Link'
import Icon404 from '@Components/Icons/Icon404'

const Page404 = () => {
  return (
    <div
      className="bg-purple-700 w-screen h-screen flex flex-col items-center justify-center"
      style={{
        background:
          'linear-gradient(50deg, rgba(48,105,217,1) 0%, rgba(204,68,89,1) 100%)',
      }}
    >
      <div className="relative w-full max-w-xl mx-auto text-white flex flex-col items-center">
        <p className="text-3xl md:text-4xl xl:text-5xl text-center font-bold py-2">
          Oh No! Error 404 😕
        </p>
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-center font-medium py-2">
          LOST IN SPACE? Hmm, looks like that page doesn't exist.
        </p>
        <Icon404 />
        <Link
          href="/"
          className="bg-dark-secondary hover:bg-dark-light rounded-md py-2 px-4 font-semibold transition-colors ease-in-out duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}

export const getStaticProps = () => {
  return {
    props: {
      pageNotFound: true,
    },
  }
}

export default Page404
