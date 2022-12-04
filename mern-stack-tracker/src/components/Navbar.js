import Nav from 'react-bootstrap/Nav'
import { Outlet, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <Nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          ExcerTracker
        </Link>
        <div className="collapse navbar-collapse">
          <Nav.Item className="navbar-item">
            <Link to="/" className="nav-link">
              Exercises
            </Link>
          </Nav.Item>
          <Nav.Item className="navbar-item">
            <Link to="/create" className="nav-link">
              Create Exercise Log
            </Link>
          </Nav.Item>
          <Nav.Item className="navbar-item" as="li">
            <Link to="/user" className="nav-link">
              Create User
            </Link>
          </Nav.Item>
        </div>
      </Nav>
      <Outlet />
    </>
  )
}

export default Navbar
