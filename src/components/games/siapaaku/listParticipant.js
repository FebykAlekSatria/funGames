import axios from "axios";
import { useEffect } from "react";

function Participant() {
    useEffect(() => {
        axios.get('http://localhost:3001/api/get/memberRoom', {
            params: {
                id_room: 'vjrtj',
            }
        }).then((res) => {
            console.log(res, 'data member room');
        })
    }, [])
    return (
        <div>
            <p className="font-bold text-indigo-900">Peserta  :</p>
            <div className="pl-4 text-xs font-bold text-gray-500">
                <p>Febyk Alek Satria</p>
                <p>Adi Kurniawan</p>
                <p>Reza Kurniawan</p>
            </div>
        </div>
    )
}

export default Participant;