// import React, { useState } from 'react'
// import { motion } from 'motion/react'
// import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux';
// import TopicForm from '../components/TopicForm';
// import FinalResult from '../components/FinalResult';
// import Sidebar from '../components/Sidebar'

// function Notes() {
//     const navigate = useNavigate();
//     const {userData}=useSelector((state)=>state.user)
//     const credits = userData.credits
//     const [loading, setLoading]= useState(false)
//     const [result, setResult] = useState(null)
//     const [error, setError] = useState("")


//   return (
//     <div className='min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-6 py-8'>
//       <motion.header 
//       initial={{opacity:0, y:-15}}
//       animate={{opacity:1, y:0}}
//       transition={{duration:0.5}}

//       className='mb-10
//       rounded-2xl
//        bg-black/80 backdrop-blur-xl
//        border border-white/10
//       px-8 py-6
//       shadow-[0_20px_45px_rgba(0,0,0,0.6)] items-start flex md:items-center justify-between gap-4 flex-col md:flex-row'>

//         <div onClick={()=>navigate("/")} className='cursor-pointer'>
//             <h1 className='text-2xl font-bold bg-linear-to-r from-white via-gray-300 to-white bg-clip-text text-transparent'>ExamNotes AI</h1>
//             <p className='text-sm text-gray-300 mt-1'>AI-powered exam-oriented notes & revision tools</p>
//         </div>

//         <div className='flex items-center gap-4 flex-wrap'>
//             <button className='flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm'
//             onClick={()=>navigate("/pricing")}
            
//             >
//                     <span className="text-xl">💎</span>
//                         <span>{credits}</span>
//                             <motion.span 
//                             whileHover={{ scale: 1.35 }} 
//                             whileTap={{ scale: 0.97 }}
//                             className='ml-2 h-5 w-5 flex items-center justify-center rounded-full bg-white text-xs font-bold'>
//                               ➕ 
//                             </motion.span>
//             </button>
//             <button 
//             onClick={()=>navigate("/history")}
//             className='px-4 py-3 rounded-full text-sm font-medium bg-white/10 border border-white/20
//             text-white
//             hover:bg-white/20 transition flex items-center gap-2
//             '>
//                 📚 Your Notes
//             </button>
//         </div>
//       </motion.header>

//         <motion.div
            
//             className='mb-12'>
//             <TopicForm loading={loading} setResult={setResult} setLoading={setLoading} setError={setError}/>
//         </motion.div>


//         {loading && (
//           <motion.div
//             animate={{ opacity: [0.4, 1, 0.4]}}
//             transition={{ repeat: Infinity, duration: 1.2 }}
//             className='text-center text-black font-medium mb-6'
//           >
//             Generating exam-focused notes...
//           </motion.div>
//         )}
//         {error && (
//           <div className='mb-6 text-center text-red-600 font-medium'>
//             {error}
//           </div>
//         )}

//       {!result && <motion.div whileHover={{ scale: 1.02}}
//                 className="h-64
//                 rounded-2xl
//                 flex flex-col items-center justify-center
//                 bg-white/60 backdrop-blur-lg
//                 border border-dashed border-gray-300
//                 text-gray-500
//                 shadow-inner
//                 ">
//                   <span className='text-4xl mb-3'>📘</span>
//                   <p className='text-sm'>Generate notes will appear here</p>
//       </motion.div>}

//       {result && <motion.div 
//       initial={{opacity:0, y: 30}}
//       animate={{opacity: 1, y: 0}}
//       transition={{duration: 0.4}}
//       className='flex flex-col lg:grid lg:grid-cols-4 gap-6'>
          
//           <div className='lg:col-span-1'>
//               <Sidebar result={result}/>
//           </div>

//           <div className='lg:col-span-3 rounded-2xl bg-white
//           shadow-[0_15px_40px_rgba(0,0,0,0.15)]
//           p-6'>
//               <FinalResult result={result}/>
//           </div>

//       </motion.div>
// }

//     </div>
//   )
// }

// export default Notes






import React, { useState } from 'react'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import TopicForm from '../components/TopicForm';
import FinalResult from '../components/FinalResult';
import Sidebar from '../components/Sidebar'
import logo from "../assets/logo.png"

