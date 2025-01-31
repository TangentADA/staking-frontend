import { Blockfrost, WalletProvider, Lucid } from 'lucid-cardano'

const initializeLucid = async (walletapi: WalletAPI | undefined) => {
    let lucid = await Lucid.new(
        new Blockfrost('https://cardano-mainnet.blockfrost.io/api/v0', 'mainnetli5FkaFDpDjQpFctEPGIDCuGzRkHCXpw'),
        'Mainnet'//  as Network
    )
    if(walletapi) lucid = lucid.selectWallet(walletapi)
    return lucid
}

export default initializeLucid