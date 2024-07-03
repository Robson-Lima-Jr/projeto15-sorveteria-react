import styles from "./Rodape.module.css";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/logo.png"

export default function Rodape() {
    return (
        <footer className={styles.fundo_footer}>
            <div className={styles.container_base}>
                <Link href="/"><Image src={Logo} alt="logo gelateria" className={styles.logo_img}></Image></Link>

                <div className={styles.footer_dados}>
                    <h5>Endereço</h5>

                    <p>Av Bernadino Campos</p>

                    <p>Número: 98</p>

                    <p>São Paulo, SP 12345-678</p>
                </div>

                <div className={styles.footer_dados}>
                    <h5>Contato</h5>

                    <p>info@meusite.com</p>

                    <p>Tel: (11) 3456-7890</p>
                </div>

                <div className={styles.footer_dados}>
                    <h5>Horários</h5>

                    <p>ABERTO TODOS OS DIAS</p>

                    <p>10:00 - 22:00</p>
                </div>
            </div>

            <div className={styles.direitos_autorais}>
                <p>Gelateria.</p>

                <p>Desenvolvido por <Link href="https://github.com/Robson-Lima-Jr/projeto15-sorveteria-react" target="_blank" className={styles.desenvolvedor}>Robson Junior</Link></p>

                <p>Projeto <Link href="https://www.devmedia.com.br/" target="_blank" className={styles.devMedia}>DevMedia</Link></p>
            </div>
        </footer>
    );
};