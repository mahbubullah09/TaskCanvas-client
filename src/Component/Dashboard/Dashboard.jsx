import React from 'react';
import DashOpt from './DashOpt';
import AddTask from './AddTask';

const Dashboard = () => {
    return (
        <div className='flex flex-col lg:flex-row'>
            

            <div>
                <DashOpt/>
            </div>

            <div >
                <AddTask/>
            </div>
        </div>
    );
};

export default Dashboard;