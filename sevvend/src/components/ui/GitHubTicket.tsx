export default function GitHubTicket()  {
    return(
        <>
            <a
                href="https://github.com/noah-sch/sevvend"
                target="_blank"
                className="flex flex-row justify-start items-center gap-2 hover:opacity-70 z-50 group"
            >
                <div className="flex flex-col items-end justify-center">
                    <span className="inline-block whitespace-nowrap leading-none">
                        Github
                    </span>
                    <span>
                        <code className="inline-block whitespace-nowrap leading-none">
                            noah-sch/sevvend
                        </code>
                    </span>
                </div>
                <div className="flex flex-row">
                    <svg width="auto" height="48" viewBox="0 0 24 24" fill="none" className="z-50">
                        {/* cercle */}
                        <circle cx="12" cy="12" r="12" fill="white" />

                        {/* logo */}
                        <g transform="scale(0.9) translate(1.5 1.5)">
                            <path
                                d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.44c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.32 3.53 1 .11-.79.42-1.32.76-1.62-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z"
                                fill="black"
                            />
                        </g>
                    </svg>
                    <svg width="auto" height="48" viewBox="0 0 64 64" fill="none" className="-translate-x-2 z-39 transition-transform duration-300 group-hover:rotate-45">
                        {/* cercle noir */}
                        <circle cx="32" cy="32" r="32" fill="black" />

                        {/* plus "découpé" */}
                        <path
                            d="M32 14 V50 M14 32 H50"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </a>
        </>
        
    )
}