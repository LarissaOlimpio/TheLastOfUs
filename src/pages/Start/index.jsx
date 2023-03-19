import styles from "./Start.module.css";

import Aside from "components/Aside";

function Start() {
  return (
    <>
      <section className={styles.description}>
        <div className={styles.carouselImages}>
          <img className={styles.imageAtiva} src="/assets/tlou-1.jpg" alt="" />
          <img className={styles.image} src="/assets/tlou-2.jpg" alt="" />
          <img className={styles.image} src="/assets/tlou-3.jpg" alt="" />
          <img className={styles.image} src="/assets/tlou-4.jpg" alt="" />
          <img className={styles.image} src="/assets/tlou-5.jpg" alt="" />
          <img className={styles.image} src="/assets/tlou-6.jpg" alt="" />
        </div>

        <div className={styles.content}>
          <p>
            The Last of Us é uma série distópica da HBO baseada na franquia de
            jogos de videogame de mesmo nome criada por Neil Druckmann. O drama
            narra um futuro pandêmico que foi devastador para humanidade,
            deixando os seres humanos à beira da extinção.
          </p>
        </div>

        <div className={styles.carouselButton}>
          <button className={styles.button}></button>
          <button className={styles.button}></button>
          <button className={styles.button}></button>
          <button className={styles.button}></button>
          <button className={styles.button}></button>
          <button className={styles.button}></button>
          
        </div>

      </section>

      <section className={styles.aside}>
        <Aside />
      </section>
    </>
  );
}
export default Start;
