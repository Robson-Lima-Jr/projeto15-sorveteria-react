import styles from "./Sobre.module.css";
import Image from "next/image";

import Sobre_imagem from "../../../public/sobre-image.jpg";
import Eventos_imagem from "../../../public/eventos-image.jpg";

export default function Sobre() {
    return (
        <main>
            <section className={styles.fundo_banner}>
                <div className={styles.container_base}>
                    <h1>A Gelateria</h1>
                </div>
            </section>

            <section className={styles.sobre_area}>
                <div className={styles.container_base}>
                    <h2>Sobre Nós</h2>

                    <h3>Nós simplesmente amamos sorvete!</h3>

                    <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>

                    <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
                </div>
            </section>

            <section className={styles.imagens_exibidas}>
                <Image src={Sobre_imagem} alt="sobre" className={styles.imagens}></Image>

                <Image src={Eventos_imagem} alt="eventos" className={styles.imagens}></Image>
            </section>
        </main>
    );
}