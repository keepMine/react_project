import { Test } from "../constants"
const initState = 0
export default  function testReducer(preState = initState, action: {type: string, data: any}){
  const {type, data} = action
  switch (type) {
    case Test.TEST:
      return data
  
    default:
      return preState
  }
}