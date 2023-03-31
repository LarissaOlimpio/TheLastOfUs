import styles from "./Start.module.css";
import Aside from "components/Aside";
import tlou1 from "../../assets/tlou1.jpg";
import tlou2 from "../../assets/tlou2.jpg";
import tlou3 from "../../assets/tlou3.jpg";
import tlou4 from "../../assets/tlou4.jpg";
import tlou5 from "../../assets/tlou5.jpg";
import tlou6 from "../../assets/tlou6.jpg";
import Carousel  from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.css';


function Start() {
  const slides = [tlou1, tlou2, tlou3, tlou4, tlou5, tlou6];

  return (
    <>
      <section className={styles.description}>
       
        <div className={styles.carouselImages}>
        

            <Carousel fade>
            {slides.map((slide)=>(
                 <Carousel.Item interval={1500}>
                    <img src={slide} alt="imagem the last of us" />
                 </Carousel.Item> 
                  ))}
              
            </Carousel>
      
        </div>

       <div className={styles.content}>
              <p>
                The Last of Us é uma série distópica da HBO baseada na franquia
                de jogos de videogame de mesmo nome criada por Neil Druckmann. O
                drama narra um futuro pandêmico que foi devastador para
                humanidade, deixando os seres humanos à beira da extinção.
              </p>
            </div>
      </section>

      <section className={styles.aside}>
        <Aside />
      </section>

      <div></div>
    </>
  );
}
export default Start;
