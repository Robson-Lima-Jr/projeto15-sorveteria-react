import styles from "./Sabores.module.css";
import Image from "next/image";

import Oreo from "../../../public/sabor-oreo.png";
import Pistache from "../../../public/sabor-pistache.png";
import Avela from "../../../public/sabor-cookies-avela.png";
import Kiwi from "../../../public/sorbet-kiwi.png";
import Morango from "../../../public/sorbet-morango.png";
import Limao from "../../../public/sorbet-limao.png";

export default function Sabores() {
    return (
        <main >
            <section className={styles.fundo_banner}>
                <div className={styles.container_base}>
                    <h1>Nossos Sabores</h1>
                </div>
            </section>

            <section className={styles.area_sabores}>
                <div className={styles.container_base}>
                    <h2>Sabores de Sorvete</h2>

                    <div className={styles.galeria_sabores}>
                        <div className={styles.sorvetes}>
                            <Image src={Oreo} alt="sorvete oreo" className={styles.sorvetes_img}></Image>

                            <h3>Sorvete de Oreo</h3>

                            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                        </div>

                        <div className={styles.sorvetes}>
                            <Image src={Pistache} alt="sorvete pistache" className={styles.sorvetes_img}></Image>

                            <h3>Sorvete Pistache</h3>

                            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                        </div>

                        <div className={styles.sorvetes}>
                            <Image src={Avela} alt="sorvete avela" className={styles.sorvetes_img}></Image>

                            <h3>Sorvete Cookies & Avelã</h3>

                            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                        </div>

                        <div className={styles.sorvetes}>
                            <Image src={Kiwi} alt="sorvete kiwi" className={styles.sorvetes_img}></Image>

                            <h3>Sorvete de Kiwi</h3>

                            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                        </div>

                        <div className={styles.sorvetes}>
                            <Image src={Morango} alt="sorvete morango" className={styles.sorvetes_img}></Image>

                            <h3>Sorvete de Morango</h3>

                            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                        </div>

                        <div className={styles.sorvetes}>
                            <Image src={Limao} alt="sorvete limao" className={styles.sorvetes_img}></Image>

                            <h3>Sorvete de Limão Siciliano</h3>

                            <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}