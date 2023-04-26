import { NavLink } from 'react-router-dom';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { EditIcon } from '../Components/Icons/EditIcon';

import './styles/aside.css';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink className="aside-row" to="dashboard">
              <HouseIcon className="menu-icon" /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="dashboard">
              <ElementIcon className="menu-icon" /> Bloki
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="dashboard">
              <EditIcon className="menu-icon" /> Ćwiczenia
            </NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
