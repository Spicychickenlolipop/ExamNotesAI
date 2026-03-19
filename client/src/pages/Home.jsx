// import React from 'react'
// import Navbar from '../components/Navbar'
// import { motion } from "motion/react"
// import { MotionConfig, transform } from 'motion/react'
// import img from "../assets/img1.png"
// import Footer from '../components/Footer'
// import { useNavigate } from 'react-router-dom'

// function Home() {
//   const navigate = useNavigate();
//   return (
//     <div className='min-h-screen overflow-hidden bg-white text-black'>
//       <Navbar/>
//       {/* top */}
//       <section className='max-w-7xl mx-auto px-8 pt-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
//           <div>
//               <motion.div
//                 initial={{opacity: 0, x: -60}}
//                 animate={{opacity: 1, x:0}}
//                 transition={{duration: 0.7}}
//                 whileHover={{ rotateX: 6, rotateY: -6}}
//                 className="tranform-gpu" style={{transformStyle: "preserve-3d"}}
//               >
//                 <motion.h1 className="text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-br from-black/90 via-black/60 to-black/90 bg-clip-text text-transparent"
//                   whileHover={{y:-4}}
//                   style={{
//                     transform: "translateZ(40px)",
//                     textShadow: "0 18px 40px rgba(0,0,0,0.25)",
//                   }}
//                 >
//                     Create Smart <br /> AI Notes in Seconds
//                 </motion.h1>

//                 <motion.p whileHover={{ y:-2}}
//                   className='mt-6 max-w-xl text-lg bg-gradient-to-br from-gray-700 via-gray-500/80 to-gray-700 bg-clip-text text-transparent'
//                   style={{
//                     transform: "translateZ(40px)",
//                     textShadow: "0 18px 40px rgba(0,0,0,0.25)",
//                   }}
//                 >
//                     Generate exam-focused notes, project documentation, flow diagrams and revision-ready content using AI - faster, cleaner and smarter.
//                 </motion.p>
//               </motion.div>

//               <motion.button 
//                        onClick={()=>navigate("/notes")}
//                         whileHover={{
//                           // y:-10,
//                           // rotateX:8,
//                           // rotateY:-8,
//                           scale:1.07
//                         }}
//                         whileTap={{scale:0.97}}
//                         // transition={{ type:"spring", stiffness:200, damping: 18 }}
//                         className='mt-10 px-10 py-3 rounded-xl flex items-center gap-3 bg-gradient-to-br from-black/90 via-black/80 to-black/90 border border-white/10 text-white font-semibold text-lg shadow-[0_25px_60px_rgba(0,0,0,0.7)]'>
                           
//                             Get Started
//               </motion.button>

//           </div>


//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             whileHover={{
//               y: -12,
//               rotateX: 8,
//               rotateY: -8,
//               scale: 1.05,
//             }}
//             className='transform-gpu'
//             style={{ transformStyle: "preserve-3d"}}
//           >
//             <div className='overflow-hidden'>
//               <img src={img} alt="img"
//                 style={{ transform: "translateZ(35px)"}}
//               />
//             </div>

//           </motion.div>
//       </section>

//       {/* bottom */}
//       <section className='max-w-6xl mx-auto px-8 py-32 grid grid-cols-1 md:grid-cols-4 gap-10'>
//         <Feature icon="📘" title='Exam Notes' des="High-yield exam-oriented notes with revision points."/>
//         <Feature icon="📂" title='Project Notes' des="Well-structured content for assignments and projects."/>
//         <Feature icon="📊" title='Diagrams' des="Auto-generated visual diagrams for clarity."/>
//         <Feature icon="⬇️" title='PDF Download' des="Download clean, printable PDFs instantly."/>
//       </section>
//       <Footer/>
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

// export default Home







































// import React from 'react'
// import Navbar from '../components/Navbar'
// import { motion } from "motion/react"
// import img from "../assets/img1.png"
// import Footer from '../components/Footer'
// import { useNavigate } from 'react-router-dom'

// function Home() {
//   const navigate = useNavigate();

//   return (
//     <div className='min-h-screen bg-[#0b0b0f] text-white overflow-hidden relative'>

//       {/* Background Effects */}
//       <div className='absolute top-0 left-0 w-full h-full'>
//         <div className='absolute w-[500px] h-[500px] bg-purple-600/30 blur-[140px] top-[-100px] left-[-100px]' />
//         <div className='absolute w-[500px] h-[500px] bg-blue-600/30 blur-[140px] bottom-[-100px] right-[-100px]' />
//       </div>

//       <Navbar/>

//       {/* HERO */}
//       <section className='relative z-10 max-w-7xl mx-auto px-8 pt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>

//         {/* LEFT */}
//         <div>
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className='text-5xl lg:text-6xl font-bold leading-tight tracking-tight'
//           >
//             AI Powered <br />
//             <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
//               Exam Notes
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className='mt-6 text-gray-400 max-w-lg text-lg leading-relaxed'
//           >
//             Generate structured notes, diagrams and revision-ready content instantly.
//             Designed for speed, clarity and productivity.
//           </motion.p>

