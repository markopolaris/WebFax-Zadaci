import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

function Zadaci() {
return (
<div className="pb-20">
    <div className='flex justify-center'>
        <p className='font-bold text-3xl mt-20'>Zadaci</p>
    </div>

    <p className='text-center mt-20 text-xl font-medium'>USESTATE</p>
    <div className='w-1/2 mx-auto mt-6'>
        <Link to="/brojac-klikova"><Button type="primary" block>Brojac Klikova</Button></Link>
    </div>

    <div className='w-1/2 mx-auto mt-6'>
        <Link to="/toggle-text"><Button type="primary" block>Toggle Text</Button></Link>
    </div>

    <div className='w-1/2 mx-auto mt-6'>
        <Link to="/dinamicki-unos-teksta"><Button type="primary" block>Dinamicki Unos Teksta</Button></Link>
    </div>

    <div className='w-1/2 mx-auto mt-6'>
        <Link to="/task-lista"><Button type="primary" block>Mini Task Lista</Button></Link>
    </div>

    <div className='w-1/2 mx-auto mt-6'>
        <Link to="/jednostavni-kalkulator"><Button type="primary" block>Jednostavni Kalkulator</Button></Link>
    </div>

    <div className='w-1/2 mx-auto mt-6'>
        <Link to="/Glasanje"><Button type="primary" block>Glasanje</Button></Link>
    </div>

    <p className='text-center mt-20 text-xl font-medium'>USEEFFECT</p>

    <div className='w-1/2 mx-auto mt-6'>
        <Link to="/resetovanje-brojaca"><Button type="primary" block>Resetovanje Brojaca</Button></Link>
    </div>

    <div className='w-1/2 mx-auto mt-6'>
        <Link to="/trenutno-vreme"><Button type="primary" block>Trenutno Vreme</Button></Link>
    </div>

    <div className='w-1/2 mx-auto mt-6'>
        <Link to="/ucitavanje-podataka-kasnjenje"><Button type="primary" block>Ucitavanje Podataka Sa Kasnjenjem</Button></Link>
    </div>

    <div className='w-1/2 mx-auto mt-6'>
        <Link to="/pracenje-promena-u-unusu"><Button type="primary" block>Pracenje Promena U Unusu</Button></Link>
    </div>

    <div className='w-1/2 mx-auto mt-6'>
        <Link to="/sinhronizacija"><Button type="primary" block>Pracenje Promena U Unusu</Button></Link>
    </div>

    <p className='text-center mt-20 text-xl font-medium'>USEREDUCER</p>

    <div className='w-1/2 mx-auto mt-6'>
        <Link to="/use-reducer-brojac"><Button type="primary" block>Brojac</Button></Link>
    </div>

    <div className='w-1/2 mx-auto mt-6'>
        <Link to="/visestruki-tajmer"><Button type="primary" block>Visestruki Tajmer</Button></Link>
    </div>

    <div className='w-1/2 mx-auto mt-6'>
        <Link to="/slozena-forma"><Button type="primary" block>Slozena Forma Za Registraciju</Button></Link>
    </div>

    <p className='text-center mt-20 text-xl font-medium'>LOCALSTORAGE</p>

    <div className='w-1/2 mx-auto mt-6'>
        <Link to="/name-saver"><Button type="primary" block>Name Saver</Button></Link>
    </div>

    <div className='w-1/2 mx-auto mt-6'>
        <Link to="/todo-local-storage"><Button type="primary" block>To-Do Lista LS</Button></Link>
    </div>

    <p className='text-center mt-20 text-xl font-medium'>SESSIONSTORAGE</p>

    <div className='w-1/2 mx-auto mt-6'>
        <Link to="/page-visits"><Button type="primary" block>Brojac Poseta Na Stranici</Button></Link>
    </div>

    <p className='text-center mt-20 text-xl font-medium'>USECONTEXT</p>

    <div className='w-1/2 mx-auto mt-6'>
        <Link to="/prevod"><Button type="primary" block>Prevod</Button></Link>
    </div>

    <p className='text-center mt-20 text-xl font-medium'>REDUX</p>

    <div className='w-1/2 mx-auto mt-6'>
        <Link to="/upravljanje-profilom"><Button type="primary" block>Upravljanje Profilom</Button></Link>
    </div>

    <p className='text-center mt-20 text-xl font-medium'>TAILWIND CSS</p>

</div>
);
}

export default Zadaci;