import background from '../assets/gradient.png'
import { useEffect, useState } from 'react'

export default function Public() {
    const [triviaData, setTriviaData] = useState(null)

    async function getTriviaQuestion() {
       const url = "https://jsonplaceholder.typicode.com/posts/13"

       try {
        const response = await fetch(url)
        const json = await response.json()
        return {text : json['body']}
       } catch(err) {
        console.log(err)
       }
      }

    useEffect(() => {
        const fetchData = async () => {
            const result = await getTriviaQuestion();
            setTriviaData(result);
          };
        
          fetchData()
      }, []);

    return (
        <div className='w-screen min-h-screen bg-center flex flex-col items-center pt-8 gap-4 font-serif' style={{ backgroundImage: `url(${background})`}}>
            <h1 className='bg-gray-400 opacity-70 p-5 rounded-2xl text-3xl font-serif font-semibold'>Questions from Dummy API</h1>
            
            <div className='bg-gray-300 opacity-80 p-8 rounded-2xl flex flex-col gap-4 m-12'>
                <h2  className='text-xl font-serif font-semibold'>{triviaData ? triviaData['text'] : 'Loading'}</h2>
            </div>
           
        </div>
    )
}