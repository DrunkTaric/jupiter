import Lottie from "react-lottie";
import { motion } from "framer-motion";
import { PageTransition } from "./animations";
import Jupiter from "../../assets/lottie/jupiter.json";

function Index() {
  return (
    <motion.main initial={PageTransition.initial} animate={PageTransition.in} className="flex w-full h-screen bg-background space-x-24 p-28 overflow-hidden">
      <div className="mt-auto mb-auto space-y-12">
        <h1 className="text-8xl font-bold text-text">Jupiter</h1>
        <div className="space-y-2">
          <h1 className="text-3xl text-text">Team solution for managing your projects</h1>
          <h1 className="text-3xl text-text">You can try it out, for free !!</h1>
        </div>
      </div>
      <div className="absolute w-[60%] right-0 top-1/2 -translate-y-1/2 z-10">
          <Lottie options={{ animationData: Jupiter, loop: true }} isClickToPauseDisabled={true} speed={0.5} height={1000} width={1000}  />
      </div>
    </motion.main>
  )
}

export default Index