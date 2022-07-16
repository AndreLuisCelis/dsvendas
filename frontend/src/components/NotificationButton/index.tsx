import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notificar-icon.svg';
import { BASE_URL } from '../../Utils/request';

import './style.scss';

type Props = {
    saleId: number;
}

const handleClick = (saleId:number)=> {
    axios.get(`${BASE_URL}/sales/${saleId}/notification`)
    .then(res => toast.info('SMS enviado com sucesso'),
     err => toast.error('Ocorreu um erro ao enviar o SMS'))
}

function NotificationButton({saleId}: Props) {
    return (
        <button onClick={()=> handleClick(saleId)}>
            <img src={icon} alt="" />
        </button>

    )
}

export default NotificationButton;