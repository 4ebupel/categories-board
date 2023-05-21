import Category from "./Category";

export default interface Categories {
  title: string;
  x: number; 
  y: number;
  width: number;
  height: number;
  children: Category[];
}