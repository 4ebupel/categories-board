import React, { useState, useEffect } from "react";
import "./App.css";
import Categories from "./types/Categories";
import { Header } from "./components/Header";

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
    </div>
  );
}

export default App;
