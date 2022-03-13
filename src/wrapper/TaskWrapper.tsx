import React from 'react';

const TaskWrapper = (Component: React.FC, task: number) => function HOC() {
    return (
        <div>
            Homework {task}
            <div className='task-wrapper'>
                <Component/>
            </div>
        </div>
    );
};

export default TaskWrapper;