// import React, { useState } from 'react'
// import { AnimatePresence, motion } from "motion/react"
// import logo from "../assets/logo.png"
// import { useSelector } from 'react-redux'
// import axios from 'axios'
// import { serverUrl } from '../App'
// import { setUserData } from '../redux/userSlice'
// import { useNavigate } from "react-router-dom"
// import { useDispatch } from "react-redux"

// function Navbar (){
//     const {userData}=useSelector((state)=>state.user)
//     const credits = userData.credits
//     const [showCredits,setShowCredits]= useState(false)
//     const [showProfile,setShowProfile]= useState(false)
//     const navigate = useNavigate()
//     const dispatch = useDispatch()
//     const handleSignOut = async()=>{
//         try{
//             await axios.get(serverUrl + "/api/auth/logout", {withCredentials:true})
//             dispatch(setUserData(null))
//             navigate("/auth")
//         }catch(error){
//             console.log(error)
//         }
//     }

//   return (
//     <motion.div 
//     initial={{opacity:0, y:-15}}
//     animate={{opacity:1, y:0}}
//     transition={{duration:1.5}}
    
//     className='relative z-20 mx-6 mt-6 
//     rounded-2xl
//     bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-2xl
//     border border-white/10
//     shadow-[0_22px_55px_rgba(0,0,0,0.75)]
//     flex items-center justify-between px-8 py-4'>
      
//         <div className='flex items-center gap-3 '>
//             <img src={logo} alt="examnotes" className='w-9 h-9'/>
//             <span className='text-lg hidden md:block font-semibold text-white'>ExamNotes <span className='text-gray-400'>AI</span>
//             </span>
//         </div>

//         <div className="flex items-center gap-6 relative">
//             <div className="relative">

//                 <motion.div 
//                 onClick={()=>{setShowCredits(!showCredits);setShowProfile(false)}}
//                 whileHover={{ scale: 1.07 }} 
//                 whileTap={{ scale: 0.97 }}
//                 className='flex items-center gap-2 px-4 py-2 rounded-full
//                 bg-white/10
//                 border border-white/20
//                 text-white text-sm
//                 shadow-md
//                 cursor-pointer
//                 '>
//                     <span className="text-xl">💎</span>
//                     <span>{credits}</span>
//                     <motion.span 
//                     whileHover={{ scale: 1.35 }} 
//                     whileTap={{ scale: 0.97 }}
//                     className='ml-2 h-5 w-5 flex items-center justify-center rounded-full
//                     bg-white text-xs font-bold'>
//                        ➕ 
//                     </motion.span>

//                 </motion.div>

//                 <AnimatePresence>
//                 {showCredits && 
                
                
//                 <motion.div 
//                 initial={{opacity:0, y:-10, scale:0.95}}
//                 animate={{opacity:1, y:10, scale:1}}
//                 exit={{opacity:0, y:-10, scale:0.95}}
//                 transition={{duration: 0.2}}

//                 className='absolute right-[-50px] mt-4 w-64 rounded-2xl
//                 bg-black/90 backdrop-blur-xl
//                 border border-white/10
//                 shadow-[0_25px_60px_rgba(0,0,0,0.7)]
//                 p-4 text-white
//                 '>

//                     <h4 className='font-semibold mb-2'>
//                         Buy Credits
//                     </h4>
//                     <p className="text-sm text-gray-300 mb-4">
//                         Use credits to generate AI notes,
//                         diagrams & PDFs.
//                     </p>
//                     <button onClick={()=>{setShowCredits(false);navigate("/pricing")}} className='w-full py-2 rounded-lg bg-gradient-to-br from-white to-gray-200 text-black font-semibold'>
//                         Buy More Credits
//                     </button>

//                 </motion.div>
//                 }</AnimatePresence>
//             </div>
//                 <div className="relative">

//                 <motion.div 
//                  onClick={()=>{setShowProfile(!showProfile);setShowCredits(false)}}
//                 whileHover={{ scale: 1.1 }} 
//                 whileTap={{ scale: 0.97 }}
//                 className='flex items-center gap-2 px-4 py-2 rounded-full
//                 bg-white/10
//                 border border-white/20
//                 text-white text-sm
//                 shadow-md
//                 cursor-pointer
//                 '>
//                     <span className="text-lg">{userData?.name.slice(0,1).toUpperCase()}</span>
                

//                 </motion.div>

//                 <AnimatePresence>
//                 {showProfile && 
                
                
//                 <motion.div 
//                 initial={{opacity:0, y:-10, scale:0.95}}
//                 animate={{opacity:1, y:10, scale:1}}
//                 exit={{opacity:0, y:-10, scale:0.95}}
//                 transition={{duration: 0.2}}

//                 className='absolute right-0 mt-4 w-52 rounded-2xl
//                 bg-black/90 backdrop-blur-xl
//                 border border-white/10
//                 shadow-[0_25px_60px_rgba(0,0,0,0.7)]
//                 p-4 text-white
//                 '>
//                     <MenuItem text="History" onClick={()=>{setShowProfile(false);navigate("/history")}}/>
//                     <div className="h-px bg-white/10 mx-3"/>
//                     <MenuItem text="sign out" red onClick={handleSignOut}/>




