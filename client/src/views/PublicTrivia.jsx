import background from '../assets/gradient.png'
import { useEffect, useState } from 'react'

export default function PublicTrivia() {
    const [triviaData, setTriviaData] = useState({question:'', answer:''})

    async function getTriviaQuestion() {
        const url = "https://opentdb.com/api.php?amount=1&category=18&difficulty=medium&type=boolean";
       
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
      
          const json = await response.json();
          const result = {question: json['results'][0]['question'], answer:json['results'][0]['correct_answer']}
          console.log(result)
          return result
        } catch (error) {
          console.error(error.message);
        }
      }

    useEffect(() => {
        const fetchData = async () => {
            if (triviaData['question'] == '') {
                const result = await getTriviaQuestion();
                setTriviaData(result);
            } 
          };
        
          fetchData()
      }, []);

    return (
        <div className='w-screen min-h-screen bg-center flex flex-col items-center pt-8 gap-4 font-serif' style={{ backgroundImage: `url(${background})`}}>
            <h1 className='bg-gray-400 opacity-70 p-5 rounded-2xl text-3xl font-serif font-semibold'>Questions from Open Trivia API</h1>
            
            <div className='bg-gray-300 opacity-80 p-8 rounded-2xl flex flex-col gap-4'>
                <h2  className='text-xl font-serif font-semibold'>{triviaData['question']}</h2>
            </div>
            <div className='flex flex-row gap-6'>
                <div className='flex flex-row gap-2'>
                    <label htmlFor="true">True</label>
                    <input type='Radio' name='Boolean' id='true'/> 
                </div>
                <div className='flex flex-row gap-2'>
                    <label htmlFor="false">False</label>
                    <input type='Radio' name='Boolean' id='false'/>
                </div>
            </div>
            <button className='bg-gray-400 p-2 rounded-xl font-bold cursor-pointer'>SUBMIT</button>
        </div>
    )
}