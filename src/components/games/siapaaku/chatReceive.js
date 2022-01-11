

export default function ChatReceive({ text, sender }) {
    return (
        <div
            className="bg-gray-200 float-left w-auto mx-4 my-1 p-2 rounded-lg clearfix text-sm"
        >{text}
            <p className='float-right text-xs ml-10 mt-4'>{sender}</p>
        </div>
    )
};

