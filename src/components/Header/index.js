import './index.css'

const Header = () => (
  <nav className="NavSty">
    <div className="leftCon">
      <div className="LOgoCon">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="logo"
          alt="website logo"
        />
      </div>
    </div>

    <div className="rightConLarge">
      <li>Home</li>
      <li>Products</li>
      <li>Cart</li>
      <button type="button">LogOut</button>
    </div>
    <div className="rightConSmall">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
      />
    </div>
  </nav>
)

export default Header
