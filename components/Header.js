import style from '../styles/Components/Header.module.scss'

function Header () {
  return (
    <>
      <div className={`${['fade-in-down header']}`}>
        <div className={`${style['header-bar']}`}>
          <div className={`${style['header-bar-img-logo']}`}></div>
          <label className={`${style['fa-bars']}`} id={`${style['slide-nav-button']}`} htmlFor="menu"><span><img src="./menu.svg" alt="menu" /></span></label>
        </div>
        <nav id={`${style['slide-menu']}`} className={`${style['slide-menu-nav']}`}>
          <input type="checkbox" id="menu" className={`${style['font-menu']}`} />
          <ul className={`${style['nav-list']}`}>
            <li className={`${style['nav-list-item']}`}>
              <a>Registrate</a>
            </li>
            <li className={`${style['nav-list-item']}`}>
              <a>Ingresa</a>
            </li>
            <li className={`${style['nav-list-item']}`}>
              <a>Favoritos</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header