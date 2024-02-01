import Link from "next/link"

export default function Header(){


    return (
        <header className="shadow-lg bg-white mb-4">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <Link href='/'><h1 className="text-2xl">Blog</h1></Link>
            <nav className="space-x-4">
                <Link href="/" className="py-3 px-4 text-blue-500 hover:bg-gray-200">Home</Link>
                <Link href="/About" className="py-3 px-4 text-blue-500 hover:bg-gray-200">About</Link>
                <Link href="/Contact" className="py-3 px-4 text-blue-500 hover:bg-gray-200">Contact</Link>
            </nav>
        </div>
    </header>
    )
}