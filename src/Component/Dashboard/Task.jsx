import React from 'react';

const Task = () => {
    return (
        <div className='flex gap-6 justify-around mx-10 '>
            <div className='bg-slate-800 text-white w-1/3 min-h-20 '>
                <h2>To do</h2>

            </div>
            <div className='bg-slate-800 text-white w-1/3 '>
                <h2>To do</h2>

            </div>
            <div className='bg-slate-800 text-white w-1/3 '>
                <h2>To do</h2>

            </div>
        </div>
    );
};

export default Task;