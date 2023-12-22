import React from 'react';
import DashOpt from './DashOpt';
import AddTask from './AddTask';

const Dashboard = () => {
    return (
        <div className=' lg:grid grid-cols-3'>
            

            <div className='lg:grid-cols-1'>
                <DashOpt/>
            </div>

            <div className='lg:grid-cols-2'> 
                <AddTask/>
            </div>
        </div>
    );
};

export default Dashboard;