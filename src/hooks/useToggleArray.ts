export interface useToggleArrayProps  {
    arr : Array<any>,
    item : any,
    callback : (item : any)=> void 
}

const removeAtIndex = (arr:any, index:any) => {
  const copy = [...arr];
  copy.splice(index, 1);
  return copy;
};

export const useToggleArray= ( 
    arr : any, 
    item : any, 
    callback   : any
  )=> { 
  const index = arr.findIndex((i: any) => callback(i) === callback(item));
  if (index === -1) return [...arr, item];
  return removeAtIndex(arr, index);
};
