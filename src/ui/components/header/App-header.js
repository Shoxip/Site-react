import './App-header.css'
import NavBtn from '../navBtn/navBtn'
import NavBar from '../navBar/navbar'
import { Link } from 'react-router-dom';

function AppHeader(props) {
    return(
        <div className="AppHeader">
            <div className="centerHeader">
                <a className="logo"><Link to="/"><span style={{color:'red', fontWeight: 700}}>Ro</span>udy</Link></a>
                <div style={{flex:1}}/>
                <NavBtn click={props.drawToggleClickHandler}/>
                <NavBar />
            </div>
        </div>
    );
}
export default AppHeader;