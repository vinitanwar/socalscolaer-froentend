// app/not-found.js
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-red-600 mb-4">
        ⚙️ Maintenance Mode
      </h1>
      <p className="text-lg  mb-6 max-w-xl">
        We're currently performing scheduled maintenance. The page you're trying
        to access is temporarily unavailable or does not exist.
      </p>
      <Link
        href="/"
        className="bg-black hover:bg-white hover:text-black border  text-white font-semibold px-6 py-2 rounded"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
