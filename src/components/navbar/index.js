
export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg " style={{ backgroundColor: "#069df5" }}>
      <a class="navbar-brand" style={{ color: "#ffffff" }} href="/">Home</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" style={{ color: "#ffffff" }} href="/table">Table<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style={{ color: "#ffffff" }} href="/comments">Comments</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}