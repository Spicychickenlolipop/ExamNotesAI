// import React from 'react'
// import { motion } from "motion/react"
// import { FcGoogle } from "react-icons/fc";
// import { signInWithPopup } from 'firebase/auth';
// import { auth, provider } from '../utils/firebase';
// import { serverUrl } from '../App';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { setUserData } from '../redux/userSlice';

// function Auth() {
//   const dispatch = useDispatch()


//   const handleGoogleAuth = async() => {
//     try{
//       const response = await signInWithPopup(auth, provider);
//       const User = response.user
//       const name = User.displayName
//       const email = User.email
//       const result = await axios.post(serverUrl + "/api/auth/google", {name, email}, {withCredentials:true})

//       dispatch(setUserData(result.data))
//     }catch(error){
//       console.log(error)
//     }
//   }

//   return (
//     <div className='min-h-screen overflow-hidden bg-white text-black px-8'>
//       <motion.header 
//       initial={{opacity:0, y:-15}}
//       animate={{opacity:1, y:0}}
//       transition={{duration:1.5}}
//       className='max-w-7xl mx-auto mt-8
//       rounded-2xl
//        bg-black/80 backdrop-blur-xl
//        border border-white/10
//       px-8 py-6
//       shadow-[0_20px_45px_rgba(0,0,0,0.6)]'>

//         <h1 className='text-2xl font-bold bg-linear-to-r from-white via-gray-300 to-white bg-clip-text text-transparent'>ExamNotes AI</h1>
//         <p className='text-sm text-gray-300 mt-1'>AI-powered exam-oriented notes & revision tools</p>
//       </motion.header>

//       <main className='max-w-7xl mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>

//         {/* left content */}
//         <motion.div
//         initial={{opacity:0, x:-60}}
//         animate={{opacity:1, x:0}}
//         transition={{duration:0.7}}
//       >
//         <h1 className='text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-br from-black/90 via-black/60 to-black/90 bg-clip-text text-transparent'>
//             Unlock Smart <br /> AI Notes
//         </h1>
//         <motion.button 
//         onClick={handleGoogleAuth}
//         whileHover={{
//           y:-10,
//           rotateX:8,
//           rotateY:-8,
//           scale:1.07
//         }}
//         whileTap={{scale:0.97}}
//         transition={{ type:"spring", stiffness:200, damping: 18 }}
//         className='mt-10 px-10 py-3 rounded-xl flex items-center gap-3 bg-gradient-to-br from-black/90 via-black/80 to-black/90 border border-white/10 text-white font-semibold text-lg shadow-[0_25px_60px_rgba(0,0,0,0.7)]'>
//             <FcGoogle />
//             Continue with Google
//         </motion.button>
//         <p className='mt-6 max-w-xl text-lg bg-gradient-to-br from-gray-700 via-gray-500/80 to-gray-700 bg-clip-text text-transparent'>
//         You get <span className='font-semibold'>50 FREE credits</span> to create exam notes, project notes, charts, graphs and download clean PDFs - instantly using AI.
//         </p>
//         <p className='mt-4 text-sm text-gray-500'>Start with 50 free credits • Upgrade anytime for more credits • Instant access</p>
//         </motion.div>


//         {/* right content */}
//         <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
//           <Feature icon="🎁" title="50 Free Credits" des="Start with 50 credits to generate notes without paying."/>
//           <Feature icon="📘" title="Exam Notes" des="High-yield, revision-ready exam-oriented notes."/>
//           <Feature icon="📂" title="Project Notes" des="Well-structured documentation for assignments & projects."/>
//           <Feature icon="📊" title="Charts & Graphs" des="Auto-generated diagrams, charts and graphs."/>
//           <Feature icon="⬇️" title="Free PDF Download" des="Download clean, printable PDFs instantly."/>
//         </div>

//       </main>



//     </div>
//   )
// }
// function Feature({icon, title, des}){
//   return (
//     <motion.div 
//     whileHover={{y: -12, rotateX: 8, rotateY: -8, scale: 1.05}}
//     transition={{type:"spring", stiffness:200, damping: 18}}
//     className='relative rounded-2xl p-6 bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-2xl
//     border border-white/10
//     shadow-[0_30px_80px_rgba(0,0,0,0.7)]
//     text-white'
//     style={{ transformStyle: "preserve-3d"}}
//     >
//         {/* <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none'/> */}
//             <div className='relative z-10' style={{transform: "translateZ(30px)"}}>
//                 <div className='text-4xl mb-3'>{icon}</div>
//                 <div className='text-lg font-semibold mb-2'>{title}</div>
//                 <div className='text-gray-300 text-sm leading-relaxed'>{des}</div>
//             </div>
        
