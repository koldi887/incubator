import React, { useState } from 'react'
import Affairs from './Affairs'
import { TaskWrapper } from "../../wrapper/index.js";

export type AffairPriorityType = 'high' | 'middle' | 'low'
export type AffairType = { _id: number, name: string, priority: FilterType }
export type FilterType = 'all' | AffairPriorityType

const defaultAffairs: AffairType[] = [
    { _id: 1, name: 'React', priority: 'high' },
    { _id: 2, name: 'anime', priority: 'low' },
    { _id: 3, name: 'games', priority: 'low' },
    { _id: 4, name: 'work', priority: 'high' },
    { _id: 5, name: 'html & css', priority: 'middle' },
]

export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
    if (filter === 'all') return affairs
    else return affairs.filter(item => item.priority === filter)
}

export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
    return affairs.filter(item => item._id !== _id)
}

function HW2() {
    const [ affairs, setAffairs ] = useState<AffairType[]>(defaultAffairs)
    const [ filter, setFilter ] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <>
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
        </>
    )
}

export default TaskWrapper(HW2, 2)