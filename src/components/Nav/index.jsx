import { h } from "preact";
import Styles from "./styles.module.scss";

function Nav() {
  return (
    <nav className={Styles.nav}>
      <a className={Styles.logolink} href="/">
        <div className={Styles.monogram}>ZBZ</div>
      </a>
      <a className={Styles.link} href="/news">
        Noticias
      </a>
      <a className={Styles.link} href="/faq">
        Preguntas frecuentes
      </a>
      <a className={Styles.link} href="/registration">
        Inscripción
      </a>
    </nav>
  );
}
export default Nav;
