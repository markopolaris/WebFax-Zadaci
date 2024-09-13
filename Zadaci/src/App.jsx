import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import { Button, Flex } from 'antd';

// Komponente
import Zadaci from './Zadaci';
import MiniProjekti from './MiniProjekti';
import Projekti from './Projekti';

// Zadaci (useState)
import BrojacKlikova from './zadaci/useState/BrojacKlikova';
import ToggleText from './zadaci/useState/ToggleText';
import DinamickiUnosTeksta from './zadaci/useState/DinamickiUnosTeksta';
import TaskLista from './zadaci/useState/TaskLista';
import JednostavniKalkulator from './zadaci/useState/JednostavniKalkulator';
import Glasanje from './zadaci/useState/Glasanje';

// Mini projekti
import Budget from './mini projekti/Budzet Aplikacija/Budget';

// Zadaci (useEffect)
import ResetovanjeBrojaca from './zadaci/useEffect/ResetovanjeBrojaca';
import TrenutnoVreme from './zadaci/useEffect/TrenutnoVreme';
import UcitavanjePodatakaKasnjenje from './zadaci/useEffect/UcitavanjePodatakaKasnjenje';
import PracenjePromeneUUnusu from './zadaci/useEffect/PracenjePromeneUnosu';
import Sinhronizacija from './zadaci/useEffect/SinhronizacijaSaSpoljnimApiem';

// Mini projekti
import ProductList from './mini projekti/Proizvodi/ProductList';
import UserList from './mini projekti/Korisnici/UserList';

// Zadaci (useReducer)
import UseReducerBrojac from './zadaci/useReducer/UseReducerBrojac';
import VisestrukiTajmer from './zadaci/useReducer/VisestrukiTajmer';
import SlozenaForma from './zadaci/useReducer/SlozenaForma';

// Mini projekti
import WeatherApp from './mini projekti/Vremenska Prognoza/WeatherApp';

// Zadaci (localStorage)
import NameSaver from './zadaci/localStorage/NameSaver';
import TodoLocalStorage from './zadaci/localStorage/ToDoLocalStorage';

// Zadaci (sessionStorage)
import PageVisits from './zadaci/sessionStorage/PageVisits';

// Zadaci (useContext)
import Prevod from './zadaci/useContext/Prevod';

// Zadaci (Redux)
import UpravljanjeProfilom from './zadaci/redux/Upravljanje Profilom/UpravljanjeProfilom';

function App() {
  return (
    <Router>
      <div>
        <nav className='mt-10'>
          <Flex horizontal gap="small" style={{ width: '100%', justifyContent: 'center' }}>
            <NavLink to="/zadaci" activeClassName="active-link">
              <Button type="primary" block>Zadaci</Button>
            </NavLink>
            <NavLink to="/mini-projekti" activeClassName="active-link">
              <Button type="primary" block>Mini Projekti</Button>
            </NavLink>
            <NavLink to="/projekti" activeClassName="active-link">
              <Button type="primary" block>Projekti</Button>
            </NavLink>
          </Flex>
        </nav>

        <Routes>
          <Route path="/zadaci" element={<Zadaci />} />
          <Route path="/mini-projekti" element={<MiniProjekti />} />
          <Route path="/projekti" element={<Projekti />} />

          {/* Zadaci - useState */}
          <Route path="/brojac-klikova" element={<BrojacKlikova />} />
          <Route path="/toggle-text" element={<ToggleText />} />
          <Route path="/dinamicki-unos-teksta" element={<DinamickiUnosTeksta />} />
          <Route path="/task-lista" element={<TaskLista />} />
          <Route path="/jednostavni-kalkulator" element={<JednostavniKalkulator />} />
          <Route path="/glasanje" element={<Glasanje />} />

          {/* Mini projekti */}
          <Route path="/budget" element={<Budget />} />

          {/* Zadaci - useEffect */}
          <Route path="/resetovanje-brojaca" element={<ResetovanjeBrojaca />} />
          <Route path="/trenutno-vreme" element={<TrenutnoVreme />} />
          <Route path="/ucitavanje-podataka-kasnjenje" element={<UcitavanjePodatakaKasnjenje />} />
          <Route path="/pracenje-promena-u-unusu" element={<PracenjePromeneUUnusu />} />
          <Route path="/sinhronizacija" element={<Sinhronizacija />} />

          {/* Mini projekti */}
          <Route path="/produkti" element={<ProductList />} />
          <Route path="/korisnicka-lista" element={<UserList />} />

          {/* Zadaci - useReducer */}
          <Route path="/use-reducer-brojac" element={<UseReducerBrojac />} />
          <Route path="/visestruki-tajmer" element={<VisestrukiTajmer />} />
          <Route path="/slozena-forma" element={<SlozenaForma />} />

          {/* Mini projekti */}
          <Route path="/weather-app" element={<WeatherApp />} />

          {/* Zadaci - localStorage */}
          <Route path="/name-saver" element={<NameSaver />} />
          <Route path="/todo-local-storage" element={<TodoLocalStorage />} />

          {/* Zadaci - sessionStorage */}
          <Route path="/page-visits" element={<PageVisits />} />

          {/* Zadaci - useContext */}
          <Route path="/prevod" element={<Prevod />} />

          {/* Zadaci - Redux */}
          <Route path="/upravljanje-profilom" element={<UpravljanjeProfilom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
