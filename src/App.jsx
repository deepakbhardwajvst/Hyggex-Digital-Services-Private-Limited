
import Navbar from "./components/navbar.jsx";
import Navgation from "./components/navgation.jsx";
import CreateFlashCard from "./components/createFlashCard.jsx";
import Faq from "./components/faq.jsx";
import RelationFunction from "./components/relationfunction.jsx";

const App = () => {
  return (
    <div className="container m-auto px-10">
      <Navbar />
      <Navgation />
      <RelationFunction />
      <CreateFlashCard />
      <Faq />
    </div>
  );
};

export default App;
