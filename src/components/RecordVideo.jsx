import { useEffect, useRef } from "react";
import { ReactMediaRecorder } from "react-media-recorder";


const VideoPreview = ({ stream }) => {

    const videoRef = useRef(null);

    useEffect(() => {

        if (videoRef.current && stream) {
            videoRef.current.srcObject = stream;
        }
    }, [stream]);

    if (!stream) {
        return null;
    }
    return <video className="rounded-2xl " ref={videoRef} width={700} height={700} autoPlay />;
}

export const RecordView = () => (


    <div className=" w-full  h-[90%] p-12 flex ">
        <ReactMediaRecorder
            video
            render={({ startRecording, previewStream, pauseRecording, resumeRecording, stopRecording, mediaBlobUrl, clearBlobUrl }) => {
                return (
                    <section className="flex flex-col w-[70%] h-fit m-auto items-center border-[1px] border-[#0A8537] p-8 rounded-2xl ">
                        <section>
                            <section className="flex flex-col gap-8 py-8">
                                <section className="border-[1px] border-[#0A8537] flex gap-2 outline-none rounded-2xl px-4 py-2 ">
                                    <label htmlFor="titulo">Titulo: </label> <input className="w-[80%] " id='titulo' name="titulo" type="text" placeholder="Ingresa el titulo de tu video" />
                                </section>
                                <section className="border-[1px] border-[#0A8537] flex gap-2 outline-none rounded-2xl px-4 py-2 ">
                                    <label htmlFor="usuario">Usuario: </label>  <input className="w-[80%] " id='usuario' name="usuario" type="text" placeholder="Ingresa tu nombre de usuario" />
                                </section>
                            </section>
                            {!mediaBlobUrl ?
                                <VideoPreview stream={previewStream} />
                                : <video className="rounded-2xl " src={mediaBlobUrl} controls loop width={700} height={700} />}


                            <div className="flex flex-row gap-8 py-4 w-full items-center justify-evenly bg-[#baf1cf] px-2 rounded-t-2xl" >
                                <button className="bg-[#0A8537] hover:bg-[#0A8537] text-white p-3 rounded-2xl" onClick={startRecording}>Iniciar Grabacion</button>
                                <button className="bg-[#0A8537] text-white p-2 rounded-2xl" onClick={pauseRecording}>Pausar</button>
                                <button className="bg-[#0A8537] text-white p-2 rounded-2xl" onClick={resumeRecording}>Reanudar</button>
                                <button className="bg-[#0A8537] text-white p-2 rounded-2xl" onClick={stopRecording}>Detener</button>
                                <button className="bg-[#0A8537] text-white p-2 rounded-2xl" onClick={clearBlobUrl}>Volver a intentar</button>
                            </div>
                            <div className="flex  w-full justify-center bg-[#baf1cf] rounded-b-2xl py-4 gap-8">
                                <a className="bg-[#0A8537] text-white w-[20%] p-2 rounded-2xl flex items-center justify-center cursor-pointer"
                                    href={mediaBlobUrl}
                                    download={`${new Date}.mp4`}>
                                    Descargar
                                </a>
                                <button className="bg-[#0A8537] text-white p-2 rounded-2xl" type="submit">Enviar</button>
                            </div>

                        </section>
                    </section>)
            }}
        />
    </div>
)