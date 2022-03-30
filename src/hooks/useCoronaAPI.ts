import React from 'react'
import { useEffect, useState, useCallback} from 'react'
import axios from 'axios'

export  const useCoronaAPI = (path:string, 
  {delay = 0, initData = {}, cover= (data:any)=> data}
  ) => {
  const [data, setData] = useState(initData)
  const coverData = useCallback(cover, [])
  useEffect(()=> {
    const getData = async () => {
      const {data} = await axios.get(`/api${path}`)
      setData(coverData(data))
    }
    getData()
    if(delay) {
      const timer = setInterval(getData, delay)
      return () => {
        clearInterval(timer)
      }
    }
    
  },[path,delay,coverData])

  return data
}
