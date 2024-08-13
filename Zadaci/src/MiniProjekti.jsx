import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

function MiniProjekti() {
return (
<>
    <div className='flex justify-center'>
        <p className='font-bold text-3xl mt-20'>Mini Projekti</p>
    </div>

    <div className='w-1/2 mx-auto mt-6'>
        <Link to="/budget"><Button type="primary" block>Budget</Button></Link>
    </div>
</>
);
}

export default MiniProjekti;