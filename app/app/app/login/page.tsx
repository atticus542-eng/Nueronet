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
        <h1 className="text-xl font-semibold
