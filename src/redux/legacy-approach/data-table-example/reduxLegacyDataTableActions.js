
export const SAVE = "save";
export const REMOVE = "remove";
export const save = (data)=>({type:SAVE, payload: data})
export const remove = (id)=>({type:REMOVE, payload: id})
export const fetchData = ()=>{
    return async (dispatch)=>{
        try {
            const response = await fetch("https://reqres.in/api/users")
            const resData = await response.json()
            console.log("Dispatching")
            dispatch(save(resData.data))
        } catch (error) {
            console.error(error)
        }
    }
}
