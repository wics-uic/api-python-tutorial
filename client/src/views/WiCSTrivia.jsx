import background from '../assets/gradient.png'

export default function WiCSTrivia() {
    return (
        <div className='w-screen min-h-screen bg-center flex flex-col items-center pt-8' style={{ backgroundImage: `url(${background})`}}>
            <h1 className='bg-gray-400 opacity-70 p-5 rounded-2xl text-3xl font-serif font-semibold'>Questions from our self-built API</h1>

        </div>
    )
}