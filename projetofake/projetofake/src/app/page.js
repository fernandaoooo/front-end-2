import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Clínica Viva Menos</h1>
      <p>Agende consultas, veja registros e muito mais.</p>
      <Image 
      className={styles.imagem}
      src="/images/pacientefeliz.jpg" 
      alt="Stitch" 
      width={300} 
      height={200}/>
    </div>
  );
}