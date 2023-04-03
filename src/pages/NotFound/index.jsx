import styles from "./NotFound.module.css";
function NotFound() {
  return (
    <section >
      <div className={styles.background}></div>
      <div className={styles.divErrorMensage}>
        <span>Erro 404</span>
        <h1>Página Não encontrada.</h1>
        <p>Tem certeza de que era isso que estava procurando?</p>
        <p>
          Aguarde uns instantes e recarregue a página, ou volte para a página
          inicial.
        </p>
      </div>
    </section>
  );
}
export default NotFound;