function Notes() {
    const navigate = useNavigate();
    const { userData } = useSelector((state)=>state.user || {})
    const credits = userData?.credits || 0

    const [loading, setLoading]= useState(false)
    const [result, setResult] = useState(null)
    const [error, setError] = useState("")

  return (
    <div className='min-h-screen bg-[#0b0b0f] text-white overflow-hidden relative px-6 py-8'>

      {/* 🔥 Animated Background */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>

        <motion.div
          animate={{
            x: [0, 100, -80, 60, 0],
            y: [0, -80, 60, -40, 0],
            scale: [1, 1.2, 0.9, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className='absolute w-[600px] h-[600px] bg-purple-600/30 blur-[160px] top-[-150px] left-[-150px]'
        />

        <motion.div
          animate={{
            x: [0, -120, 80, -60, 0],
            y: [0, 100, -60, 40, 0],
            scale: [1, 0.9, 1.2, 1, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className='absolute w-[600px] h-[600px] bg-blue-600/30 blur-[160px] bottom-[-150px] right-[-150px]'
        />

      </div>

      {/* Grid overlay */}
      <div className='absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]' />

      {/* HEADER */}
      <motion.header 
        initial={{opacity:0, y:-15}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.5}}
        className='relative z-10 mb-10
        rounded-2xl
        bg-white/5 backdrop-blur-xl
        border border-white/10
        px-8 py-5
        shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        flex items-center justify-between flex-wrap gap-4'
      >

        <div onClick={()=>navigate("/")} className='flex items-center gap-3 cursor-pointer'>
            <img src={logo} className='w-9 h-9'/>
            <div>
              <h1 className='text-lg font-semibold tracking-tight'>
                ExamNotes <span className='text-gray-400'>AI</span>
              </h1>
              {/* <p className='text-xs text-gray-400'>AI-powered notes generator</p> */}
            </div>
        </div>

        <div className='flex items-center gap-3 flex-wrap'>

            {/* <div 
              onClick={()=>navigate("/pricing")}
              className='px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-sm cursor-pointer hover:bg-white/20 transition'
            >
              {credits} Credits
            </div> */}

            <motion.div 
  onClick={() => { setShowCredits(!showCredits); setShowProfile(false) }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.96 }}
  className='px-5 py-2 rounded-xl
  bg-gradient-to-r from-purple-600/40 to-indigo-500/40
  border border-purple-400/30
  text-sm font-medium text-white
  shadow-[0_8px_25px_rgba(139,92,246,0.4)]
  backdrop-blur-lg
  cursor-pointer'
>
  Credits {credits}
</motion.div>

            <button 
              onClick={()=>navigate("/history")}
              className='px-4 py-2 rounded-lg text-sm font-medium bg-white/10 border border-white/10
              hover:bg-white/20 transition'
            >
              Your Notes
            </button>

        </div>
      </motion.header>

      {/* FORM */}
      <motion.div className='relative z-10 mb-12'>
        <TopicForm 
          loading={loading} 
          setResult={setResult} 
          setLoading={setLoading} 
          setError={setError}
        />
      </motion.div>

      {/* LOADING */}
      {loading && (
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
          className='relative z-10 text-center text-gray-300 font-medium mb-6'
        >
          Generating smart notes...
        </motion.div>
      )}

      {/* ERROR */}
      {error && (
        <div className='relative z-10 mb-6 text-center text-red-400 font-medium'>
          {error}
        </div>
      )}

      {/* EMPTY STATE */}
      {!result && !loading && (
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="relative z-10 h-64 rounded-2xl flex flex-col items-center justify-center
          bg-white/5 backdrop-blur-xl border border-dashed border-white/10
          text-gray-400"
        >
          <p className='text-sm'>Your generated notes will appear here</p>
        </motion.div>
      )}

      {/* RESULT */}
      {result && (
        <motion.div 
          initial={{opacity:0, y: 30}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.4}}
          className='relative z-10 flex flex-col lg:grid lg:grid-cols-4 gap-6'
        >
          
          <div className='lg:col-span-1'>
              <div className='bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4'>
                <Sidebar result={result}/>
              </div>
          </div>

          <div className='lg:col-span-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6'>
              <FinalResult result={result}/>
          </div>

        </motion.div>
      )}

    </div>
  )
}

export default Notes