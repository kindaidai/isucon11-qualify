import { Trend } from '../../lib/apis'
import { getConditionTime } from '../../lib/date'
import TrendGraph from './TrendGraph'

interface Props {
  trend: Trend
  maxConditionCount: number
}

const getLatestStringTime = (trend: Trend) => {
  let latest: Date | null = null
  for (const c of trend.conditions) {
    if (!latest || latest < c.date) {
      latest = c.date
    }
  }
  if (!latest) {
    return 'no data'
  }
  return getConditionTime(latest)
}

const TrendElement = ({ trend, maxConditionCount }: Props) => {
  return (
    <div className="grid grid-cols-trend p-2">
      <div className="flex flex-col">
        <div>{trend.character}</div>
        <div className="text-secondary">{getLatestStringTime(trend)}</div>
      </div>
      <div className="flex items-center">
        <TrendGraph
          conditions={trend.conditions}
          maxConditionCount={maxConditionCount}
        />
      </div>
    </div>
  )
}

export default TrendElement