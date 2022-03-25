import { Test } from "../constants"

// 定义test action
// Todo: 对 data类型的详细定义
export const testAction = (data:any) => {
  return {
    type: Test.TEST,
    data,
  }
}