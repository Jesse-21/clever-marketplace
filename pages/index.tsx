import type {NextPage} from 'next';
import styles from "../styles/Explore.module.scss";
import Card from "../components/Card";
import {ThirdwebSDK} from "@3rdweb/sdk";
import {ethers} from "ethers";
import Config from "../config.json";

const Explore: NextPage = () => {
    const sdk = new ThirdwebSDK(
        new ethers.Wallet(
            Config.wallet.privateKey,
            ethers.getDefaultProvider(Config.thirdweb.provider)
        )
    );
    const market = sdk.getMarketModule(Config.thirdweb.module);
    console.log(market.getAll());

    return (
        <div className={styles.explore}>
            <Card/>
            <Card/>
        </div>
    )
}

export default Explore