import Header from '@Components/Header'
import Footer from '@Components/Footer'
import Wave from '@Components/Wave'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="w-full h-auto font-sans">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
