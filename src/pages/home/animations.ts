const PageTransition = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.5
    }
  }
}

export { PageTransition }