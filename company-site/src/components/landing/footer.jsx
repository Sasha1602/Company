import { footer } from "../../data";
import '../../style/footer.css'

export const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        {[...Array(footer.length - 1)].map((_, index) => (
          <div className='footer-grid'>
            <p>{footer[index].leftInfo}</p>
            <p>{footer[index].rightInfo}</p>
          </div>
        ))}
      </div>
    </footer>
  )
}