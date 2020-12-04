
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#2525f3" }}>
        <a className="navbar-brand" href="/" style={{ color: "#ffff" }}>Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/table" style={{ color: "#ffff" }}>Table <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/comments" style={{ color: "#ffff" }}>Comments</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}