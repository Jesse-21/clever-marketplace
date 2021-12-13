import React, {Component} from 'react';
import Image from "next/image";
import Logo from "../public/cryptopunk-logo.png";
import styles from "../styles/Header.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from '@mui/icons-material/LightMode';

class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <Image src={Logo} width={200} height={75} alt="Website's logo"/>
                <div className={styles.searchbar}>
                    <SearchIcon className={styles.searchbarIcon}/>
                    <input type="text" placeholder="Collection, item or user"/>
                </div>
                <div className={styles.navbar}>
                    <a>Drops</a>
                    <a>Marketplace</a>
                    <a>Create</a>
                    <button className={styles.contrastMode}>
                        <LightModeIcon/>
                    </button>
                    <button className={styles.signUp}>
                        <span>GET IN</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default Header;