//     </motion.div>
//   )
// }
// export default Auth




















// import React from 'react'
// import { motion } from "motion/react"
// import { FcGoogle } from "react-icons/fc";
// import { signInWithPopup } from 'firebase/auth';
// import { auth, provider } from '../utils/firebase';
// import { serverUrl } from '../App';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { setUserData } from '../redux/userSlice';

// function Auth() {
//   const dispatch = useDispatch()

//   const handleGoogleAuth = async() => {
//     try{
//       const response = await signInWithPopup(auth, provider);
//       const User = response.user
//       const name = User.displayName
//       const email = User.email
//       const result = await axios.post(serverUrl + "/api/auth/google", {name, email}, {withCredentials:true})

//       dispatch(setUserData(result.data))
//     }catch(error){
//       console.log(error)
//     }
//   }

//   return (
//     <div className='min-h-screen bg-[#0b0b0f] text-white overflow-hidden relative'>

//       {/* Animated Background */}
//       <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>

//         <motion.div
//           animate={{ x: [0, 80, -40, 0], y: [0, 60, -60, 0] }}
//           transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
//           className='absolute w-[500px] h-[500px] bg-purple-600/30 blur-[140px] top-[-100px] left-[-100px]'
//         />

//         <motion.div
//           animate={{ x: [0, -60, 40, 0], y: [0, -80, 40, 0] }}
//           transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
//           className='absolute w-[500px] h-[500px] bg-blue-600/30 blur-[140px] bottom-[-100px] right-[-100px]'
//         />

//         <motion.div
//           animate={{ opacity: [0.2, 0.4, 0.2] }}
//           transition={{ duration: 6, repeat: Infinity }}
//           className='absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2'
//         />
//       </div>

//       {/* Grid */}
//       <div className='absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]' />

//       {/* CONTENT */}
//       <div className='relative z-10 flex items-center justify-center min-h-screen px-6'>

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className='w-full max-w-md'
//         >

//           {/* BADGE */}
//           <div className='flex justify-center mb-6'>
//             <div className='px-4 py-1 text-xs border border-white/10 rounded-full text-gray-400 backdrop-blur-md'>
//               AI Powered Platform
//             </div>
//           </div>

//           {/* TITLE */}
//           <div className='text-center mb-8'>
//             <h1 className='text-3xl font-bold tracking-tight'>
//               <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
//                 ExamNotes AI
//               </span>
//             </h1>
//             <p className='text-gray-400 mt-2 text-sm'>
//               Generate structured notes, diagrams and PDFs instantly
//             </p>
//           </div>

//           {/* LOGIN CARD */}
//           <div className='relative p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-transparent'>
//             <div className='bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)]'>

//               <h2 className='text-lg font-medium mb-6 text-center text-gray-200'>
//                 Continue to your account
//               </h2>

//               <motion.button 
//                 onClick={handleGoogleAuth}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className='w-full flex items-center justify-center gap-3 px-6 py-3 rounded-lg 
//                 bg-white text-black font-medium shadow-md hover:shadow-lg transition-all'
//               >
//                 <FcGoogle />
//                 Continue with Google
//               </motion.button>

//               {/* Divider */}
//               <div className='flex items-center gap-3 my-6'>
//                 <div className='flex-1 h-[1px] bg-white/10'></div>
//                 <span className='text-xs text-gray-500'>secure login</span>
//                 <div className='flex-1 h-[1px] bg-white/10'></div>
//               </div>

//               {/* Info */}
//               <p className='text-sm text-gray-400 text-center leading-relaxed'>
//                 Get free credits to generate notes, diagrams and downloadable PDFs instantly.
//               </p>

//             </div>
//           </div>

//           {/* FEATURE ROW */}
//           <div className='mt-10 grid grid-cols-3 gap-4 text-center text-xs text-gray-400'>
//             <div className='border border-white/10 rounded-lg py-3 backdrop-blur-md'>
//               Fast Generation
//             </div>
//             <div className='border border-white/10 rounded-lg py-3 backdrop-blur-md'>
//               Clean Structure
//             </div>
//             <div className='border border-white/10 rounded-lg py-3 backdrop-blur-md'>
//               Export Ready
//             </div>
//           </div>

