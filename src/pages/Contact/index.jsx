import styles from "./Contact.module.css";
import Form from "components/Form";

function Contact() {
  return (
    <section className={styles.section}>
      <div className={styles.background}></div>
      <div className={styles.title}>
        <h1>Gostaria de entrar em contato conosco?</h1>
        <h2>
          Preencha os campos abaixo que entraremos em contato assim que possível
        </h2>
      </div>

      <Form />
    </section>
  );
}
export default Contact;
