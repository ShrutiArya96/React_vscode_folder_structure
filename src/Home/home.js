import {NavLink} from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <NavLink to="/Explorer" className='lld-option' >File explorer</NavLink>
        </div>
    )
}