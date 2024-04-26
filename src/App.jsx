
import Navbar from "./components/navbar";
import Navgation from "./components/navgation";
import CreateFlashCard from "./components/createFlashCard";
import Faq from "./components/faq";
import RelationFunction from "./components/relationfunction";

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
