import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { convertUtf8ToHex } from "@walletconnect/utils";
import { IInternalEvent } from "@walletconnect/types";
import { Button } from 'react-bootstrap';



export const ConnectMetamaskButtonComponent = () => {
    const connectWithMetamask = WalletConnect();
    const address = useAddress();
    return (
        <div>
            {address ? (
                null
            ) : (
                <Button variant= "light" onClick={connectWithMetamask}>Connect Wallet</Button>
            )}
        </div>
    );
};