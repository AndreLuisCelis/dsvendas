import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../Utils/request";

import NotificationButton from "../NotificationButton";

import './style.scss';

function SalesCard() {

    const [minDate, setMindate] = useState(new Date());
    const [maxDate, setMaxDate] = useState(new Date());

    const [sales, setSale] = useState<Sale[]>([])

    useEffect(() => {
        const dmin = minDate.toISOString().slice(0,10);
        const dmax = maxDate.toISOString().slice(0,10);

        console.log(`data minima ${dmin}, data maxima ${dmax}`);
        axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`)
            .then(res => {
                setSale(res.data.content);
            })
    }, [minDate , maxDate])
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
                        onChange={(date: Date) => { setMaxDate(date) }}
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
                        {
                            sales.map(sale => {
                                return (
                                    <tr key={sale.id}>
                                        <td> {sale.id}</td>
                                        <td>{new Date(sale.date).toLocaleDateString()}</td>
                                        <td>{sale.sellerName}</td>
                                        <td>{sale.deals}</td>
                                        <td>{sale.visited}</td>
                                        <td>R$ {sale.amount.toFixed(2)}</td>
                                        <td><NotificationButton /></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default SalesCard;