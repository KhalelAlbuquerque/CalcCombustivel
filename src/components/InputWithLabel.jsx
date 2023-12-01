export default function InputWithLabel({setValue, label}){
    return(
        <div className="w-48 max-[660px]:w-full flex flex-col text-center mt-4">
            <label className="text-white">{label}</label>
            <input type="number" className="mt-2 bg-[#451261] max-[660px]:w-full border-white border-2 rounded-md text-white px-2 py-1" onChange={({target})=>setValue(target.value)}/>
        </div>
    )
}