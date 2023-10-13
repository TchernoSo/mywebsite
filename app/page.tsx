import Main from './Main/Main'
import Navbar from './Navbar/Navbar'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-black'>
      <Navbar/>
      <div className="container mt-24 mx-auto px-80 py-2">
        <Main />
      </div>
    </main>
  )
}
