export default function NotFound() {
  return (
    <main className="ba-not-found">
      <div className="ba-not-found-glow" aria-hidden="true" />
      <div className="ba-not-found-card">
        <span className="ba-not-found-code">404</span>
        <p className="ba-not-found-eyebrow">Page not found</p>
        <h1>This route went beyond the map.</h1>
        <p>
          The page may have moved, changed, or never existed. Return to the
          Beyond Automation homepage and continue exploring.
        </p>
        <a className="ba-button ba-button-primary" href="/">
          Return home <span aria-hidden="true">→</span>
        </a>
      </div>
    </main>
  );
}
