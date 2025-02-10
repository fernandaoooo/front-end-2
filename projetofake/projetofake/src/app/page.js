import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <Image src="/images/pacientefeliz.jpg" alt="Logo" width={700} height={200} className={styles.campoLogo}/>
      <div className={styles.frase}>
        <p>Viva Menos, mas com mais qualidade de vida.✨
          <br/>
          Aqui, reduzimos o excesso e focamos no essencial. Menos complicação, mais saúde. Nosso trabalho é garantir que você viva o melhor, sem exageros. Afinal, viver bem não precisa ser difícil, nem cheio de promessas vazias.
        </p>
      </div>
    </div>
  );
}