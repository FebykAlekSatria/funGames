import { useState } from "react"
import Axios from 'axios'
// import Session from 'react-session-api'

function ModalUser({ close }) {
    const [idUser, setIdUser] = useState('')
    const [username, setUsername] = useState('')
    const [validasi, setValidasi] = useState(true)


    function createUserId() {
        setIdUser(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5));

    }
    function CreateUser() {
        console.log(idUser)
        const data = {
            member_id: idUser,
            username: username,
            score: ''
        }
        if (username == '') {
            setValidasi(false)
        } else {
            setValidasi(true)
            Axios.post('http://localhost:3001/api/insert/member', data).then((res) => {
                if (typeof window !== "undefined") {

                    (localStorage.setItem('idMember', idUser))
                }
                // Session.set("id_member", idUser)
                // console.log(Session.get("id_member"), 'ini id session')
                window.location = "/siapaaku";
            })
        }
    }
    return (
        <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div className="absolute w-full h-full bg-gray-900 opacity-75"></div>
            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 text-left px-6">
                    <div className="flex justify-between items-center pb-3 text-center">
                        <p className="text-2xl font-bold">Your Account</p>
                    </div>
                    <input placeholder="Username" className="bg-gray-100 w-full h-10 px-4 rounded-lg focus:outline-none" onChange={(e) => { setUsername(e.target.value) }} onMouseEnter={createUserId} />
                    {validasi ? null : <i className="text-xs text-red-500 ml-4">*username tidak boleh kosong</i>}
                    <div className="flex justify-center pt-2">
                        <button className="px-4 bg-transparent p-2 rounded-lg text-indigo-900 hover:bg-gray-100 hover:text-indigo-400 mr-2 " onClick={CreateUser}>Create Username</button>
                        <button className="px-4 bg-red-600 p-2 rounded-lg text-white hover:bg-red-400" onClick={close}>Close</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ModalUser
