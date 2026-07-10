function homePage() {
    return `
    <section class="hero">

        <h1>Welcome to SPA Dashboard</h1>

        <p>
            Manage your business with a modern Single Page Application.
            Navigate between pages without refreshing the browser.
        </p>

        <a href="#/dashboard" class="btn">Explore Dashboard</a>
        <div class="cards">

            <div class="card">
                <h2>📊 Dashboard</h2>
                <p>Monitor important business statistics in real time.</p>
            </div>

            <div class="card">
                <h2>📈 Analytics</h2>
                <p>Visualize reports with charts and performance insights.</p>
            </div>

            <div class="card">
                <h2>⚙️ Settings</h2>
                <p>Customize your application preferences and theme.</p>
            </div>

        </div>

    </section>
    `;
}