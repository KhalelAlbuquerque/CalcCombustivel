import combustivel from '../assets/combustivel.png'
import { useState } from 'react'
import InputWithLabel from './InputWithLabel'
import ModalResult from './ModalResult'

export default function HomeForm(){
    const [gasolina, setGasolina] = useState(0)
    const [etanol, setEtanol] = useState(0)
    const [modal, setModal] = useState(false)
    const [textMessage, setTextMessage] = useState('')

    function calcPrices(event){
        event.preventDefault()

        if (!etanol || !gasolina){
            alert("Por favor, preencha todos os campos antes de calcular.")
            return;   
        }
        const value = parseFloat(etanol)/parseFloat(gasolina)

        if(value<=0.7){
            setTextMessage("Melhor usar etanol")
            setModal(true)
        }else{
            setTextMessage("Melhor usar Gasolina")
            setModal(true)
        }
    }

    return(
        <>
            <form onSubmit={calcPrices} className="flex flex-col items-center gap-5 px-4">
                <img src={combustivel} height={10} width={10} className="h-32 w-32"></img>
                <div className='text-center text-white mb-[-20px]'>
                    <p>Você sabe com qual combustível compensa mais abastecer seu carro?</p>
                    <p>Utilize a calculadora abaixo:</p>
                </div>
                <div className='w-full flex flex-col items-center'>
                    <InputWithLabel setValue={setEtanol} label={"Preço - litro etanol (R$): "}/>
                    <InputWithLabel setValue={setGasolina} label={"Preço - litro gasolina (R$): "}/>

                    <button type='submit' className=' mt-4 w-48 max-[660px]:w-full bg-black rounded-mg text-white px-4 py-2 rounded-md'>Calcular</button>
                </div>
            </form>
            {modal ? <ModalResult resultMessage={textMessage} setModal={setModal}/> : false}
        </>
    )
}