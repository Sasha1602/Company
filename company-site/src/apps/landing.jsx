
import { About, Contacts, Footer, Header, Info, Supports } from '../components/landing/index'
import '../style/componentsList.css'

export const ComponentsList = () => {
  return (
    <body className='body'>
      <Header />
      <Info />
      <div className='shadow-box'>
        <About />
        <Supports />
        <Contacts />
      </div>
      <Footer />
    </body>
  )
}