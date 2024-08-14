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

    <div className='w-1/2 mx-auto mt-6'>
        <Link to="/produkti"><Button type="primary" block>Lista Proizvoda</Button></Link>
    </div>

    <div className='w-1/2 mx-auto mt-6'>
        <Link to="/korisnicka-lista"><Button type="primary" block>Lista Korisnika</Button></Link>
    </div>

    <div className='w-1/2 mx-auto mt-6'>
        <Link to="/weather-app"><Button type="primary" block>Vremenska Prognoza</Button></Link>
    </div>
</>
);
}

export default MiniProjekti;