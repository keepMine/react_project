export const formatHistoryData = (data = {}) => {
  // Object.entries 返回一个对象的键值对数组组成的数组
  return Object.entries(data).map(item => {
    const [time, number] = item
    return {time, number}
  })
}