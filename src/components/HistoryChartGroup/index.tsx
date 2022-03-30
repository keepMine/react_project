import React, { useState } from 'react'
import HistoryChart from '../HistoryChart'
import './index.less'
import { formatHistoryData } from '../../utils/formatData'
export default function HistoryChartGroup({history: {cases,deaths,recovered}}:any) {
  const [lastDays, setLastDays] = useState({
    cases: 30,
    deaths: 30,
    recovered: 30,
  })

  const onLastDaysChange = (e: any, key: string) => {
    setLastDays((pre) => ({
      ...pre,
      [key]: e.target.value
    }))
  }
  return (
    <div className='group-box'>
       <HistoryChart
        title='Cases'
        data={formatHistoryData(cases)}
        lastDays={lastDays.cases}
        onLastDaysChange={(e:any) => onLastDaysChange(e, "cases")}
      />
      <HistoryChart
        title='Deaths'
        data={formatHistoryData(deaths)}
        lastDays={lastDays.deaths}
        onLastDaysChange={(e:any) => onLastDaysChange(e, "deaths")}
      />
      <HistoryChart
        title='Recovered'
        data={formatHistoryData(recovered)}
        lastDays={lastDays.recovered}
        onLastDaysChange={(e:any) => onLastDaysChange(e, "recovered")}
      />
    </div>
  )
}
