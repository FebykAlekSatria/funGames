
function CardGame({ src, alt, rule, title, desc, children }) {
    return (
        <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-white shadow-md py-4 px-2 rounded-lg h-auto">
                <img className="h-40 rounded w-full object-cover object-center mb-4" src={src}
                    alt={alt} />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{rule}</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{title}</h2>
                <p className="leading-relaxed text-base">{desc}</p>
                {children}
            </div>
        </div>

    )
}

export default CardGame
