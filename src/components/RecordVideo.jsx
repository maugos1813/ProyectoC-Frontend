import { useContext, useEffect, useRef, useState } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import { Link } from "react-router-dom";
import { ExamContext } from "../context/ExamContext-";

export const RecordView = () => {
    const {setNewVideo} = useContext(ExamContext)
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
    
        return <video className="rounded-2xl " ref={videoRef} width={400} height={400} autoPlay />;
    }

  
    return (
        <div className=" w-full  h-full flex flex-col bg-[#D9ECFD] ">
            <ReactMediaRecorder
                video
                render={({ startRecording, previewStream, pauseRecording, resumeRecording, stopRecording, mediaBlobUrl, clearBlobUrl }) => {

                    useEffect(()=>{
                        async function saveVideo() {
                            const videito = await fetch(mediaBlobUrl)
                            const newvideo = await videito.blob()
                            setNewVideo(newvideo)
                        }
                        saveVideo()
                    },[mediaBlobUrl])
                   

                    return (
                        <section className="flex flex-col w-[70%] h-fit m-auto items-center border-[1px] border-sky-400 gap-4 p-8 rounded-2xl bg-white overflow-x-auto ">
                            <h1 className="text-[2rem] font-semibold ">Graba tu video aqui:</h1>
                            <section className="flex flex-col gap-8 items-center">
                             
                                <div className="flex flex-row gap-8 py-4 w-full items-center justify-evenly bg-[#D9ECFD] px-2 rounded-2xl" >
                                    <button type="button" className="bg-[#9ECEFF] hover:bg-[#38BDF8] text-white p-3 rounded-2xl" onClick={startRecording}>Iniciar Grabacion</button>
                                    <button type="button" className="bg-[#9ECEFF] hover:bg-[#38BDF8] text-white p-2 rounded-2xl" onClick={pauseRecording}>Pausar</button>
                                    <button type="button" className="bg-[#9ECEFF] hover:bg-[#38BDF8] text-white p-2 rounded-2xl" onClick={resumeRecording}>Reanudar</button>
                                    <button type="button" className="bg-[#9ECEFF] hover:bg-[#38BDF8] text-white p-2 rounded-2xl" onClick={stopRecording}>Detener</button>
                                    <button type="button" className="bg-[#9ECEFF] hover:bg-[#38BDF8] text-white p-2 rounded-2xl" onClick={clearBlobUrl}>Volver a intentar</button>
                                </div>
                                
                                {!mediaBlobUrl ?
                                    <VideoPreview className='rounded-2xl ' stream={previewStream} />
                                    : <video className="rounded-2xl  " src={mediaBlobUrl} controls loop width={400} height={400} />}

                            </section>
                        </section>)
                }}
            />
        </div>)
}