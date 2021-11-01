import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container">
      <Header title="The Job Board" />
      <Jobs />
      <Footer tech="React" school="Le Reacteur" author="Axel Catois" />
    </div>
  );
};

export default App;
