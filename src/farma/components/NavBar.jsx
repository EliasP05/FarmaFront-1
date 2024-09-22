import { useDispatch, useSelector } from "react-redux"
import { startLogout } from "../../store/slices/auth/thunks"
import { NavLink } from "react-router-dom"
import PropTypes from 'prop-types';
import { toggleMenu } from "../../store/slices/ui/uiSlice";


export const NavBar = () => {

    const dispatch = useDispatch()

    const { menuOpen } = useSelector(state => state.ui)

    const onLogout = () => {
        dispatch(startLogout());
    }

    const closeMenu = () => {
      dispatch(toggleMenu());
    }

  return (
<aside style={{ display: menuOpen === 'true' ? 'block' : '' }}>
    <div className="top">
      <div className="logo">
        <img src="log3-removebg-preview.png" alt="" />
        <h2 className=""><span className="danger">LOGO</span></h2>
      </div>
      <div className="close" id="close-btn" onClick={closeMenu}>
        <span className="material-symbols-outlined">close</span>
      </div>
    </div>
      <div className="sidebar">
        <NavLink to='/compatibilidad' className={({ isActive }) => (isActive ? 'active' : '')}>
          <span className="material-symbols-outlined">compare</span>
          <h3>Compatibilidad</h3>
        </NavLink>
        <NavLink to='/medicamentos' className={({ isActive }) => (isActive ? 'active' : '')}>
          <span className="material-symbols-outlined">syringe</span>
           {/* vaccines  */}
          <h3>Farmacos</h3>
        </NavLink>
        <a onClick={onLogout}>
          <span className="material-symbols-outlined">logout</span>
          <h3>Salir</h3>
        </a>
      </div>
  </aside>

)
}
NavBar.propTypes = {
  isActiveMenu: PropTypes.bool
}