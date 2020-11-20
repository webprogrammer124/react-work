import MyLinks from "./MyLinks";
import logo from './images/1.jpg';
function Header(){
    return (
        <>
        <div><img src ={logo} alt='' width='20px'/></div>
          <MyLinks />
        <div>logo</div>
        <div>heading</div>
        <div>links</div>
        </>
    );
}
export default Header;