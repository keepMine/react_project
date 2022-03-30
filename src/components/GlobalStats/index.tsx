
import React from "react";
import './index.less';
interface StatType {
  number: number,
  color: string,
}
const Stat = ({number, color}: StatType) => {
  return <span style={{color: color, fontWeight: 'bold'}}>{number}</span>
}

const GlobalStat = ({stats}:any) => {
  const {cases, deaths, recovered, active, updated} = stats
  return (
    <div className="header">
      <small>update on {new Date(updated).toLocaleString()}</small>
      <table>
        <thead>
        <tr>
          <td>
            Cases: <Stat number={cases} color='red'/>
          </td>
          <td>
            Deaths: <Stat number={deaths} color='gray'/>
          </td>
         <td>
            Recovered: <Stat number={recovered} color='green'/>
          </td>
          <td>
          Active: <Stat number={active} color='orange'/>
          </td>
        </tr>
        </thead>
      </table>
    </div>
  )
}

export default GlobalStat