"use client"
import { useRouter } from "next/navigation";

export default function Setting() {

  const router = useRouter()

  const back = () => {
    router.push('/Dashboard')
  }
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <button onClick={back} className="px-4 py-2 border-none bg-slate-400 hover:bg-slate-100 rounded">Back</button>
        <h1 className='text-3xl font-serif font-bold-2xl'>Welcome to Setting Page</h1>
      </main>
    );
  }