import './App.less';
import { useState, Fragment } from 'react';
// import Axios from 'axios';
import GlobalStat from './components/GlobalStats';
import { CountriesChart } from './components/CountriesChart';
import SelectKey from './components/SelectKey';
import { useCoronaAPI } from './hooks/useCoronaAPI';
import HistoryChartGroup from './components/HistoryChartGroup';

function App() {
  // const [globalStats, setGlobalStats] = useState({
  //   cases: 0,
  //   deaths: 0,
  //   recovered: 0,
  //   active: 0,
  //   updated: 0,
  // })
    // useEffect(()=> {
  //   const getGlobalStats = async () => {
  //     const {data} = await Axios.get('/api/all')
  //     setGlobalStats(data)
  //   }
  //   getGlobalStats()

  //   const timer = setInterval(getGlobalStats,5000)
  //   return () => {
  //     clearInterval(timer)
  //   }
  // },[])
  // const [country, setCountry] = useState([])
  // useEffect(()=> {
  //   const getCountries = async () => {
  //     const {data} = await Axios.get(`/api/countries?sort=${key}`)
  //     setCountry(data.slice(0,10))
  //   }
  //   getCountries()
  // }, [key])
  const [key, setKey] = useState('cases')
  const [country, setCountry] = useState()
  const globalDataStat =useCoronaAPI('/all',{delay: 5000})
  const countryData = useCoronaAPI(`/countries?sort=${key}`, {cover: (data)=> data.slice(0,10), initData: []})

  const history = useCoronaAPI(`/historical/${country}`,{initData: {},cover: data=> data.timeline})
  console.log(history)
  const onChange = (e:any)=> {
    const {value} = e.target
    setKey(value)
  }
  return (
    <div className="App">
      <h2>COVID-19</h2>
     <GlobalStat stats={globalDataStat}/>
     <div>
       <span>select a key for data</span>
       <SelectKey onChange={onChange}/>
     </div>
     <CountriesChart onClick={(payload:any) => setCountry(payload.activeLabel)} data={countryData} dataKey={key}/>
     {country? (<Fragment>
       <h2>history for {country}</h2>
      <HistoryChartGroup history={history}/>
     </Fragment>): <h2>Click a country o show its detail</h2>}
    </div>
  );
}

export default App;