//           {/* FOOT NOTE */}
//           <p className='text-center text-xs text-gray-500 mt-6'>
//             By continuing, you agree to our terms and privacy policy.
//           </p>

//         </motion.div>
//       </div>
//     </div>
//   )
// }

// export default Auth











// import React from 'react'
// import { motion } from "motion/react"
// import { FcGoogle } from "react-icons/fc";
// import { signInWithPopup } from 'firebase/auth';
// import { auth, provider } from '../utils/firebase';
// import { serverUrl } from '../App';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { setUserData } from '../redux/userSlice';

// function Auth() {
//   const dispatch = useDispatch()

//   const handleGoogleAuth = async() => {
//     try{
//       const response = await signInWithPopup(auth, provider);
//       const User = response.user
//       const name = User.displayName
//       const email = User.email
//       const result = await axios.post(serverUrl + "/api/auth/google", {name, email}, {withCredentials:true})

//       dispatch(setUserData(result.data))
//     }catch(error){
//       console.log(error)
//     }
//   }

//   return (
//     <div className='min-h-screen bg-[#0b0b0f] text-white overflow-hidden relative'>

//       {/* Animated Background */}
//       <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
//         <motion.div
//           animate={{ x: [0, 80, -40, 0], y: [0, 60, -60, 0] }}
//           transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
//           className='absolute w-[500px] h-[500px] bg-purple-600/30 blur-[140px] top-[-100px] left-[-100px]'
//         />
//         <motion.div
//           animate={{ x: [0, -60, 40, 0], y: [0, -80, 40, 0] }}
//           transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
//           className='absolute w-[500px] h-[500px] bg-blue-600/30 blur-[140px] bottom-[-100px] right-[-100px]'
//         />
//         <motion.div
//           animate={{ opacity: [0.2, 0.4, 0.2] }}
//           transition={{ duration: 6, repeat: Infinity }}
//           className='absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2'
//         />
//       </div>

//       {/* Grid */}
//       <div className='absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]' />

//       {/* MAIN */}
//       <div className='relative z-10 max-w-7xl mx-auto px-8 min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>

//         {/* LEFT SIDE (HERO) */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className='mb-6'>
//             <span className='text-sm border border-white/10 px-3 py-1 rounded-full text-gray-400 backdrop-blur-md'>
//               AI Powered Learning
//             </span>
//           </div>

//           <h1 className='text-5xl lg:text-6xl font-bold leading-tight tracking-tight'>
//             Generate Exam Notes <br />
//             <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
//               Faster with AI
//             </span>
//           </h1>

//           <p className='mt-6 text-gray-400 max-w-lg text-lg leading-relaxed'>
//             Turn your lectures, PDFs and topics into structured, exam-ready notes,
//             diagrams and downloadable content instantly.
//           </p>

//           {/* FEATURES INLINE */}
//           <div className='mt-10 space-y-4 text-gray-400 text-sm'>
//             <div className='flex items-center gap-3'>
//               <div className='w-2 h-2 bg-purple-400 rounded-full'></div>
//               Smart structured notes
//             </div>
//             <div className='flex items-center gap-3'>
//               <div className='w-2 h-2 bg-blue-400 rounded-full'></div>
//               Diagrams and visual explanations
//             </div>
//             <div className='flex items-center gap-3'>
//               <div className='w-2 h-2 bg-indigo-400 rounded-full'></div>
//               Instant PDF export
//             </div>
//           </div>
//         </motion.div>

//         {/* RIGHT SIDE (AUTH CARD) */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className='flex justify-center'
//         >

//           <div className='w-full max-w-md'>

//             <div className='relative p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-transparent'>
//               <div className='bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)]'>

//                 <h2 className='text-xl font-semibold mb-6 text-center'>
//                   Continue to your account
//                 </h2>

//                 <motion.button 
//                   onClick={handleGoogleAuth}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className='w-full flex items-center justify-center gap-3 px-6 py-3 rounded-lg 
//                   bg-white text-black font-medium shadow-md hover:shadow-lg transition-all'
//                 >
//                   <FcGoogle />
//                   Continue with Google
//                 </motion.button>

