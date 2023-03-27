import Button from "components/Button";
import TextField from "components/TextField";
import { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [mensage, setMensage] = useState("");

  return (
    <section className={styles.section}>
      <div className={styles.background}></div>
      <form className={styles.form}>
        <div className={styles.title}>
          <h1>Gostaria de entrar em contato conosco?</h1>
          <h2>
            Preencha os campos abaixo que entraremos em contato assim que
            possível
          </h2>
        </div>

        <TextField
          label="Nome"
          required={true}
          placeholder="Digite seu nome"
          value={name}
          modify={(value) => setName(value)}
        />

        <TextField
          label="Data"
          required
          placeholder="Data"
          value={date}
          modify={(value) => setDate(value)}
        />

        <TextField
          label="E-mail"
          required
          placeholder="Digite seu email: contato@email.com"
          value={email}
          modify={(value) => setEmail(value)}
        />

        <TextField
          label="assunto"
          required
          placeholder="Digite o assunto "
          value={topic}
          modify={(value) => setTopic(value)}
        />

        <TextField
          label="Mensagem"
          required
          placeholder="Digite sua mensagem"
          value={mensage}
          modify={(value) => setMensage(value)}
        />

        <div className={styles.button}>
          <Button>Enviar</Button>
        </div>
      </form>
    </section>
  );
}
export default Contact;
