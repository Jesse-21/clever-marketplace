import React, {Component} from 'react';
import Image from "next/image";
import styles from "../styles/Card.module.scss";
import authorImage from "../public/placeholders/author.png";
import wethLogo from "../public/weth.png";

class Card extends Component {
    render() {
        return (
            <div className={styles.card}>
                <div>
                    <span className={styles.name}>Card name</span>
                    <div className={[styles.author, styles.metadata].join(" ")}>
                        <div className={styles.authorImage}>
                            <Image src={authorImage} layout={"responsive"}/>
                        </div>
                        <span>@author</span>
                    </div>
                </div>
                <div>
                    <div className={[styles.price, styles.metadata].join(" ")}>
                        <Image src={wethLogo}/>
                        <span>amount</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;