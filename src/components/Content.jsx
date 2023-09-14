import styles from "./css/Content.module.css";
import { AiFillStar, AiFillShopping } from "react-icons/ai";
import { useState } from "react";

export function Content({ dataInfo, categoria, price, cor }) {
  let data = dataInfo
  const [marca, setMarca] = useState('all');

  function OnMarcaClick(e) {
    setMarca(e.target.id);
  }

  const filtrada = data
    .filter((obj) => obj.company === marca || marca === 'all')
    .filter((obj) => obj.category === categoria || categoria === 'all')
    .filter((obj) => obj.newPrice >= +price[0] && obj.newPrice <= +price[1] || price.length === 0)
    .filter((obj) => obj.color === cor || cor === 'all')


  return (
    <div className={styles.containerMain}>
      <div className={styles.marcas}>
        <h4>Recomendados</h4>
        <button onClick={OnMarcaClick} id="all">Todos</button>
        <button onClick={OnMarcaClick} id="Nike">Nike</button>
        <button onClick={OnMarcaClick} id="Adidas">Adidas</button>
        <button onClick={OnMarcaClick} id="Puma">Puma</button>
        <button onClick={OnMarcaClick} id="Vans">Vans</button>
      </div>

      <div className={styles.listitem}>
        {
          filtrada.map((value, index) => (
            <div key={index} className={styles.item} >
              <img src={value.img} />
              <h4 key={index} >{value.title}</h4>
              <span><AiFillStar size={10} /><AiFillStar size={10} /><AiFillStar size={10} /><AiFillStar size={10} /> ({Math.round(Math.random() * 100)} reviews)</span>
              <div className={styles.priced}>
                <div>
                  <strike>R${value.prevPrice}</strike>
                  <span>  {value.newPrice}</span>
                </div>
                <div>
                  <AiFillShopping />
                </div>
              </div>
            </div>
          )
          )}
      </div>
    </div >
  )
}