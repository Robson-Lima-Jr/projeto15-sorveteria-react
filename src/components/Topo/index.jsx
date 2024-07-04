import styles from "./Topo.module.css";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/logo_menor.png"

export default function Topo() {
    return (
        <header className={styles.fundo_container}>
            <div className={styles.container_base}>
                <Link href="/"><Image src={Logo} alt="logo gelateria" className={styles.logo_img}></Image></Link>

                <nav className={styles.area_links}>
                    <Link href="/" className={styles.link_topo}>Home</Link>
                    <Link href="/Sabores" className={styles.link_topo}>Sabores</Link>
                    <Link href="/Sobre" className={styles.link_topo}>Sobre</Link>
                </nav>
            </div>
        </header>
    );
}