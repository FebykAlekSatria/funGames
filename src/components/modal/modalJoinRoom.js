import { useEffect, useState } from "react"
import Axios from 'axios'
import Session from 'react-session-api'

function ModalRoom({ close }) {
    const [idRoom, setIdRoom] = useState('')
    const [idMember, setIdMember] = useState('')
    const [validateRoom, setValidateRoom] = useState(false)

    useEffect(() => {
        if (typeof window !== "undefined") {

            setIdMember(localStorage.getItem("idMember"))
        }
    }, []);


    async function joinRoom() {
        const data2 = {
            id_room: idRoom,
            id_member: idMember,
            score: 0,
            id_role: 0,
        }
        await Axios.post('http://localhost:3001/api/insert/room/member', data2).then((res) => {
            alert('sukses')
            console.log(res)
            console.log(res.data);
            localStorage.setItem('idRoom', idRoom)
            window.location = "/siapaaku";

        })

    }
    return (
        <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div className="absolute w-full h-full bg-gray-900 opacity-75"></div>
            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 text-left px-6">
                    <div className="flex justify-between items-center pb-3 text-center">
                        <p className="text-2xl font-bold">Join Room</p>
                    </div>


                    <input placeholder="Masukkan ID Room" className="bg-gray-100 w-full h-10 px-4 rounded-lg focus:outline-none" onChange={(e) => { setIdRoom(e.target.value) }} />


                    <div className="flex justify-center pt-2 space-x-2">
                        <button className="px-4 bg-indigo-900 p-2 rounded-lg text-white hover:bg-indigo-400" onClick={joinRoom}>Join</button>
                        <button className="px-4 bg-red-600 p-2 rounded-lg text-white hover:bg-red-400" onClick={close}>Close</button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default ModalRoom