//           <div className='flex gap-4 mt-10'>
//             <motion.button
//               onClick={()=>navigate("/notes")}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className='px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 
//               text-white font-medium shadow-lg shadow-purple-900/40'
//             >
//               Get Started
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className='px-8 py-3 rounded-lg border border-white/10 text-gray-300 backdrop-blur-md'
//             >
//               Explore
//             </motion.button>
//           </div>
//         </div>

//         {/* RIGHT (UPDATED IMAGE SECTION) */}
//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className='relative flex justify-center items-center'
//         >

//           {/* Animated Glow */}
//           <div className='absolute w-[420px] h-[420px] bg-gradient-to-r from-purple-600/40 to-blue-600/40 blur-[120px] rounded-full animate-pulse'></div>

//           {/* Floating Card */}
//           <motion.div
//             animate={{ y: [0, -15, 0] }}
//             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//             className='relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-[0_30px_80px_rgba(0,0,0,0.6)]'
//           >
//             <img 
//               src={img} 
//               alt="preview"
//               className='rounded-xl'
//             />
//           </motion.div>

//           {/* Glass Reflection */}
//           <div className='absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none'></div>

//         </motion.div>
//       </section>

//       {/* FEATURES */}
//       <section className='relative z-10 max-w-6xl mx-auto px-8 py-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>

//         <Feature 
//           title='Smart Notes'
//           des='Automatically structured and optimized for exams.'
//         />
//         <Feature 
//           title='Project Content'
//           des='Generate clean documentation and explanations.'
//         />
//         <Feature 
//           title='Visual Diagrams'
//           des='Simplify concepts with generated diagrams.'
//         />
//         <Feature 
//           title='Export Ready'
//           des='Download high quality PDFs instantly.'
//         />

//       </section>

//       <Footer/>
//     </div>
//   )
// }

// function Feature({ title, des }) {
//   return (
//     <motion.div
//       whileHover={{ y: -8 }}
//       transition={{ type: "spring", stiffness: 200, damping: 18 }}
//       className='relative p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-transparent'
//     >
//       <div className='rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 h-full'>
        
//         <div className='text-lg font-semibold mb-2 tracking-tight'>
//           {title}
//         </div>

//         <div className='text-sm text-gray-400 leading-relaxed'>
//           {des}
//         </div>

//       </div>
//     </motion.div>
//   )
// }

// export default Home











import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from "motion/react"
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen bg-[#0b0b0f] text-white overflow-hidden relative'>

      {/* Animated Background */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>

        {/* Blob 1 */}
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, 60, -60, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className='absolute w-[500px] h-[500px] bg-purple-600/30 blur-[140px] top-[-100px] left-[-100px]'
        />

        {/* Blob 2 */}
        <motion.div
          animate={{
            x: [0, -60, 40, 0],
            y: [0, -80, 40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className='absolute w-[500px] h-[500px] bg-blue-600/30 blur-[140px] bottom-[-100px] right-[-100px]'
        />

        {/* Center Glow */}
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
          className='absolute w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2'
        />
      </div>

      {/* Subtle Grid */}
      <div className='absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]' />

      <Navbar/>

      {/* HERO */}
      <section className='relative z-10 max-w-4xl mx-auto px-8 pt-36 text-center'>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-5xl lg:text-6xl font-bold leading-tight tracking-tight'
        >
          Create High Quality <br />
          <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
            AI Generated Notes
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='mt-6 text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto'
        >
          Turn lectures, PDFs and topics into structured, exam-ready notes instantly.
          Built for speed, clarity and focused learning.
        </motion.p>

        {/* CTA */}
        <div className='flex justify-center gap-4 mt-10'>
          <motion.button
            onClick={()=>navigate("/notes")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='px-10 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 
            text-white font-medium shadow-lg shadow-purple-900/40'
          >
            Get Started
          </motion.button>
        </div>

      </section>

      {/* FEATURES */}
      <section className='relative z-10 max-w-6xl mx-auto px-8 py-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>

        <Feature 
          title='Smart Notes'
          des='Automatically structured and optimized for exams.'
        />
        <Feature 
          title='Project Content'
          des='Generate clean documentation and explanations.'
        />
        <Feature 
          title='Visual Diagrams'
          des='Simplify concepts with generated diagrams.'
        />
        <Feature 
          title='Export Ready'
          des='Download high quality PDFs instantly.'
        />

      </section>

      <Footer/>
    </div>
  )
}

function Feature({ title, des }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className='relative p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-transparent'
    >
      <div className='rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 h-full'>
        
        <div className='text-lg font-semibold mb-2 tracking-tight'>
          {title}
        </div>

        <div className='text-sm text-gray-400 leading-relaxed'>
          {des}
        </div>

      </div>
    </motion.div>
  )
}

export default Home