//                 <p className='mt-6 text-sm text-gray-400 text-center leading-relaxed'>
//                   Get free credits to generate notes, diagrams and PDFs instantly.
//                 </p>

//               </div>
//             </div>

//             <p className='text-center text-xs text-gray-500 mt-6'>
//               Secure authentication powered by Google
//             </p>

//           </div>
//         </motion.div>

//       </div>
//     </div>
//   )
// }

// export default Auth












// import React from 'react'
// import { motion } from "motion/react"
// import { FcGoogle } from "react-icons/fc";
// import { signInWithPopup } from 'firebase/auth';
// import { auth, provider } from '../utils/firebase';
// import { serverUrl } from '../App';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { setUserData } from '../redux/userSlice';
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

// function Auth() {
//   const dispatch = useDispatch()

//   const handleGoogleAuth = async() => {
//     try{
//       const response = await signInWithPopup(auth, provider);
//       const User = response.user
//       const name = User.displayName
//       const email = User.email
//       const result = await axios.post(serverUrl + "/api/auth/google", {name, email}, {withCredentials:true})

//       dispatch(setUserData(result.data))
//     }catch(error){
//       console.log(error)
//     }
//   }

//   return (
//     <div className='min-h-screen bg-[#0b0b0f] text-white overflow-hidden relative flex flex-col'>

//       {/* Animated Background */}
//       <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
//         <motion.div
//           animate={{ x: [0, 80, -40, 0], y: [0, 60, -60, 0] }}
//           transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
//           className='absolute w-[500px] h-[500px] bg-purple-600/30 blur-[140px] top-[-100px] left-[-100px]'
//         />
//         <motion.div
//           animate={{ x: [0, -60, 40, 0], y: [0, -80, 40, 0] }}
//           transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
//           className='absolute w-[500px] h-[500px] bg-blue-600/30 blur-[140px] bottom-[-100px] right-[-100px]'
//         />
//         <motion.div
//           animate={{ opacity: [0.2, 0.4, 0.2] }}
//           transition={{ duration: 6, repeat: Infinity }}
//           className='absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2'
//         />
//       </div>

//       {/* Grid */}
//       <div className='absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]' />

//       {/* HEADER */}
//       <Navbar />

//       {/* MAIN */}
//       <div className='relative z-10 flex-1 max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>

//         {/* LEFT SIDE */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className='mb-6'>
//             <span className='text-sm border border-white/10 px-3 py-1 rounded-full text-gray-400 backdrop-blur-md'>
//               AI Powered Learning
//             </span>
//           </div>

//           <h1 className='text-5xl lg:text-6xl font-bold leading-tight tracking-tight'>
//             Generate Exam Notes <br />
//             <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
//               Faster with AI
//             </span>
//           </h1>

//           <p className='mt-6 text-gray-400 max-w-lg text-lg leading-relaxed'>
//             Turn your lectures, PDFs and topics into structured, exam-ready notes,
//             diagrams and downloadable content instantly.
//           </p>

//           <div className='mt-10 space-y-4 text-gray-400 text-sm'>
//             <div className='flex items-center gap-3'>
//               <div className='w-2 h-2 bg-purple-400 rounded-full'></div>
//               Smart structured notes
//             </div>
//             <div className='flex items-center gap-3'>
//               <div className='w-2 h-2 bg-blue-400 rounded-full'></div>
//               Diagrams and visual explanations
//             </div>
//             <div className='flex items-center gap-3'>
//               <div className='w-2 h-2 bg-indigo-400 rounded-full'></div>
//               Instant PDF export
//             </div>
//           </div>
//         </motion.div>

//         {/* RIGHT SIDE (AUTH CARD) */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className='flex justify-center'
//         >
//           <div className='w-full max-w-md'>

//             <div className='relative p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-transparent'>
//               <div className='bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)]'>

//                 <h2 className='text-xl font-semibold mb-6 text-center'>
//                   Continue to your account
//                 </h2>

//                 <motion.button 
//                   onClick={handleGoogleAuth}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className='w-full flex items-center justify-center gap-3 px-6 py-3 rounded-lg 
//                   bg-white text-black font-medium shadow-md hover:shadow-lg transition-all'
//                 >
//                   <FcGoogle />
//                   Continue with Google
//                 </motion.button>

//                 <p className='mt-6 text-sm text-gray-400 text-center leading-relaxed'>
//                   Get free credits to generate notes, diagrams and PDFs instantly.
//                 </p>

