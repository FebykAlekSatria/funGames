import { useEffect, useState } from "react"
import Axios from 'axios'

function ModalRoom({ close }) {
    const [idRoom, setIdRoom] = useState('')
    const [idMember, setIdMember] = useState('')

    useEffect(() => {
        setIdRoom(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5))
        setIdMember(localStorage.getItem("idMember"))

    }, []);
    async function createRoomId() {
        const data = {
            id_room: idRoom,
            id_kategori: null
        }
        await Axios.post('http://localhost:3001/api/insert/', data).then((res) => {
            console.log(res)
            console.log(res.data);
        })
        const data2 = {
            id_room: idRoom,
            id_member: idMember,
            score: 0,
            id_role: 1,
        }
        await Axios.post('http://localhost:3001/api/insert/room/member', data2).then((res) => {
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

                    <div className="w-full h-10 px-4 rounded-lg focus:outline-none text-center my-auto font-bold text-xl tracking-widest uppercase underline">{idRoom} </div>

                    <div className="flex justify-center pt-2">
                        <button className="px-4 bg-indigo-900 p-2 rounded-lg text-white hover:bg-indigo-400 mr-2" onClick={createRoomId}>Create</button>
                        <button className="px-4 bg-red-600 p-2 rounded-lg text-white hover:bg-red-400" onClick={close}>Close</button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default ModalRoom
