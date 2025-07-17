import Header from "./components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4 text-center gap-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Video with AI</h1>
        <p className="text-lg mb-8">Sign in or register to start sharing and watching videos!</p>
        <div className="flex gap-4">
          <Link href="/login" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Login</Link>
          <Link href="/register" className="px-6 py-2 bg-gray-200 text-gray-900 rounded hover:bg-gray-300 transition">Register</Link>
        </div>
      </main>
    </div>
  );
}
