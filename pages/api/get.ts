import type {NextApiRequest, NextApiResponse} from "next";
import {ThirdwebSDK} from "@3rdweb/sdk";
import {ethers} from "ethers";
import Config from "../../config.json";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const sdk = new ThirdwebSDK(
        new ethers.Wallet(
            process.env.PRIVATE_KEY as string,
            ethers.getDefaultProvider(Config.thirdweb.provider)
        )
    );
    const market = sdk.getMarketModule(Config.thirdweb.module);

    res.status(200).json(market.getAll());
}
