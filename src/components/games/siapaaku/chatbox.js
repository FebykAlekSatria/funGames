import ChatReceive from './chatReceive';
import ChatSend from './chatSent';

function ChatBox() {
    return (
        <>
            <div className="block h-96 border-2 border-gray-300 rounded-lg overflow-y-scroll"
            >
                <ChatReceive
                    text="febyk main yuk"
                    sender="aqila"
                />
                <ChatSend
                    text="enggak mau"
                    sender="febyk"
                />
                <ChatReceive
                    text="mari main bersama saya pada malam dan siang hari untuk memenugi"
                    sender="aqila"
                />
                <ChatSend
                    text="enggak mau"
                    sender="febyk"
                />
                <ChatReceive
                    text="febyk main yuk"
                    sender="aqila"
                />
                <ChatSend
                    text="enggak mau"
                    sender="febyk"
                />
                <ChatReceive
                    text="febyk main yuk"
                    sender="aqila"
                />
                <ChatSend
                    text="enggak mau"
                    sender="febyk"
                />
                <ChatReceive
                    text="febyk main yuk"
                    sender="aqila"
                />
                <ChatSend
                    text="enggak mau"
                    sender="febyk"
                />
                <ChatReceive
                    text="febyk main yuk"
                    sender="aqila"
                />
                <ChatSend
                    text="enggak mau"
                    sender="febyk"
                />
                <ChatReceive
                    text="febyk main yuk"
                    sender="aqila"
                />
                <ChatSend
                    text="enggak mau"
                    sender="febyk"
                />
                <ChatReceive
                    text="febyk main yuk"
                    sender="aqila"
                />
                <ChatSend
                    text="enggak mau"
                    sender="febyk"
                />

            </div>
            <div className="w-full max-w-sm">
                <div className="flex items-center border-b border-indigo-800 py-2">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Masukkan Jawaban" />
                    <button className="bg-indigo-800 text-white hover:bg-indigo-900 text-sm py-1 px-2 rounded-lg">
                        Jawab
                    </button>
                </div>
            </div>
        </>
    )
}

export default ChatBox
