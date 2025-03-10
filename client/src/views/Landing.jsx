import background from '../assets/gradient.png'
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
    const navigate = useNavigate();

    const PublicTrivia = () => {
    navigate('/public-trivia'); 
    };

    const WiCSTrivia = () => {
        navigate('/wics-trivia'); 
    };

    return (
        <div className='w-screen min-h-screen bg-left flex flex-col justify-center items-center' style={{ backgroundImage: `url(${background})`}}>
            <div className='bg-gray-400 opacity-60 p-8 rounded-2xl flex flex-col gap-4'>
                <h1 className='text-5xl font-serif font-semibold'>WiCS : Intro to API Workshop</h1>
                <h1 className='text-3xl font-serif font-medium'>Navigate to :</h1>
                <div className='flex flex-col items-start gap-5'>
                    <button className='bg-blue-900 pl-4 pr-4 pt-2 pb-2 hover:bg-blue-700 rounded-xl text-white' onClick={PublicTrivia}>Public Trivia Page to implement Public API</button>
                    <button className='bg-blue-900 pl-4 pr-4 pt-2 pb-2 hover:bg-blue-700 rounded-xl text-white' onClick={WiCSTrivia}>WiCS Trivia Page to implement your OWN API</button>
                </div>
                
            </div>

        </div>
    )
}