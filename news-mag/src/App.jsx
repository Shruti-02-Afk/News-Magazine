import "./App.css";
import { useState } from "react";
import NavBar from "./Components/NavBar";
import NewsBoard from "./Components/NewsBoard";
import NewsItem from "./Components/NewsItem";


const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <NavBar setCategory={setCategory} />
      <NewsBoard category={category}/>
      
    </div>
  );
}

export default App;
