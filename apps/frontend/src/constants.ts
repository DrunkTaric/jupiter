let Motion: any = {}

Motion.PageTransition = {
  initial: {
    opacity: 0,
    transition: {
      duration: 1,
      delay: 0
    }
  },
  in: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0
    }
  },
  out: {
    opacity: 0,
    transition: {
      duration: 1,
      delay: 0
    }
  }
}


export { Motion }
