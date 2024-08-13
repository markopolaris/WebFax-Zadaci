import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Button, Flex } from 'antd';
import Zadaci from './Zadaci';
import MiniProjekti from './MiniProjekti';
import Projekti from './Projekti'
import BrojacKlikova from './zadaci/useState/BrojacKlikova';
import ToggleText from './zadaci/useState/ToggleText';
import DinamickiUnosTeksta from './zadaci/useState/DinamickiUnosTeksta';
import TaskLista from './zadaci/useState/TaskLista';
import JednostavniKalkulator from './zadaci/useState/JednostavniKalkulator';
import Glasanje from './zadaci/useState/Glasanje';
import Budget from './mini projekti/useState/Budzet Aplikacija/Budget';
import ResetovanjeBrojaca from './zadaci/useEffect/ResetovanjeBrojaca';
import TrenutnoVreme from './zadaci/useEffect/TrenutnoVreme'
import UcitavanjePodatakaKasnjenje from './zadaci/useEffect/UcitavanjePodatakaKasnjenje'
import PracenjePromeneUUnusu from './zadaci/useEffect/PracenjePromeneUnosu';

function App() {
return (
<Router>
  <div>

    <nav className='mt-10'>
      <Flex hroizontal gap="small" style={{ width: '100%', justifyContent: 'center' }}>
        <Link to="/zadaci"><Button type="primary" block>Zadaci</Button></Link>
        <Link to="/mini-projekti"><Button type="primary" block>Mini Projekti</Button></Link>
        <Link to="/projekti"><Button type="primary" block>Projekti</Button></Link>
      </Flex>
    </nav>

    <Routes>
      <Route path="/zadaci" element={<Zadaci />} />
      <Route path="/mini-projekti" element={<MiniProjekti />} />
      <Route path="/projekti" element={<Projekti />} />
      <Route path="/brojac-klikova" element={<BrojacKlikova />} />
      <Route path="/toggle-text" element={<ToggleText />} />
      <Route path="/dinamicki-unos-teksta" element={<DinamickiUnosTeksta />} />
      <Route path="/task-lista" element={<TaskLista />} />
      <Route path="/jednostavni-kalkulator" element={<JednostavniKalkulator />} />
      <Route path="/glasanje" element={<Glasanje />} />
      <Route path="/budget" element={<Budget />} />

      <Route path="/resetovanje-brojaca" element={<ResetovanjeBrojaca />} />
      <Route path="/trenutno-vreme" element={<TrenutnoVreme />} />
      <Route path="/ucitavanje-podataka-kasnjenje" element={<UcitavanjePodatakaKasnjenje />} />
      <Route path="/pracenje-promena-u-unusu" element={<PracenjePromeneUUnusu />} />

    </Routes>
  </div>
</Router>
);
}

export default App;