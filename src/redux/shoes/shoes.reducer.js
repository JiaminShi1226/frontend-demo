import ShoeActionType from "./shoes.types";

export const INITIAL_SHOE_STATE = {
  allShoes: [],
};

const shoeReducer = (state = INITIAL_SHOE_STATE, action) => {
 console.log("SHOEREDUCER IS HANDLING FETCH ALL SHOES ACTION");
  switch (action.type) {
   case ShoeActionType.FETCH_ALL_SHOES:
    return { ...state, allShoes: action.payload };
  
   default:
      return state;
  }
};

export default shoeReducer;