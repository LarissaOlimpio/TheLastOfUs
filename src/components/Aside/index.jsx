import logoGitHub from './logoGitHub.svg'
import logoLinkedin from './logoLinkedin.svg'
import styles from './Aside.module.css'
function Aside(){
    return(
        <aside className={styles.aside}>
            <ul>
                <li>
                    <a href="https://github.com/LarissaOlimpio" target="_blank" rel="noreferrer"><img src={logoGitHub} alt="Logo GitHub" /></a>
                </li>
                
                <li>
                    <a href="https://www.linkedin.com/in/larissaolimpio/" target="_bla
                    " rel="noreferrer"><img src={logoLinkedin} alt="Logo Linkedin" /></a>
                </li>
            </ul>
    </aside>
    )
}
export default Aside
