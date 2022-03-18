import React from 'react';

const TaskWrapper = (Component: React.FC, taskNumber: number) => function HOC() {
    return (
        <div>
            Homework {taskNumber}
            <div className='task-wrapper'>
                <Component/>
            </div>
        </div>
    );
};

export default TaskWrapper;