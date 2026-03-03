
import { useNavigate } from 'react-router'
import Button from '../Shareeded/Button'

const ErrorPage = () => {
    const navigate = useNavigate()

    return (
        <section className='bg-white'>
            <div className='container flex items-center min-h-screen px-6 py-12 mx-auto'>
                <div className='flex flex-col items-center max-w-sm mx-auto text-center'>

                    {/* Alert Icon */}
                    <p className='p-3 text-sm font-medium text-primary rounded-full bg-primary/10'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='2'
                            stroke='currentColor'
                            className='w-6 h-6'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
                            />
                        </svg>
                    </p>

                    {/* Main Heading */}
                    <h1 className='mt-3 text-2xl font-semibold text-gray-800 md:text-3xl'>
                        Oops! Something Went Wrong
                    </h1>

                    {/* Description */}
                    <p className='mt-4 text-gray-500'>
                        It seems there was an issue while loading MarketPulse.
                        Here are some helpful links:
                    </p>

                    {/* Buttons */}
                    <div className='flex flex-col sm:flex-row items-center w-full mt-6 gap-3 sm:w-auto'>

                        {/* Go Back */}
                        <button
                            onClick={() => navigate(-1)}
                            className='flex items-center justify-center w-full sm:w-auto px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 hover:bg-gray-100'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                className='w-5 h-5 rtl:rotate-180 text-primary'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                                />
                            </svg>
                            <span>Go Back</span>
                        </button>

                        {/* Take Me Home */}
                        <Button
                            label={'Take Me Home'}
                            onClick={() => navigate('/')}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage