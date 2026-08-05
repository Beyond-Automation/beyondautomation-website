export default function LaunchNewsletter() {
  return (
    <section className="ba-newsletter-section">
      <div className="ba-container">
        <div className="ba-newsletter-card">
          <div>
            <p>Beyond Automation Dispatch</p>
            <h2>Practical engineering delivered without the hype.</h2>
            <span>
              Product releases, PowerShell lessons, infrastructure guidance, and the
              real story behind what we build.
            </span>
          </div>

          <form
            name="newsletter"
            method="POST"
            data-netlify="true"
            className="ba-newsletter-form"
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <label htmlFor="newsletter-email">Work email</label>
            <div>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
              />
              <button type="submit">Join the list</button>
            </div>
            <small>No spam. Unsubscribe anytime.</small>
          </form>
        </div>
      </div>
    </section>
  );
}
