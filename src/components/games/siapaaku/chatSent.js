export default function ChatSend({ text, sender }) {
    return (
        <div
            className="bg-indigo-300 float-right w-auto mx-4 my-1 p-2 rounded-lg clearfix text-sm"
        >{text}
            <p className='float-right text-xs ml-10 mt-4'>{sender}</p>
        </div>
    )
}