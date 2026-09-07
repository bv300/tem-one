import "./Header.css";

export function WireframeHeader() {
  return (
    <header className="header">
      {/* Circular D badge */}
      <div className="header-badge">
        <span>D</span>
      </div>

      <div className="header-content">
        {/* Large heading */}
        <h1 className="header-title">
          Demo 1
        </h1>

        {/* Navigation breadcrumb */}
        <nav className="header-nav">
          <a href="#hero">Home</a>
          <span className="nav-arrow">→</span>
          <a href="#about">About us</a>
          <span className="nav-arrow">→</span>
          <a href="#services">service</a>
          <span className="nav-arrow">→</span>
          <a href="#contact">contact</a>
        </nav>
      </div>
    </header>
  );
}
