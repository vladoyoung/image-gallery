import React, { useState } from 'react'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from 'react-router-dom'

function AuthenticationForm({ type }: { type: string }) {
    const navigate = useNavigate()  
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
  
    // Handlesubmit to be implemented with firebase auth
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      try {
        if ( type === 'signup' ) {
            await createUserWithEmailAndPassword(auth, email, password);
        } else {
            await signInWithEmailAndPassword(auth, email, password);
        }
        navigate('/')
      } catch (error) {
        setError(error.message)
      }
    }
    return (
        <div className="hero min-h-screen bg-base-200 flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit} className='max-w-sm w-full'>
                <div className="">
                    <div className="hero-content flex-col">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold">Image Gallery</h1>
                            {type === 'signup' ?
                                <p className="py-6">Sign up to share your photos!</p>
                            :
                                <p className="py-6">Login to share your photos!</p>
                            }
                        </div>
                        {error &&
                            <div className="alert alert-error">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{error}</span>
                            </div>
                        }
                        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="email"
                                    className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="password"
                                    className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">
                                        {type === 'signup' ? 'Sign up' : 'Login'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <p>or</p>
            <a href={type === 'signup' ? '/login' : '/signup'} className="btn btn-primary btn-sm mt-2">
                {type === 'signup' ? 'Login' : 'Sign up'}
            </a>
        </div>
    )
}

export default AuthenticationForm