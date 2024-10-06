// import Lottie from "react-lottie";
import { motion } from "framer-motion";
import { PageTransition } from "./animations";
// import Question from "../../assets/lottie/question.json";

function Index() {
  return (
    <motion.main initial={PageTransition.initial} animate={PageTransition.in} className="flex flex-col w-full h-screen bg-background p-24">
      <h1 className="text-7xl font-bold ml-auto mr-auto">About</h1>
      <div>
        {/*<div className="absolute w-[50%] top-1/2 -translate-y-1/2 -translate-x-72  z-10 pointer-events-none">
            <Lottie options={{ animationData: Question, loop: true }} isClickToPauseDisabled={true} speed={0.5} height={1000} width={1000}  />
        </div>*/}
      </div>
    </motion.main>
  )
}

export default Index
