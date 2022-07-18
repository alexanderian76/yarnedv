import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import  Navbar from './NavBar';
import AppRouter from './AppRouter';
import { makeAutoObservable } from 'mobx';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
