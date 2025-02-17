import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <p className={styles.title}>Viva Menos, mas com mais qualidade de vida.💀🩸</p>
      <Image src="/images/pacientefeliz.jpg" alt="Logo" width={500} height={330}/>
      <div className={styles.frase}>
        <p className={styles.mensagem}>
          Aqui, reduzimos o excesso e focamos no essencial. Menos complicação, mais saúde. Nosso trabalho é garantir que você viva o melhor, sem exageros. Afinal, viver bem não precisa ser difícil, nem cheio de promessas vazias.
        </p>
      </div>
    </div>
  );
}
