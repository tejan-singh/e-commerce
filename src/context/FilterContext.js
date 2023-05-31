// import { useContext, useReducer } from "react";
// import { createContext } from "react";

// export const FilterContext = createContext()

// export const FilterProvider = ({children}) => {



// const initialState = {
//     allCategories:'',
//     allRatings:'',
//     selectedCategory:"",
//     selectedRating:''
// }

// const filterReducer = (state, action) => {
//     switch (action.type){
//         case 'CATEGORY':
//             return {
//                 ...state,
//                 category:state.category=action.payload
                
//             }
//         default:
//             return state    
//     }    
// }

// const [filterState, dispatch] = useReducer(filterReducer, initialState)
// console.log(filterState)
//   return (
//     <FilterContext.Provider value={{filterState,dispatch}}>{children}</FilterContext.Provider>
//   )
// }

