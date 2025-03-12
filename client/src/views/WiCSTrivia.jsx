import background from '../assets/gradient.png'
import { useState, useEffect } from 'react';

export default function WiCSTrivia() {
    const [triviaData, setTriviaData] = useState(null)
    
        async function getTriviaQuestion() {
          const url = "http://127.0.0.1:5000/question?amount=2"
          try {
            const response = await fetch(url)
            const json = await response.json()
            return json
           } catch(err) {
            console.log(err)
           }
          }
    
        useEffect(() => {
            const fetchData = async () => {
                if (!triviaData) {
                    const result = await getTriviaQuestion();
                    setTriviaData(result);
                } 
              };
            
              fetchData()
          }, []);
    
        return (
            <div className='w-screen min-h-screen bg-top-left flex flex-col items-center pt-8 gap-4 font-serif' style={{ backgroundImage: `url(${background})`}}>
                <h1 className='bg-gray-400 opacity-70 p-5 rounded-2xl text-3xl font-serif font-semibold'>Questions from our Own API</h1>
                {triviaData && triviaData.map((item)=> {
                  return (
                    <div className='bg-gray-300 opacity-80 p-8 rounded-2xl flex flex-col gap-4' key={item.id}>
                    <h2  className='text-xl font-serif font-semibold'>{triviaData ? item['question'] : 'Loading'}</h2>
                    <h2  className='text-l font-serif font-semibold'>{triviaData ? item['answer'] : 'Loading'}</h2>
                </div>
                  )
                })}
                
            </div>
        )
}