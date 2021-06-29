import Header from '@Components/Header'
import Footer from '@Components/Footer'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
