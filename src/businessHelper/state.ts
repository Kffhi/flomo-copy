import { dayItemType, dayMapType } from '@/types/state'

/**
 * 将热力数据中的次数记录至dayList
 * @param dayList
 * @param heatMap
 */
export function completeDayTimes(dayList: dayItemType[], heatMap: dayMapType): dayItemType[] {
    dayList.forEach(day => {
        const o = heatMap.get(day.date)
        if (o) {
            day.times = o.times
        }
    })
    return dayList
}

export default {
    completeDayTimes
}
