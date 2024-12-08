import './404page.css'
function PageNotFound() {
 

    return (
        <div className="not-found-container">
        <header className="not-found-header">
          <h1>404</h1>
          <p>Oops! The page you're looking for does not exist.</p>
        </header>
  
        <section className="not-found-content">
          <h2>Sorry!</h2>
          <p>It seems you've hit a dead end. You can return to the home page or explore our other pages.</p>
          <a href="/home" className="home-link">Go back to Home Page</a>
        </section>
      </div>
    )
  }
  
  export default PageNotFound