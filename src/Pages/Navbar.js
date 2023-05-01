import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Navbar() {

  const mylang = useSelector((state) => state.lang)
  return (
    <>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MY STORE</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./login">Add User</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./store">Store</a>
              </li>
              <li className="nav-item">
                {mylang}
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Contact Us</a></li>
                  <li><a className="dropdown-item" href="#">Help</a></li>
                  <li><hr className="dropdown-divider" /></li>
                </ul>
              </li>
            </ul>
            {/* <button type="button" className="rounded-circle btn btn-outline-primary" style={{
              width: '3rem',
              height: '3rem',
              position: 'relative'
            }}>
              <img src="" />
              <div className="rounded-circle btn btn-danger d-flex justify-content-center align-items-center" style={{
                width: '1rem',
                height: '1rem',
                position: 'absolute',
                button: 0,
                right: 0,
                transform: 'translate(25% , 25%)'
              }}>
                3
              </div>
            </button> */}
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar