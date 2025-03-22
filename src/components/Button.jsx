export default function Button({type, children}) {
    return(
        type==="highlight" ? (
            <button className="relative group overflow-hidden px-6 py-2 font-bold text-black transition-all duration-300 ease rounded-lg shadow-lg hover:scale-105 hover:shadow-[0_5px_3px_0_rgba(0,0,0,.5)] active:scale-95 w-fit">
                <span className="relative z-10">{children}</span>
                
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700"></span>

                <span className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease"></span>
            </button>
        ) : type==="text-only" ? (
            <button class="relative text-main-gold transition-all duration-300 ease after:block after:content-[''] after:w-0 after:h-[2px] after:bg-yellow-600 after:transition-all after:duration-300 hover:after:w-full w-fit">
                {children}
            </button> 
        ) : (
            <button className="relative group w-fit overflow-hidden leading-tight pr-4 pl-3 py-2 font-semibold text-main-gold transition-all duration-300 opacity-0 rounded-md shadow-[0_5px_15px_5px_rgba(0,0,0,.6)] hover:shadow-[0_5px_20px_5px_rgba(0,0,0,.7)] hover:scale-105 active:scale-95 animate-fadeIn">
                <span className="relative z-10 flex items-center text-md gap-2">{children}</span>
                
                <span className="absolute inset-0 bg-white"></span>

                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease"></span>
            </button>
        )
    )
}

