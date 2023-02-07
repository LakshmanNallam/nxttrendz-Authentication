import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="DivConHome">
      <div className="imgCnHOMEForMobule">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
        />
      </div>
      <div className="LowerHomeCon">
        <div className="con1">
          <h1 className="H1SizeClothe">Clothes That Get You Noticed</h1>
          <p className="paraa">
            Fashion is part of the daily air dsjkffffhjkhsdf sdjkdf kjdsf hkdsjf
            hkdsjf hjdsfkjshd fkhdf jkshdfjkhsd fkhsd fhksdjfh sjkdf ksfh
            skjdfhjs dkfjh
          </p>
          <div className="BtnCon">
            <button type="button">Shop Now</button>
          </div>
        </div>
        <div className="con2">
          <div className="clotheHoldingCon">
            {' '}
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              className="ClothesThat"
              alt="clothes that get you noticed"
            />
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Home