//                 </motion.div>
//                 }</AnimatePresence>
                

               
             
//             </div>
//         </div>


//     </motion.div>
//   )
// }

// function MenuItem({onClick, text, red}){
//     return(
//         <div 
//         onClick={onClick}
//         className={`
//         w-full text-left px-5 py-3 text-sm transition-colors rounded-lg
//         ${
//             red
//             ?"text-red-400 hover:bg-red-500/10"
//             :"text-gray-200 hover:bg-white/10"
//         }
//         `}>
//             {text}
//         </div>
//     )
// }



// export default Navbar













import React, { useState } from 'react'
import { AnimatePresence, motion } from "motion/react"
import logo from "../assets/logo.png"
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { serverUrl } from '../App'
import { setUserData } from '../redux/userSlice'
import { useNavigate } from "react-router-dom"

function Navbar (){
    const { userData } = useSelector((state) => state.user || {})
    const credits = userData?.credits || 0

    const [showCredits, setShowCredits] = useState(false)
    const [showProfile, setShowProfile] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSignOut = async () => {
        try {
            await axios.get(serverUrl + "/api/auth/logout", { withCredentials: true })
            dispatch(setUserData(null))
            navigate("/auth")
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <motion.div 
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='relative z-20 mx-6 mt-6'
    >

      {/* Glass Container */}
      <div className='
        flex items-center justify-between px-8 py-4
        rounded-2xl
        bg-white/5 backdrop-blur-xl
        border border-white/10
        shadow-[0_20px_60px_rgba(0,0,0,0.6)]
      '>

        {/* LOGO */}
        <div className='flex items-center gap-3 cursor-pointer' onClick={()=>navigate("/")}>
            <img src={logo} alt="logo" className='w-9 h-9'/>
            <span className='text-lg hidden md:block font-semibold tracking-tight'>
              ExamNotes <span className='text-gray-400'>AI</span>
            </span>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4 relative">

          {/* ✨ NEW CREDITS UI */}
          <div className="relative">
            {/* <motion.div 
              onClick={() => { setShowCredits(!showCredits); setShowProfile(false) }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className='flex items-center gap-2 px-4 py-2 rounded-lg
              bg-gradient-to-r from-purple-500/20 to-blue-500/20
              border border-white/10
              text-sm text-white cursor-pointer
              backdrop-blur-md'
            >
              <span className='text-gray-300'>Credits</span>
              <span className='font-semibold text-white'>{credits}</span>
            </motion.div> */}
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

            <AnimatePresence>
              {showCredits && (
                <motion.div 
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 10, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className='absolute right-0 mt-4 w-64 rounded-2xl
                  bg-white/5 backdrop-blur-xl border border-white/10
                  shadow-[0_25px_60px_rgba(0,0,0,0.7)]
                  p-5 text-white'
                >
                  <h4 className='font-semibold mb-2 text-lg'>
                    Your Credits
                  </h4>

                  <p className="text-3xl font-bold mb-3">
                    {credits}
                  </p>

                  <p className="text-sm text-gray-400 mb-4">
                    Use credits to generate notes, diagrams and PDFs instantly.
                  </p>

                  <button 
                    onClick={() => { setShowCredits(false); navigate("/pricing") }}
                    className='w-full py-2 rounded-lg 
                    bg-gradient-to-r from-purple-500 to-blue-500 
                    text-white font-medium hover:opacity-90 transition'
                  >
                    Upgrade Plan
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* PROFILE */}
          <div className="relative">
            <motion.div 
              onClick={() => { setShowProfile(!showProfile); setShowCredits(false) }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className='h-10 w-10 flex items-center justify-center rounded-full
              bg-gradient-to-br from-purple-500 to-blue-500
              text-white font-semibold cursor-pointer shadow-md'
            >
              {userData?.name?.slice(0,1)?.toUpperCase() || "U"}
            </motion.div>

            <AnimatePresence>
              {showProfile && (
                <motion.div 
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 10, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className='absolute right-0 mt-4 w-52 rounded-2xl
                  bg-white/5 backdrop-blur-xl border border-white/10
                  shadow-[0_25px_60px_rgba(0,0,0,0.7)]
                  p-2 text-white'
                >
                  <MenuItem text="History" onClick={() => { setShowProfile(false); navigate("/history") }} />
                  <div className="h-px bg-white/10 my-1"/>
                  <MenuItem text="Sign Out" red onClick={handleSignOut}/>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </motion.div>
  )
}

function MenuItem({ onClick, text, red }){
  return(
    <div 
      onClick={onClick}
      className={`
      w-full px-4 py-2 text-sm rounded-lg cursor-pointer transition
      ${red 
        ? "text-red-400 hover:bg-red-500/10" 
        : "text-gray-300 hover:bg-white/10"}
      `}
    >
      {text}
    </div>
  )
}

export default Navbar