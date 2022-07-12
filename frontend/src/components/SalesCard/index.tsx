import NotificationButton from "../NotificationButton";

import './style.scss';

function SalesCard(){
 return (
    <div className="card">
                <h2>Vendas</h2>
                <div className="inputs">
                    <div>
                        <input type="date" value=""/>
                    </div>
                    <div>
                        <input type="date" value=""/>
                    </div>
                </div>

                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Data</th>
                                <th>Vendedor</th>
                                <th>Visitas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>90-09-09</td>
                                <td>Andre</td>
                                <td>500</td>
                                <td>300</td>
                                <td><NotificationButton/></td>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>90-09-09</td>
                                <td>Andre</td>
                                <td>500</td>
                                <td>300</td>
                                <td><NotificationButton/></td>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>90-09-09</td>
                                <td>Andre</td>
                                <td>500</td>
                                <td>300</td>
                                <td><NotificationButton/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
 )
}
export default SalesCard;