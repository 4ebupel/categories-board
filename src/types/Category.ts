export default interface Category {
  id: number;
  depth: number;
  title: string;
  children: Category[];
}