//               </div>
//             </div>

//             <p className='text-center text-xs text-gray-500 mt-6'>
//               Secure authentication powered by Google
//             </p>

//           </div>
//         </motion.div>

//       </div>

//       {/* FOOTER */}
//       <Footer />

//     </div>
//   )
// }

// export default Auth












// import React from 'react'
// import { motion } from "motion/react"
// import { FcGoogle } from "react-icons/fc";
// import { signInWithPopup } from 'firebase/auth';
// import { auth, provider } from '../utils/firebase';
// import { serverUrl } from '../App';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { setUserData } from '../redux/userSlice';
// import Footer from '../components/Footer'

// function Auth() {
//   const dispatch = useDispatch()

//   const handleGoogleAuth = async() => {
//     try{
//       const response = await signInWithPopup(auth, provider);
//       const User = response.user
//       const name = User.displayName
//       const email = User.email
//       const result = await axios.post(serverUrl + "/api/auth/google", {name, email}, {withCredentials:true})

//       dispatch(setUserData(result.data))
//     }catch(error){
//       console.log(error)
//     }
//   }

//   return (
//     <div className='min-h-screen bg-[#0b0b0f] text-white overflow-hidden relative flex flex-col'>

//       {/* Animated Background */}
//       <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
//         <motion.div
//           animate={{ x: [0, 80, -40, 0], y: [0, 60, -60, 0] }}
//           transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
//           className='absolute w-[500px] h-[500px] bg-purple-600/30 blur-[140px] top-[-100px] left-[-100px]'
//         />
//         <motion.div
//           animate={{ x: [0, -60, 40, 0], y: [0, -80, 40, 0] }}
//           transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
//           className='absolute w-[500px] h-[500px] bg-blue-600/30 blur-[140px] bottom-[-100px] right-[-100px]'
//         />
//         <motion.div
//           animate={{ opacity: [0.2, 0.4, 0.2] }}
//           transition={{ duration: 6, repeat: Infinity }}
//           className='absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2'
//         />
//       </div>

//       {/* Grid overlay */}
//       <div className='absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]' />

//       {/* MAIN */}
//       <div className='relative z-10 flex-1 max-w-7xl mx-auto px-8 pt-20 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>

//         {/* LEFT SIDE */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className='mb-6'>
//             <span className='text-sm border border-white/10 px-3 py-1 rounded-full text-gray-400 backdrop-blur-md'>
//               AI Powered Learning
//             </span>
//           </div>

//           <h1 className='text-5xl lg:text-6xl font-bold leading-tight tracking-tight'>
//             Generate Exam Notes <br />
//             <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
//               Faster with AI
//             </span>
//           </h1>

//           <p className='mt-6 text-gray-400 max-w-lg text-lg leading-relaxed'>
//             Turn your lectures, PDFs and topics into structured, exam-ready notes,
//             diagrams and downloadable content instantly.
//           </p>

//           <div className='mt-10 space-y-4 text-gray-400 text-sm'>
//             <div className='flex items-center gap-3'>
//               <div className='w-2 h-2 bg-purple-400 rounded-full'></div>
//               Smart structured notes
//             </div>
//             <div className='flex items-center gap-3'>
//               <div className='w-2 h-2 bg-blue-400 rounded-full'></div>
//               Diagrams and visual explanations
//             </div>
//             <div className='flex items-center gap-3'>
//               <div className='w-2 h-2 bg-indigo-400 rounded-full'></div>
//               Instant PDF export
//             </div>
//           </div>
//         </motion.div>

//         {/* RIGHT SIDE */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className='flex justify-center'
//         >
//           <div className='w-full max-w-md'>

//             <div className='relative p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-transparent'>
//               <div className='bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)]'>

//                 <h2 className='text-xl font-semibold mb-6 text-center'>
//                   Continue to your account
//                 </h2>

//                 <motion.button 
//                   onClick={handleGoogleAuth}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className='w-full flex items-center justify-center gap-3 px-6 py-3 rounded-lg 
//                   bg-white text-black font-medium shadow-md hover:shadow-lg transition-all'
//                 >
//                   <FcGoogle />
//                   Continue with Google
//                 </motion.button>

//                 <p className='mt-6 text-sm text-gray-400 text-center leading-relaxed'>
//                   Get free credits to generate notes, diagrams and PDFs instantly.
//                 </p>

