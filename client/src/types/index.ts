export type PropsProduct = {
  id: number,
  name: string,
  price: number,
  image: string
  qnt?: number
};

export type Login =  {
  name: string,
  email: string
}; 

export interface PropsCartReducer {
  products: PropsProduct[] | [],
  isLoadingGetProducts: boolean
}

export interface PropsProductReducer {
  catalog: PropsProduct[] | [],
  isLoadingProducts: boolean
}

export interface PropsProductComponent {
  onAdd: CallableFunction,
  onRemove: CallableFunction,
  product: PropsProduct[]
};
