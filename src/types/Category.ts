export default interface Category {
  id: number;
  depth: number;
  title: string;
  x: number; 
  y: number;
  width: number;
  height: number;
  children: Category[];
}