//               </div>
//             </div>

//             <p className='text-center text-xs text-gray-500 mt-6'>
//               Secure authentication powered by Google
//             </p>

//           </div>
//         </motion.div>

//       </div>

//       {/* FOOTER */}
//       <div className='mt-10'>
//         <Footer />
//       </div>

//     </div>
//   )
// }

// export default Auth










// import React from 'react'
// import { motion } from "motion/react"
// import { FcGoogle } from "react-icons/fc";
// import { signInWithPopup } from 'firebase/auth';
// import { auth, provider } from '../utils/firebase';
// import { serverUrl } from '../App';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { setUserData } from '../redux/userSlice';
// import { useNavigate } from 'react-router-dom'
// import Footer from '../components/Footer'
// import logo from "../assets/logo.png"

// function Auth() {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   const handleGoogleAuth = async() => {
//     try{
//       const response = await signInWithPopup(auth, provider);
//       const User = response.user
//       const name = User.displayName
//       const email = User.email
//       const result = await axios.post(serverUrl + "/api/auth/google", {name, email}, {withCredentials:true})

//       dispatch(setUserData(result.data))
//     }catch(error){
//       console.log(error)
//     }
//   }

//   return (
//     <div className='min-h-screen bg-[#0b0b0f] text-white overflow-hidden relative flex flex-col'>

//       {/* Animated Background */}
//       <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
//         <motion.div
//           animate={{ x: [0, 80, -40, 0], y: [0, 60, -60, 0] }}
//           transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
//           className='absolute w-[500px] h-[500px] bg-purple-600/30 blur-[140px] top-[-100px] left-[-100px]'
//         />
//         <motion.div
//           animate={{ x: [0, -60, 40, 0], y: [0, -80, 40, 0] }}
//           transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
//           className='absolute w-[500px] h-[500px] bg-blue-600/30 blur-[140px] bottom-[-100px] right-[-100px]'
//         />
//         <motion.div
//           animate={{ opacity: [0.2, 0.4, 0.2] }}
//           transition={{ duration: 6, repeat: Infinity }}
//           className='absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2'
//         />
//       </div>

//       {/* Grid */}
//       <div className='absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]' />

//       {/* HEADER (NEW) */}
//       <motion.div
//         initial={{opacity:0, y:-15}}
//         animate={{opacity:1, y:0}}
//         transition={{duration:0.6}}
//         className='relative z-20 mx-6 mt-6
//         rounded-2xl
//         bg-white/5 backdrop-blur-xl
//         border border-white/10
//         px-8 py-4
//         shadow-[0_20px_60px_rgba(0,0,0,0.6)]
//         flex items-center justify-between'
//       >
//         <div 
//           onClick={()=>navigate("/")}
//           className='flex items-center gap-3 cursor-pointer'
//         >
//           <img src={logo} alt="logo" className='w-9 h-9'/>
//           <span className='text-lg font-semibold tracking-tight'>
//             ExamNotes <span className='text-gray-400'>AI</span>
//           </span>
//         </div>
//       </motion.div>

//       {/* MAIN */}
//       <div className='relative z-10 flex-1 max-w-7xl mx-auto px-8 pt-20 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>

//         {/* LEFT */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className='mb-6'>
//             <span className='text-sm border border-white/10 px-3 py-1 rounded-full text-gray-400 backdrop-blur-md'>
//               AI Powered Learning
//             </span>
//           </div>

//           <h1 className='text-5xl lg:text-6xl font-bold leading-tight tracking-tight'>
//             Generate Exam Notes <br />
//             <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
//               Faster with AI
//             </span>
//           </h1>

//           <p className='mt-6 text-gray-400 max-w-lg text-lg leading-relaxed'>
//             Turn your lectures, PDFs and topics into structured, exam-ready notes,
//             diagrams and downloadable content instantly.
//           </p>
//         </motion.div>

//         {/* RIGHT */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className='flex justify-center'
//         >
//           <div className='w-full max-w-md'>

//             <div className='relative p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-transparent'>
//               <div className='bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)]'>

//                 <h2 className='text-xl font-semibold mb-6 text-center'>
//                   Continue to your account
//                 </h2>

