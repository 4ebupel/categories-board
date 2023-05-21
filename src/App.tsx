import React, { useState, useEffect } from "react";
import "./App.css";
import Categories from "./types/Categories";
import { Header } from "./components/Header/Header";
import { Canvas } from "./components/Canvas/Canvas";

function App() {
  const [categories, setCategories] = useState<Categories>({
    title: "",
    children: [],
  });
  const [categoriesAmount, setCategoriesAmount] = useState(0);

  // In the future, I'll make this hook recalculate the total number of categories
  useEffect(() => {}, [categories]);

  return (
    <div className="App">
      <Header amount={categoriesAmount} />
      <div className="container__canvas">
        <Canvas />
      </div>
    </div>
  );
}

export default App;
