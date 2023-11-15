import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <AppHeader />
      <body className="container d-flex justify-content-center align-items-center vh-100">
        <Home />
      </body>

      <AppFooter />
    </div>
  );
}

export default App;
