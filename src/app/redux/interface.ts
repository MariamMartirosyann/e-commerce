export interface IItemState {
    list: IItem[];
  }

  export interface IItem {
    id: number;
    src: string;
    srcHover: string;
    price:number
  }

  export interface ICartItem extends  IItem{
    id:any,
    itemQuantity:number,
    itemPrice:number
  }
  export interface ICartState{
    cartItems:ICartItem [],
    cartTotalQuantity: number,
    cartTotalAmount:number,
  }

  export interface IState {
    items:IItemState,
    cart:ICartState
  }

