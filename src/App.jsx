import global from './App.module.css'
import { Header } from './components/Header.jsx'
import { SideBar } from './components/SideBar.jsx'
import { Content } from './components/Content.jsx'
import { data } from "./assets/data.js";
import { useState } from 'react';


function App() {
  const [dataInfo, setDataInfo] = useState(data)

  const [categoria, setCategoria] = useState('all');
  const [price, setPrice] = useState([]);
  const [cor, setCor] = useState('all');

  return (
    <div className={global.container}>
      <SideBar setCategoria={setCategoria} setPrice={setPrice} setCor={setCor} />
      <Header />
      <Content dataInfo={dataInfo} categoria={categoria} price={price} cor={cor} />
    </div>
  )
}

export default App
