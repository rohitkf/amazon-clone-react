import img from "../assets/images/prod1.jpg";

export const getBasketTotal = basket=> basket?.reduce((amount,item)=>item.price+amount,0);


export const initialState = {
  basket: [
    {
      id: 1,
      title: "hello1",
      price: 345,
      rating: 4,
      image: img,
    },
    {
        id: 2,
        title: "hello2",
        price: 345,
        rating: 4,
        image: img,
      }
  ],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
        let newBasket = [...state.basket]
        const index = state.basket.findIndex(basketItem=>basketItem.id===action.id)
        if(index>=0) {newBasket.splice(index,1)
        console.log(newBasket)}
        else console.warn(`cant remove (id:${action.id})`)
        
        return {...state,basket: newBasket}
    default:
      return state;
  }
};

export default reducer;
