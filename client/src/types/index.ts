export type PropsProduct = {
  id: number,
  name: string,
  price: string,
  img: string
};

export interface PropsProductComponent {
  add: CallableFunction,
  products: PropsProduct[]
};