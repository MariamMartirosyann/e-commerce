export interface IItemState {
    list: IItem[];
  }

  export interface IItem {
    number: number;
    src: string;
    srcHover: string;
  }
  export interface IState {
    items:IItemState
  }
