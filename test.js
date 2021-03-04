let arr= [2,5,4,8,7,2,1]
arr.sort ((a,b)=> {
  return a == b ? 0 : (a > b ? 1 : -1)
})
console.log(arr)