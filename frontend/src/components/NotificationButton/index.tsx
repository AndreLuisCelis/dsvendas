import axios from 'axios';
import icon from '../../assets/img/notificar-icon.svg';
import { BASE_URL } from '../../Utils/request';

import './style.scss';

type Props = {
    saleId: number;
}

const handleClick = (saleId:number)=> {
    axios.get(`${BASE_URL}/sales/${saleId}/notification`)
    .then(res => console.log(res))
}

function NotificationButton({saleId}: Props) {
    return (
        <button onClick={()=> handleClick(saleId)}>
            <img src={icon} alt="" />
        </button>

    )
}

export default NotificationButton;