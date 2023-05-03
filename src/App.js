import "./App.css";
import Header from "./components/Header/Header";
import PaintingsList from "./components/PaintingsList/PaintingsList";
import { paintingsList } from "./components/paintingsList";
import { useEffect, useMemo, useState } from "react";
import Footer from "./components/Footer/Footer";

function App() {
  const [cards, setCards] = useState(paintingsList);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    setCards(paintingsList);
  }, []);

  const searchedCards = useMemo(() => {
    if (searchQuery) {
      return cards.filter((card) =>
        card.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return cards;
  }, [searchQuery, cards]);

  return (
    <div className="App">
      <Header
        setCards={setCards}
        cards={cards}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <PaintingsList cards={searchedCards} />
      <Footer />
    </div>
  );
}

export default App;
