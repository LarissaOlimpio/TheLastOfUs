import TextField from 'components/TextField'
import { useState } from 'react'
import styles from './Contact.module.css'

function Contact(){

    const [name, setName] = useState('')
    const [mensage, setMensage]=useState('')

    return(
      
            <section>
                <div className={styles.background}></div>
                <form className={styles.form}>
                    <div className={styles.title}>
                        <h1>Gostaria de entrar em contato conosco?</h1>
                        <h2>Preencha os campos abaixo que entraremos em contato assim que possível</h2>
                    </div>
                    <TextField
                    label = "Nome"
                    required= {true}
                    placeholder= "Digite seu nome"
                    value={name}
                    modify= {value => setName(value)}
                    />
                    <TextField
                    label="assunto"
                    required={true}
                    placeholder="Digite o assunto "
                    value={mensage}
                    modify={value => setMensage(value)}/>
                </form>
            </section>
        
    )
}
export default Contact