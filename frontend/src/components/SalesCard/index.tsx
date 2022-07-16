import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import NotificationButton from "../NotificationButton";

import './style.scss';

function SalesCard() {

    const [minDate , setMindate]= useState(new Date());
    const [maxDate , setMaxDate] = useState(new Date());

    useEffect(()=> {
        axios.get('http://localhost:8080/sales')
        .then(res => {
            console.log(res.data);
        })
    },[])
    return (
        <div className="card">
            <h2>Vendas</h2>
            <div className="inputs">
                <div>
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => { setMindate(date) }}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div>
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => { setMaxDate(date)}}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
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
                            <th>Vendas</th>
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
                            <td>15</td>
                            <td>300</td>
                            <td><NotificationButton /></td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>90-09-09</td>
                            <td>Andre</td>
                            <td>500</td>
                            <td>15</td>
                            <td>300</td>
                            <td><NotificationButton /></td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>90-09-09</td>
                            <td>Andre</td>
                            <td>500</td>
                            <td>15</td>
                            <td>300</td>
                            <td><NotificationButton /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default SalesCard;