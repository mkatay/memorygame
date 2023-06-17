import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'


export default defineConfig({
  plugins: [
    UnoCSS({
      shortcuts:[ 
        {app:'bg-gradient-to-b from-blue-50 to-blue-600 w-full min-h-full absolute top-0 left-0 z-0'} ,
        {h1:'text-center text-3xl font-extrabold  mb-5'},
        {btn: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-5'},
        {myInput:' bg-gray-50 b b-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'},
        {s2:'w-[11vw] h-[11vw] text-[9vw] bg-gray-200 p-1 justify-center items-center rd-2'},
        {s4:'w-[7vw] h-[7vw] text-[5vw] bg-gray-200 p-1 justify-center items-center rd-2'},
        {sSmall:'w-[6vw] h-[6vw] text-[4vw] bg-gray-200 p-1 justify-center items-center rd-2'}
      ],
      
    }),
    react()],
})
