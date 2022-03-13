import React, { useState } from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { restoreState, saveState } from './localStorage/localStorage'
import { TaskWrapper } from "../../wrapper/index.js";

function HW6() {
    const [ value, setValue ] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        // setValue()
    }

    return (
        <>
            {/*should work (должно работать)*/}
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{ children: value ? undefined : 'enter text...' }}
                />
            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>
        </>
    )
}

export default TaskWrapper(HW6, 6)
