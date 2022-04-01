export type PropsProduct = {
  id: number,
  name: string,
  price: string,
  img: string
};

export type Login =  {
  name: string,
  email: string
}; 

export interface PropsProductComponent {
  add: CallableFunction,
  products: PropsProduct[]
};
