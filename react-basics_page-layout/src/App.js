import "./Header.css"; // Import CSS file for Header component
import "./MainContent.css"; // Import CSS file for MainContent component
import "./Footer.css"; // Import CSS file for Footer component
import logo from "./img/weddingplannerlogo.jpeg";
function Header() {
  // Implement your JSX code here
  return (
    <header className="header">
      <nav>
        <img src={logo} alt="logo" />
      </nav>
      <nav>Home</nav>
      <nav>Portfolio</nav>
      <nav>Packages</nav>
      <nav>Contact</nav>
    </header>
  );
}

function MainContent(props) {
  // Implement your JSX code here

  return (
    <main className="main-content">
      <span>{props.content}</span> <span>{props.anniversary}</span>
    </main>
  );
}

function Footer() {
  // Implement your JSX code here
  return <footer className="footer">Footer</footer>;
}

function App() {
  // Render components within App
  return (
    <div>
      <Header />
      <MainContent anniversary="anniversary" content=" wedding" />
      <Footer />
    </div>
  );
}

export default App;
