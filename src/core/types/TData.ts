export type TData = {
  name: string;
  id: string;
  image: string;
  bgColor: string;
  tags: string[];
};

export type TSortedData = Map<string, Omit<TData, "tags">[]>;

// export type TSortedData = {
//   [key: string]: Omit<TData, "tags">
// }
