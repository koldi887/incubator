import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function HW10() {
    // useSelector, useDispatch
    const loading = false

    const setLoading = () => {
        // dispatch
        // setTimeout
        console.log('loading...')
    };

    return (
        <div>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
        </div>
    )
}

export default HW10
