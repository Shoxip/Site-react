import './navBtn.css';

function NavBtn(props) {
    return(
        <div className="navBtn"onClick={props.click}>
            <div className="toggleBtn">
                ...
            </div>
        </div>
    );
}

export default NavBtn