import { createRef, useEffect, useRef, useState } from 'react';
import ChatBox from '../src/components/games/siapaaku/chatbox';
import MainBoard from '../src/components/games/siapaaku/mainboard';
import LayoutGame from '../src/components/layout/layoutGame';
import ModalCreateRoom from '../src/components/modal/modalCreateRoom';
import ModalJoinRoom from '../src/components/modal/modalJoinRoom';
import Axios from 'axios'
import Participant from '../src/components/games/siapaaku/listParticipant';
// import Session from 'react-session-api'

function siapaaku() {
    const [idRoom, setIdRoom] = useState('')
    const [cekRoom, setCekRoom] = useState(false)
    const [kategori, setKategori] = useState([''])
    useEffect(() => {
        Axios.get('http://localhost:3001/api/get/kategori').then((res) => {
            setKategori(res.data)
        })
        if (typeof window !== "undefined") {
            setIdRoom(localStorage.getItem("idRoom"))
            if (localStorage.getItem('idRoom') == null) {
                setIdRoom('silahkan masuk ke room atau membuat room')
                setCekRoom(false)
            } else {
                setCekRoom(true)
            }

        }
    }, [0]);


    // const id_member = localStorage.getItem('id_member')
    const [modalCreate, setModalCreate] = useState(false)
    const [modalJoin, setModalJoin] = useState(false)

    const viewModalCreate = () => {
        setModalCreate(modalCreate ? false : true);
    }
    const viewModalJoin = () => {
        setModalJoin(modalJoin ? false : true);
    }

    return (
        <>
            {modalCreate ? <ModalCreateRoom close={viewModalCreate} /> : null}
            {modalJoin ? <ModalJoinRoom close={viewModalJoin} /> : null}

            <LayoutGame pages='siapaaku'>
                <div className="w-full items-center">
                    {/* {console.log(localStorage.getItem('id_member'), "ini id")} */}
                    <div className="w-full grid grid-cols-12 gap-2">
                        <div className="col-start-1 col-end-3 space-y-4 pl-4">
                            <Participant />
                            {
                                cekRoom ?
                                    kategori
                                        .map((value, index) =>
                                            (<button className=" w-2/3 h-10 mx-auto rounded-lg text-center bg-indigo-900 hover:bg-yellow-400 font-bold text-red" key={index} value={value.id_kategori}>{value.nama_kategori} </button>)
                                        )
                                    : null
                            }

                        </div>
                        <div className="col-start-3 col-end-9">
                            <MainBoard
                                createRoom={viewModalCreate}
                                joinRoom={viewModalJoin}
                                cekRoom={cekRoom}
                            />
                            <h5 className="font-bold text-xs text-yellow-400 uppercase">ID ROOM ANDA : {idRoom}</h5>
                        </div>
                        <div className="col-start-9 col-end-13 pr-8 mb-2">
                            <div>
                                <ChatBox />
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutGame>
        </>
    )
}

export default siapaaku
