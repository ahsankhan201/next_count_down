import type { NextPage } from "next";
import linkIcon from "../../assets/icon/link.png";
import twitterIcon from "../../assets/icon/twitter.png";
import facebookIcon from "../../assets/icon/FacebookIcon.png";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
interface Props {
  links: {
    facebookLink: string;
    twitterLink: string;
    setOpen: any;
    urlData: string;
  };
}
const Model: React.FC<Props> = ({ links }: Props) => {
  const copyToClipboard = (text: any) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseBtn}>
          <button
            className={styles.closeModelBtn}
            onClick={() => {
              links.setOpen(false);
            }}
          >
            X
          </button>
        </div>
        <div className={styles.title}>
          Share this event with your social community
        </div>

        <div className={styles.socialLinksContainer}>
          <span
            onClick={() => window.open(links.twitterLink)}
            className={styles.socialLinks}
          >
            <Image src={twitterIcon} alt="twitterIcon" />
          </span>

          <span
            onClick={() => window.open(links.facebookLink)}
            className={styles.socialLinks}
          >
            <Image src={facebookIcon} alt="facebookIcon" />
          </span>
        </div>

        <p className={styles.copyLinkMsg}>or copy link</p>

        <div className={styles.linkWrapper}>
          <span className={styles.linkTitle}>{links.urlData}</span>
          <button
            className={styles.linkBtn}
            onClick={(e) => {
              copyToClipboard(links.urlData);
            }}
          >
            copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model;
