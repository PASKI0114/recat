import styles from "./Welcome.module.css"
const Welcome = ()=>{
    return(
        <div>
        <h2 className={styles.fg}>Welcome</h2>
        <div className={styles.box}></div>
        </div>
    )
}

export default Welcome;