import React, {Component} from 'react';
import Image from "next/image";
import styles from "../styles/Card.module.scss";
import authorImage from "../public/placeholders/author.png";
import ethLogo from "../public/eth.png";

class Card extends Component {
    render() {
        return (
            <div className={styles.card}>
                <div>
                    <span className={styles.name}>Card name</span>
                    <div className={[styles.author, styles.info].join(" ")}>
                        <div className={[styles.authorImage, styles.infoImage].join(" ")}>
                            <Image src={authorImage} layout={"fill"} objectFit={"contain"}/>
                        </div>
                        <span>@author</span>
                    </div>
                </div>
                <div>
                    <div className={[styles.price, styles.info].join(" ")}>
                        <div className={styles.infoImage}>
                            <Image src={ethLogo} layout={"fill"} objectFit={"contain"}/>
                        </div>
                        <span>amount</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;