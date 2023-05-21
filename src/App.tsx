import React, { useState, useEffect } from "react";
import "./App.css";
import Categories from "./types/Categories";
import { Header } from "./components/Header/Header";
import { Canvas } from "./components/Canvas/Canvas";

function App() {
  const [categories, setCategories] = useState<Categories>({
    title: "Categories",
    x: window.innerWidth / 2 - 100,
    y: 200,
    width: 200,
    height: 80,
    children: [],
  });
  const [categoriesAmount, setCategoriesAmount] = useState(-2);

  // In the future, I'll make this hook recalculate the total number of categories
  useEffect(() => {
    setCategoriesAmount((categoriesAmount) => categoriesAmount + 1);
  }, [categories.children]);

  return (
    <div className="App">
      <Header amount={categoriesAmount} />
      <Canvas
        categoriesAmount={categoriesAmount}
        categories={categories}
        setUpperState={setCategories}
      />
    </div>
  );
}

export default App;
