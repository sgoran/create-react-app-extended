import React from 'react'
import {
  NavLink 
} from 'react-router-dom'



const SideMenu = (props) => {
    const menuStyle = {
        textAlign: 'left',
        marginTop: '14px',
        marginLeft: '14px',
        display: (props.hidden ? 'none' : 'block')
    };
    return (
        <aside className={props.className} style={menuStyle}>
            <p className="menu-label">
                General
            </p>
            <ul className="menu-list">
                <li>
                    <NavLink exact activeClassName="is-active" to="/">
							Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="is-active" to="/documentation">
							Card
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="is-active" to="/form">
                            Form
                    </NavLink>
                </li>
            </ul>
            <p className="menu-label">
                Data
            </p>
            <ul className="menu-list">
                <li>
                    <NavLink activeClassName="is-active" to="/parentstate">
                        Update State Example
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="is-active" to="/redux">
                        Redux Eample
                    </NavLink>
                </li>
            </ul>
        </aside>
    )
}

export default SideMenu