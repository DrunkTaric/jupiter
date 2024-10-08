import { Link } from "react-router-dom"

function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-7xl font-semibold text-accent">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-base leading-7 text-text">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/" className="rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-transparent border-2 border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">Go back home</Link>
        </div>
      </div>
    </main>
  )
}

export default NotFound
