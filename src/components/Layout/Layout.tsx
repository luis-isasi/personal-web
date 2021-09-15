import Header from '@Components/Header'
import Footer from '@Components/Footer'
import PageUnderConstruction from '@Views/PageUnderConstruction'

interface Props {
  isConstruction?: boolean
  pageNotFound?: boolean
}

const Layout: React.FC<Props> = ({
  children,
  isConstruction = false,
  pageNotFound = false,
}) => {
  if (isConstruction) {
    return (
      <div className="w-full h-auto font-sans dark">
        <PageUnderConstruction />
        <Footer />
      </div>
    )
  }

  if (pageNotFound) {
    return (
      <>
        {children}
        <div className="dark">
          <Footer />
        </div>
      </>
    )
  }

  return (
    <div className="w-full h-auto font-sans">
      <div className="min-h-screen h-auto w-full bg-white dark:bg-dark-light flex flex-col">
        <Header />
        <div className="flex-grow">{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
