import './App.css';
import { Header } from './components/Header';
import SimpleBottomNavigation from './components/Navigation';
import { Backlog } from './components/Backlog';
import { Played } from './components/Played';
import { Search } from './components/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProviderGlobal } from './globals/GlobalContext';

function App() {
  return (
    <ProviderGlobal>
      <BrowserRouter>
        <Header></Header>

        <div className="appPage">
            <Routes>
              <Route path='/backlog' element={<Backlog></Backlog>} exact></Route>
              <Route path='/' element={<Search></Search>} exact></Route>
              <Route path='/played' element={<Played></Played>} exact></Route>
            </Routes>

        </div>
      
        <SimpleBottomNavigation></SimpleBottomNavigation>
      </BrowserRouter>
    </ProviderGlobal>
  );
}

export default App;
