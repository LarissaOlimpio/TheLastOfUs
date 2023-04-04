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

  const submit = (data) => console.log(data);

  return (
    <section className={styles.section}>
      <div className={styles.background}></div>
      <form className={styles.form} onSubmit={submit}>
        <div className={styles.title}>
          <h1>Gostaria de entrar em contato conosco?</h1>
          <h2>
            Preencha os campos abaixo que entraremos em contato assim que
            possível
          </h2>
        </div>

        <div className={styles.textField}>
          <TextField
            name="name"
            label="Nome"
            placeholder="Digite seu nome"
            value={name}
            modify={(value) => setName(value)}
            type="text"
          />

          <TextField
            name="date"
            label="Data"
            placeholder="Data"
            value={date}
            modify={(value) => setDate(value)}
            type="date"
          />

          <TextField
            name="e-mail"
            label="E-mail"
            placeholder="Digite seu email: contato@email.com"
            value={email}
            modify={(value) => setEmail(value)}
            type="text"
          />

          <TextField
            name="topic"
            label="assunto"
            placeholder="Digite o assunto "
            value={topic}
            modify={(value) => setTopic(value)}
            type="text"
          />

          <TextField
            name="mensage"
            label="Mensagem"
            placeholder="Digite sua mensagem"
            value={mensage}
            modify={(value) => setMensage(value)}
            type="text"
          />
        </div>

        <div className={styles.button}>
          <Button>Enviar</Button>
        </div>
      </form>
    </section>
  );
}
export default Contact;
