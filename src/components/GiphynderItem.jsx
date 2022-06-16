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
            shadow-xl
            mb-10
        ">
            <img className="
                w-full
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
