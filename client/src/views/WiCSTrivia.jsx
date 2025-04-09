import background from '../assets/gradient.png'
import { useState, useEffect } from 'react';

export default function WiCSTrivia() {
    const [triviaData, setTriviaData] = useState(null)
    
        async function getTriviaQuestion() {
          
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
                <div className='bg-gray-300 opacity-80 p-8 rounded-2xl flex flex-col gap-4'>
                    <h2  className='text-xl font-serif font-semibold'>{triviaData ? triviaData['question'] : 'Loading Question'}</h2>
                    <h2  className='text-l font-serif font-semibold'>{triviaData ? triviaData['answer'] : 'Loading Answer'}</h2>
                </div>
            </div>
        )
}