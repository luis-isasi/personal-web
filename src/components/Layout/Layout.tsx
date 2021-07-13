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
      <div className="w-full h-auto font-sans">
        <PageUnderConstruction />
        <div className="dark">
          <Footer />
        </div>
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
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
