import { useRouter } from 'next/router';
import Image from 'next/image'
import React from 'react'

function Footer() {
  const router = useRouter();
  return (
    <div>
        <footer className="flex items-center justify-center">
            <ul className="flex">
              <li>
              <svg onClick={() =>router.push("")}
  className="w-6 h-6 text-blue-500 hover:text-black fill-current cursor-pointer"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 448 512">
  <path
    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
  ></path>
</svg>
 
</li>
<li>
<svg  onClick={() =>router.push("")}
  className="w-6 h-6 text-blue-300  hover:text-black fill-current cursor-pointer"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24">
  <path
    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
  />
</svg>
</li>
<li>
  <div className="w-6 h-6 hover:text-black cursor-pointer">
    <Image 
    src="data:image/jpeg;base64,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"
    onClick={() =>router.push("")}
    className="w-6 h-6 hover:text-black cursor-pointer"
   alt=" "/>
  </div>
</li>
            </ul>
            </footer>
    </div>
  )
}

export default Footer