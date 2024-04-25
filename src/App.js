
import './App.css';

function App() {
  return (
    <div className="App">
     <div class="mobile-container">
  <header>
    <section class="hero-banner">
      <div class="logo-wrapper">
        <img src="https://drive.google.com/drive/u/0/folders/17ti6WVisQ0dqhHsJ3mH9AQ6VCZHzS_10" alt="FrameSite."/>
      </div>
      <div class="hero-image"></div>
    </section>
  </header>
  <main>
    <article class="text-info">
      <h2>We're</h2>
      <h2>Coming<br/>Soon</h2>
      <p>Hello everyone! We're thrilled to introduce Framesite, our innovative new software company. Sign up with your email below to receive the latest updates and exclusive launch offers. Let's embark on this exciting journey together!</p>
      <section class = "email-signup">
        <form>
          <input class="email-input" type="email" required placeholder="Email Address" name="email-address"></input>
          <input class="email-submit" value="Go" type="submit" text="Go" for="email-address"></input>
        </form>
      </section>
    </article>
  </main>
</div>
<div class="hero-image-desktop">
  <img src="https://drive.google.com/drive/u/0/folders/17ti6WVisQ0dqhHsJ3mH9AQ6VCZHzS_10" alt="Femail athlete squinting towards the camera."/>
</div>
    </div>
  );
}

export default App;
