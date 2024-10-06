function Index() {
    return (
        <main className="grid min-h-screen place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8">
            <div className="border-2 border-primary w-[40%] rounded-2xl p-10 space-y-5">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold">Login Form</h1>
                    <div className="w-full h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                    <form className="flex flex-col space-y-5">
                        <input type="email" placeholder="Email" className="border-2 border-primary rounded-2xl px-5 py-3 bg-transparent outline-none" />
                        <input type="password" placeholder="Password" className="border-2 border-primary rounded-2xl px-5 py-3 bg-transparent outline-none" />
                        <input type="button" value="Signin" className="border-2 border-primary rounded-2xl font-bold px-5 py-3 hover:bg-primary hover:text-white duration-300"  />
                    </form>
                </div>
            </div>
        </main>
    )
} 

export default Index