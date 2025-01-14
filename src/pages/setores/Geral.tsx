import Marketing from "./Marketing";
import Comercial from "./Comercial";
import CallCenter from "./CallCenter";
import Design from "./Design";
import { Typography } from "@mui/material";



const Geral: React.FC = () => {
    return (
    <div>

                <Typography 
                variant="h4" 
                gutterBottom 
                style={{ textAlign: 'center' }}
                >
                VISÃO GERAL
                </Typography>

    <Comercial></Comercial>
    <CallCenter></CallCenter>
    <Marketing></Marketing>
    <Design></Design>

</div>
)}
export default Geral;
