'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const signIn = async () => {
    const { error } = await supabase.auth.signInWithOtp({
      email,
    })

    if (error) {
      setMessage(error.message)
    } else {
      setMessage('Check your email for the login link 💙')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F9F8]">
      <div className="bg-white p-6 rounded-xl shadow w-full max-w-sm">
        <h1 className="text-xl font-semibold mb-2">
          Welcome to NeuroNest
        </h1>

        <p className="text-sm text-gray-600 mb-4">
          Support, guidance, and community for parents
        </p>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded mb-3"
        />

        <button
          onClick={signIn}
          className="w-full bg-slate-700 text-white py-2 rounded"
        >
          Sign in / Sign up
        </button>

        {message && (
          <p className="text-sm text-center mt-3">
            {message}
          </p>
        )}
      </div>
    </div>
  )
}
