import "./Header.css";

export function WireframeHeader() {
  return (
    <header className="header">


      <div className="header-content">
        {/* Large heading */}
        <h1 className="header-title">
          Demo 1
        </h1>

        {/* Navigation breadcrumb */}
        <nav className="header-nav">
          <a href="#hero">Home</a>
          <a href="#about">About us</a>
          <a href="#services">service</a>
          <a href="#contact">contact</a>
        </nav>
      </div>
    </header>
  );
}
