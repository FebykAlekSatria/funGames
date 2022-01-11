function MainBoard({ createRoom, joinRoom, cekRoom, mulai }) {
    return (
        <>
            <div className="bg-indigo-900 text-center py-4 lg:px-4 h-96 rounded-lg">
                <div className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                    <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">Ayo!!</span>
                    <span className="font-semibold mr-2 text-left flex-auto">tebak sekarang siapakah aku</span>
                </div>
                <br />
                {cekRoom ?
                    <button className="px-4 bg-yellow-500 p-2 rounded-lg text-white hover:bg-red-400 mt-32 font-bold" onClick={mulai}>Mulai</button>
                    :
                    <div className="space-x-4">
                        <button className="px-4 bg-yellow-500 p-2 rounded-lg text-white hover:bg-red-400 mt-32 font-bold" onClick={joinRoom}>Ikut Room</button>
                        <button className="px-4 bg-yellow-500 p-2 rounded-lg text-white hover:bg-red-400 mt-32 font-bold" onClick={createRoom}>Membuat Room</button>
                    </div>
                }
            </div>
        </>
    )

}
export default MainBoard;
