import Button from "components/Button";
import TextField from "components/TextField";
import { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    let newProp = form;
    newProp[e.target.name] = e.target.value;
    return setForm({ ...newProp });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className={styles.section}>
      <div className={styles.background}></div>
      <form
        className={styles.form}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
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
            type="text"
            required
            onBlur={(e) => handleChange(e)}
          />

          <TextField
            name="date"
            label="Data"
            placeholder="Data"
            type="date"
            required={false}
            onBlur={(e) => handleChange(e)}
          />

          <TextField
            name="email"
            label="E-mail"
            placeholder="Digite seu email: contato@email.com"
            type="email"
            required
            onBlur={(e) => handleChange(e)}
          />

          <TextField
            name="subject"
            label="assunto"
            placeholder="Digite o assunto "
            type="text"
            required
            onBlur={(e) => handleChange(e)}
          />

          <TextField
            name="message"
            label="Mensagem"
            placeholder="Digite sua mensagem"
            type="text"
            required
            onBlur={(e) => handleChange(e)}
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
