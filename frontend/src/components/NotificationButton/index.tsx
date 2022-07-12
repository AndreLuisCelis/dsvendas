import icon from '../../assets/img/notificar-icon.svg';

import './style.scss';

function NotificationButton() {
    return (
        <button>
            <img src={icon} alt="" />
        </button>

    )
}

export default NotificationButton;