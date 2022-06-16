import FileSaver from 'file-saver';

export const GiphynderItem = ({ id, title, url }) => {

    const handleDownloadBtn = () => {
        FileSaver.saveAs(url, 'giphynder_jsx.gif')
    }

    return (
        <div className="
            overflow-hidden
            bg-white
            rounded-xl
            shadow-slate-300
            shadow-xl
            mb-10
            max-w-xs
            place-self-center
        ">
            <img className="
                w-full
                max-h-52
            "
                src={url}
                alt={title} />

            <p className="
                text-xl
                font-semibold
                my-4
            ">{title}</p>
            
            <button className="
                bg-blue-800
                rounded-md
                text-white
                p-2
                mb-6
                hover:bg-blue-900
            "
            onClick={handleDownloadBtn}

            >Descargar</button>
        </div>
    )
}
