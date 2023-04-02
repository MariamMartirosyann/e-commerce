export interface IItemState {
    list: IItem[];
  }

  export interface IItem {
    //id:string,
    number: number;
    src: string;
    srcHover: string;
  }

  export interface ICartItem{
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

