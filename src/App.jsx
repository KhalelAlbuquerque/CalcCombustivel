import HomeForm from './components/HomeForm'

function App() {
  return (
    <div className='h-screen w-full flex items-center justify-center bg-[#451261]'>
      <div className='w-[60%] max-[880px]:w-[80%] h-[500px] flex flex-col items-center justify-center m-auto border-white border-2 rounded-xl'>
        <HomeForm/>
      </div>
    </div>
  )
}

export default App
