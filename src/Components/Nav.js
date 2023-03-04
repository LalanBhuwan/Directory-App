import {Link} from 'react-router-dom';
import './Nav.css';

const Nav = () =>{
    return(
        <div className="add_and_retrieve_btn">
            <button ><Link className='btn' to={"/"}>Add New Person</Link></button>
            <button ><Link className='btn' to={"/retrieve"}>Retrieve Information</Link></button>
        </div>
    );

}
export default Nav;