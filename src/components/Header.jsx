import styles from './css/Header.module.css'
import { Heart, ShoppingCart, User } from '@phosphor-icons/react'

export function Header() {
  return (
    <div className={styles.containerHeader}>
      <div className={styles.headerBusca}>
        <input type="text" name="search" id="search" placeholder="Buscar" />
      </div>

      <div className={styles.icons}>
        <a href="#"><Heart size={20} className={styles.icons} /></a>
        <a href="#"><ShoppingCart size={20} className={styles.icons} /></a>
        <a href="#"><User size={20} className={styles.icons} /></a>
      </div>
    </div>
  )
}