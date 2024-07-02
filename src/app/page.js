import styles from "./page.module.css";
import Image from "next/image";

import Banner_sabores from "../../public/banner-sabores.jpg";
import Eventos_imagem from "../../public/eventos-image.jpg";
import Sobre_imagem from "../../public/sobre-image.jpg";


export default function Home() {
  return (
    <main>
      <section className={styles.fundo_banner}>
        <div className={styles.container_base}>
          <h1>Sorvete Artesanal</h1>
        </div>
      </section>

      <section className={styles.sabores_main}>
        <Image src={Banner_sabores} alt="sorvete" className={styles.imagens_config}></Image>

        <div className={styles.container_texto}>
          <h3>Nossos Sabores</h3>

          <h4>Novos e deliciosos</h4>

          <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
        </div>

        <div className={styles.container_texto}>
          <h3>Nossos Eventos</h3>

          <h4>Delicias com sorvete!</h4>

          <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
        </div>

        <Image src={Eventos_imagem} alt="evento sorvete" className={styles.imagens_config}></Image>

        <Image src={Sobre_imagem} alt="sobre" className={styles.imagens_config}></Image>

        <div className={styles.container_texto}>
          <h3>Sobre Nós</h3>

          <h4>Alegria em cada casquinha!</h4>

          <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
        </div>
      </section>
    </main>
  );
}
