import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="container">
          <h1 className="welcome-title">
            Welcome to My React App
          </h1>
          <p className="welcome-subtitle">
            Built with Vite ⚡ and deployed with GitHub Actions
          </p>
          <div className="features">
            <div className="feature-card">
              <h3>⚡ Lightning Fast</h3>
              <p>Powered by Vite for instant dev server startup</p>
            </div>
            <div className="feature-card">
              <h3>🚀 Auto Deploy</h3>
              <p>CI/CD pipeline with GitHub Actions</p>
            </div>
            <div className="feature-card">
              <h3>📱 Modern React</h3>
              <p>Latest React features and best practices</p>
            </div>
          </div>
          <div className="cta-section">
            <button className="cta-button" onClick={() => alert('Welcome to the app!')}>
              Get Started
            </button>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;