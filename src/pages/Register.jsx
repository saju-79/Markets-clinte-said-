import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import Container from '../Shareeded/Container';
import { Link, useNavigate } from 'react-router';
import Logo from '../Shareeded/Logo';
import { TbFidgetSpinner } from 'react-icons/tb';
import { FaRoad } from 'react-icons/fa';
import useAuth from '../hooks/api/useAuth';
import { toast } from 'react-toastify';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate()
    const [wait, setwait] = useState(false);
    const { loading, handelemailAndPassword, updateUserProfile, setUser, signInWithGoogle } = useAuth();
    // form submit handler
    const handleSubmit = async event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const password = form.password.value;
        const file = form.image?.files[0];
        if (!file) {
            console.log("No file selected");
            return;
        }
        // 1. store the img from data 
        const formData = new FormData();
        formData.append("image", file);
        // 🔑 Replace YOUR_IMGBB_API_KEY with your imgbb API key

        try {
            const apiKey = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_key}`;
            // 2nd step
            const res = await axios.post(apiKey, formData);
            const urlimage = res.data.data.display_url;
            setwait(true)

            //2. User Registration
            await handelemailAndPassword(email, password)
            const customer = {
                name: name,
                email: email,
                photoURL: urlimage,
                creationTime: new Date().toISOString(),
                lastSignInTime: new Date().toISOString(),
                role: 'customer',
            }
            console.log(customer)
            // uplod user db
            // await saveUserInDb(userData)
            //3. Save username & profile photo
            await updateUserProfile(name, urlimage, number,)
            // console.log(result)
            navigate('/')
            toast.success("Registration successful! Your account is ready ! ✅");
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        } finally {
            setwait(false)
        }
    }
    const handleGoogleSignIn = async () => {
        try {
            //User Registration using google
            const result = await signInWithGoogle()
            setUser(result)
            const customer = {
                name: result?.user?.displayName,
                email: result?.user?.email,
                photoURL: result?.user?.photoURL,
                creationTime: result?.user?.metadata?.creationTime,
                lastSignInTime: result?.user?.metadata?.lastSignInTime,
                role: 'customer',
            }
            // uplod user Db
            // await saveUserInDb(userData)
            console.log(customer)
            navigate('/')
            toast.success("Signed up with Google successfully! 🎉");
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }

    return (
        <Container>
            <div className="p-4">
                <Logo></Logo>
                <div className='flex justify-center items-center min-h-screen bg-white'>
                    <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                        <div className='mb-8 text-center'>
                            <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
                            <p className='text-sm text-gray-400'>Welcome to MarketPulse</p>
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            noValidate=''
                            action=''
                            className='space-y-6 ng-untouched ng-pristine ng-valid'
                        >
                            <div className='space-y-4'>
                                <div>
                                    <label htmlFor='email' className='block mb-2 text-sm'>
                                        Name
                                    </label>
                                    <input
                                        type='text'
                                        name='name'
                                        id='name'
                                        placeholder='Enter Your Name Here'
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900'
                                        data-temp-mail-org='0'
                                    />
                                </div>
                                <div>
                                    <label htmlFor='email' className='block mb-2 text-sm'>
                                        Phone Number
                                    </label>
                                    <input
                                        type='number'
                                        name='number'
                                        id='number'
                                        placeholder='Enter Your Phone Number Here'
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900'
                                        data-temp-mail-org='0'
                                    />
                                </div>
                                <div>
                                    <label htmlFor='image' className='block mb-2 text-sm'>
                                        Select Image:
                                    </label>
                                    <input
                                        className='bg-gray-200 cursor-pointer'
                                        type='file'
                                        id='image'
                                        name='image'
                                        accept='image/*'
                                    />
                                </div>
                                <div>
                                    <label htmlFor='email' className='block mb-2 text-sm'>
                                        Email address
                                    </label>
                                    <input
                                        type='email'
                                        name='email'
                                        id='email'
                                        required
                                        placeholder='Enter Your Email Here'
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900'
                                        data-temp-mail-org='0'
                                    />
                                </div>
                                <div>
                                    <div className='flex justify-between'>
                                        <label htmlFor='password' className='text-sm mb-2'>
                                            Password
                                        </label>
                                    </div>
                                    <input
                                        type='password'
                                        name='password'
                                        autoComplete='new-password'
                                        id='password'
                                        required
                                        placeholder='*******'
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900'
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type='submit'
                                    disabled={loading || wait}
                                    className='bg-primary w-full rounded-md py-3 text-white'
                                >
                                    {loading || wait ? (
                                        <TbFidgetSpinner className='animate-spin m-auto' />
                                    ) : (
                                        'Continue'
                                    )}
                                </button>
                            </div>
                        </form>
                        <div className='flex items-center pt-4 space-x-1'>
                            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                            <p className='px-3 text-sm dark:text-gray-400'>
                                Signup with social accounts
                            </p>
                            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        </div>
                        <div
                            onClick={handleGoogleSignIn}
                            className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
                        >
                            <FcGoogle size={32} />

                            <p>Continue with Google</p>
                        </div>
                        <p className='px-6 text-sm text-center text-gray-400'>
                            Already have an account?{' '}
                            <Link
                                to='/login'
                                className='hover:underline hover:text-primary text-gray-600'
                            >
                                Login
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default Register;