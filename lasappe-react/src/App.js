import Home from "./pages/Home";
import './css/app.css';
import Menu from "./components/Menu";
import CategorieAdd from "./pages/CategorieAdd";
import ProduitAdd from "./pages/ProduitAdd";

function App() {
  return (
      <>
          <Menu />
          <Home />
          <CategorieAdd />
          <ProduitAdd />
      </>
    );
}

export default App;
