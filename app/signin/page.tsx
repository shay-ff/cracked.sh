"use client";
import { useRouter } from "next/navigation";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../lib/firebase";

export default function LoginPage() {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      
    <button
      onClick={handleGoogleLogin}
      className="bg-gray-500 hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded w-full flex items-center justify-center gap-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 48 48"
      >
        <g>
        <path
          fill="#4285F4"
          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.61l6.88-6.88C36.67 2.36 30.8 0 24 0 14.82 0 6.71 5.48 2.69 13.44l8.06 6.26C12.7 13.38 17.89 9.5 24 9.5z"
        />
        <path
          fill="#34A853"
          d="M46.14 24.55c0-1.64-.15-3.21-.42-4.73H24v9.01h12.42c-.54 2.91-2.19 5.38-4.67 7.04l7.19 5.59C43.98 37.09 46.14 31.36 46.14 24.55z"
        />
        <path
          fill="#FBBC05"
          d="M10.75 28.7c-1.13-3.38-1.13-7.02 0-10.4l-8.06-6.26C-1.07 17.13-1.07 30.87 2.69 34.56l8.06-6.26z"
        />
        <path
          fill="#EA4335"
          d="M24 48c6.48 0 11.93-2.14 15.9-5.84l-7.19-5.59c-2.01 1.35-4.59 2.13-8.71 2.13-6.11 0-11.3-3.88-13.25-9.2l-8.06 6.26C6.71 42.52 14.82 48 24 48z"
        />
        <path fill="none" d="M0 0h48v48H0z" />
        </g>
      </svg>
      Sign In with Google
    </button>
    </div>
  );
}