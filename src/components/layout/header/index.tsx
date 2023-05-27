import Menu from "#components/layout/header/Navbar/Menu";
import Style from "#styles/Home.module.css"

const Header = () => {
  return (
    <div className={`${Style.overlay} bg-hero-bg h-1000v bg-no-repeat bg-center bg-cover relative section-gap-b`}>
      <Menu />
      
    </div>
  );
};

export default Header;
