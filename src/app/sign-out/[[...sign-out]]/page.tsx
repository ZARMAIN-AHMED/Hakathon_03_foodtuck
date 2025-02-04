import { SignOutButton } from '@clerk/nextjs'

export default function Page() {
  return <div className='justify-center items-center flex my-28 gap-2 px-6 py-3 text-white bg-gradient-to-r from-black to-black rounded-3xl shadow-md hover:from-black
   hover:to-red-700 active:scale-95 focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-transform w-48 mx-auto bg-gray-100'>  <SignOutButton/></div>
}
