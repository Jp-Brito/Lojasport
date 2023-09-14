import styles from './css/Sidebar.module.css';
import { ShoppingCartSimple } from '@phosphor-icons/react';

export function SideBar({ setCategoria, setPrice, setCor }) {

  function OnClickCagetoria(e) {
    setCategoria(e.target.value)
  }

  function OnClickPrice(e) {
    let valor = e.target.value.split('-')
    setPrice(valor)
  }

  function OnClickCor(e) {
    setCor(e.target.value)
  }

  return (
    <div className={styles.container} >
      <a className={styles.logo} href=""><ShoppingCartSimple size={23} /></a>

      <div className={styles.sideBar}>
        <p>Categoria</p>
        <ul>
          <li><input onClick={(e) => OnClickCagetoria(e)} type="radio" name="categoria" value="all" id='allcar' defaultChecked={true} />Todos</li>
          <li><input onClick={(e) => OnClickCagetoria(e)} type="radio" name="categoria" value="sneakers" id='sneakers' />Sneakers</li>
          <li><input onClick={(e) => OnClickCagetoria(e)} type="radio" name="categoria" value="flats" id='flats' />Flats</li>
          <li><input onClick={(e) => OnClickCagetoria(e)} type="radio" name="categoria" value="sandals" id='sandals' />Sandals</li>
          <li><input onClick={(e) => OnClickCagetoria(e)} type="radio" name="categoria" value="heels" id='heels' />Heels</li>
        </ul>
      </div>

      <div className={styles.sideBar}>
        <p>Preços</p>
        <ul>
          <li><input onClick={(e) => OnClickPrice(e)} type="radio" name="preco" value="0-9999" id='allpri' defaultChecked={true} />Todos</li>
          <li><input onClick={(e) => OnClickPrice(e)} type="radio" name="preco" value="0-50" id='0-50' />R$0-R$50</li>
          <li><input onClick={(e) => OnClickPrice(e)} type="radio" name="preco" value="50-100" id='50-100' />R$50-R$100</li>
          <li><input onClick={(e) => OnClickPrice(e)} type="radio" name="preco" value="100-150" id='100-150' />R$100-R$150</li>
          <li><input onClick={(e) => OnClickPrice(e)} type="radio" name="preco" value="150-9999" id='a150' />Acima R$150</li>
        </ul>
      </div>

      <div className={styles.sideBar}>
        <p>Cores</p>
        <ul>
          <li><input onClick={(e) => OnClickCor(e)} type="radio" name="cor" value="all" id='allcor' defaultChecked={true} />Todas</li>
          <li><input onClick={(e) => OnClickCor(e)} type="radio" name="cor" value="black" id='black' />Black</li>
          <li><input onClick={(e) => OnClickCor(e)} type="radio" name="cor" value="blue" id='blue' />Blue</li>
          <li><input onClick={(e) => OnClickCor(e)} type="radio" name="cor" value="red" id='red' />Red</li>
          <li><input onClick={(e) => OnClickCor(e)} type="radio" name="cor" value="green" id='green' />Green</li>
          <li><input onClick={(e) => OnClickCor(e)} type="radio" name="cor" value="white" id='white' />White</li>
        </ul>
      </div>
    </div >
  )
}