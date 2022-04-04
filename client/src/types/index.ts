export type PropsProduct = {
  id: number,
  name: string,
  price: string,
  img: string
  qnt?: number;
};

export type Login =  {
  name: string,
  email: string
}; 

export interface PropsProductComponent {
  add: CallableFunction,
  products: PropsProduct[]
};
