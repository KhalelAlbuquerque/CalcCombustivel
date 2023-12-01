export default function ModalResult({setModal, resultMessage}){

    
    return(
        <div className="flex items-center justify-center absolute t-0 l-0 bg-black/50 w-full h-screen">
            <div className=" flex-col gap-10 w-96 max-[530px]:w-64 h-64 rounded-xl bg-white flex items-center justify-center">
                <p className="text-xl">{resultMessage}</p>
                <button className="px-4 py-2 max-[530px]:w-48 bg-black font-bold text-white font-bold w-64 rounded-md" onClick={()=>setModal(false)}>Fechar</button>
            </div>
        </div>
    )
}