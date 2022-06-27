import { h } from "preact";
import Styles from "./styles.module.scss";

function PostPreview({ post }) {
  const { frontmatter } = post;
  return (
    <div className={Styles.card}>
      <div
        className={Styles.titleCard}
        style={`background-image:url(${frontmatter.img})`}
      ></div>
      <div className="pa3">
        <p className={`${Styles.desc} mt0 mb0`}>{frontmatter.description}</p>
        <a className={Styles.link} href={post.url}>
          <span className={Styles.linkInner}>Ver</span>
        </a>
      </div>
    </div>
  );
}

export default PostPreview;
