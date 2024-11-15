// Types
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export const increment = (incBy) => ({type:INCREMENT, payload: incBy})
export const decrement = (decBy) => ({type:DECREMENT, payload: decBy})
export const reset = () => ({type:RESET})