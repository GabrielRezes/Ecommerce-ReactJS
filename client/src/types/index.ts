export type PropsProduct = {
  id: number,
  name: string,
  price: string,
  img: string
  qnt?: number
};

export type Login =  {
  name: string,
  email: string
}; 

export type Cart = {
  cart: PropsProduct[] | any
}

export interface PropsProductComponent {
  onAdd: CallableFunction,
  onRemove: CallableFunction,
  products: PropsProduct[]
};
