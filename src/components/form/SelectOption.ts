
export const selectOption = (data:string[]) =>{
const result = data.map(item =>{
    return {
        label: item,
        value: item
    }
})
return result
}