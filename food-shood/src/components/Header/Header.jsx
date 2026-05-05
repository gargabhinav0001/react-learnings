import LoginButton from "../LoginLogout/LoginBtn";
import "./Header.css";

const Header = () => {
  console.log("render header");
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">🍔 FoodShood</h1>
      </div>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Offers</a>
        <a href="#">Help</a>
        <a href="#">Sign In</a>
        <a href="#" className="cart">
          🛒 Cart
        </a>
      </nav>
      <LoginButton />
    </header>
  );
};

export default Header;