//                 <motion.button 
//                   onClick={handleGoogleAuth}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className='w-full flex items-center justify-center gap-3 px-6 py-3 rounded-lg 
//                   bg-white text-black font-medium shadow-md hover:shadow-lg transition-all'
//                 >
//                   <FcGoogle />
//                   Continue with Google
//                 </motion.button>

//                 <p className='mt-6 text-sm text-gray-400 text-center leading-relaxed'>
//                   Get free credits to generate notes, diagrams and PDFs instantly.
//                 </p>

//               </div>
//             </div>

//           </div>
//         </motion.div>

//       </div>

//       {/* FOOTER */}
//       <div className='mt-10'>
//         <Footer />
//       </div>

//     </div>
//   )
// }

// export default Auth




















import React from 'react'
import { motion } from "motion/react"
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../utils/firebase';
import { serverUrl } from '../App';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import logo from "../assets/logo.png"

function Auth() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleGoogleAuth = async() => {
    try{
      const response = await signInWithPopup(auth, provider);
      const User = response.user
      const name = User.displayName
      const email = User.email
      const result = await axios.post(serverUrl + "/api/auth/google", {name, email}, {withCredentials:true})

      dispatch(setUserData(result.data))
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className='min-h-screen bg-[#0b0b0f] text-white overflow-hidden relative flex flex-col'>

      {/* 🔥 Smooth Continuous Animated Background */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>

        <motion.div
          animate={{
            x: [0, 100, -80, 60, 0],
            y: [0, -80, 60, -40, 0],
            scale: [1, 1.2, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className='absolute w-[600px] h-[600px] bg-purple-600/30 blur-[160px] top-[-150px] left-[-150px]'
        />

        <motion.div
          animate={{
            x: [0, -120, 80, -60, 0],
            y: [0, 100, -60, 40, 0],
            scale: [1, 0.9, 1.2, 1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className='absolute w-[600px] h-[600px] bg-blue-600/30 blur-[160px] bottom-[-150px] right-[-150px]'
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className='absolute w-[500px] h-[500px] bg-indigo-500/20 blur-[140px] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'
        />

      </div>

      {/* Grid overlay */}
      <div className='absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]' />

      {/* HEADER */}
      <motion.div
        initial={{opacity:0, y:-15}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.6}}
        className='relative z-20 mx-6 mt-6
        rounded-2xl
        bg-white/5 backdrop-blur-xl
        border border-white/10
        px-8 py-4
        shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        flex items-center'
      >
        <div 
          onClick={()=>navigate("/")}
          className='flex items-center gap-3 cursor-pointer'
        >
          <img src={logo} alt="logo" className='w-9 h-9'/>
          <span className='text-lg font-semibold tracking-tight'>
            ExamNotes <span className='text-gray-400'>AI</span>
          </span>
        </div>
      </motion.div>

      {/* MAIN */}
      <div className='relative z-10 flex-1 max-w-7xl mx-auto px-8 pt-20 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className='mb-6'>
            <span className='text-sm border border-white/10 px-3 py-1 rounded-full text-gray-400 backdrop-blur-md'>
              AI Powered Learning
            </span>
          </div>

          <h1 className='text-5xl lg:text-6xl font-bold leading-tight tracking-tight'>
            Generate Exam Notes <br />
            <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
              Faster with AI
            </span>
          </h1>

          <p className='mt-6 text-gray-400 max-w-lg text-lg leading-relaxed'>
            Turn your lectures, PDFs and topics into structured, exam-ready notes,
            diagrams and downloadable content instantly.
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='flex justify-center'
        >
          <div className='w-full max-w-md'>

            <div className='relative p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-transparent'>
              <div className='bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)]'>

                <h2 className='text-xl font-semibold mb-6 text-center'>
                  Continue to your account
                </h2>

                <motion.button 
                  onClick={handleGoogleAuth}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='w-full flex items-center justify-center gap-3 px-6 py-3 rounded-lg 
                  bg-white text-black font-medium shadow-md hover:shadow-lg transition-all'
                >
                  <FcGoogle />
                  Continue with Google
                </motion.button>

                <p className='mt-6 text-sm text-gray-400 text-center leading-relaxed'>
                  Get free credits to generate notes, diagrams and PDFs instantly.
                </p>

              </div>
            </div>

          </div>
        </motion.div>

      </div>

      {/* FOOTER */}
      <div className='mt-10'>
        <Footer />
      </div>

    </div>
  )
}

export default Auth