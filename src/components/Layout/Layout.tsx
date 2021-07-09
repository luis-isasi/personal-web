import Header from '@Components/Header'
import Footer from '@Components/Footer'
import PageUnderConstruction from '@Components/PageUnderConstruction'

interface Props {
  isConstruction?: boolean
}

const Layout: React.FC<Props> = ({ children, isConstruction = false }) => {
  console.log(isConstruction)

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

  return (
    <div className="w-full h-auto font-sans">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
