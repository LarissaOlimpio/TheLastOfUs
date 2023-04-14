import styles from "./Button.module.css";
function Button({ children }) {
  return ( 
    <div className={styles.divButton}>
        <button className={styles.button}>{children}</button>
    </div>
  )
 
}
export default Button;
