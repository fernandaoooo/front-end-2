// import Image from "next/image";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const nome = "Fernanda"
  return (
    <div>
      <h1>Início</h1>
      <p>Trabalho Front-End</p>
      <p>Autora: {nome}</p>
      <Image 
      className={styles.imagem}
      src="/images/ti.jpg" 
      alt="Stitch" 
      width={300} 
      height={200}/>
    </div>
  );
}
