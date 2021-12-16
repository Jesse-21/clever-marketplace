import type {GetStaticProps, NextPage} from 'next';
import styles from "../styles/Explore.module.scss";
import {ListingMetadata, ThirdwebSDK} from "@3rdweb/sdk";
import {ethers} from "ethers";
import Config from "../config.json";
import Card from "../components/Card";

interface IExploreProps {
    nfts: any
}

export const getStaticProps: GetStaticProps = async () => {
    const sdk = new ThirdwebSDK(
        new ethers.Wallet(
            process.env.PRIVATE_KEY as string,
            ethers.getDefaultProvider(Config.thirdweb.provider)
        )
    );
    const market = sdk.getMarketModule(Config.thirdweb.module);
    console.log(await market.getAll());
    return {
        props: {
            nfts: "d"
        }
    }
}

const Explore: NextPage<IExploreProps> = ({nfts}) => {
    console.log(nfts);
    return (
        <div className={styles.explore}>

        </div>
    )
}

export default Explore