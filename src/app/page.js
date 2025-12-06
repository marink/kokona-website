import Image from "next/image";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-white font-sans">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white sm:items-start">
                <Image src="/coconut-logo.png" alt="Coconut Logo" width={300} height={200} priority/>
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1 className="max-w-md text-3xl font-semibold leading-10 tracking-tight text-black">
                        Welcome to Kokonas' Personal Website!
                    </h1>
                    <p className="max-w-md text-lg leading-8 text-zinc-600">
                        This website is built to share information about various topics like: 
                        programming, studying, meditation ...or anything else that comes to mind 😉.
                    </p>
                    <p className="max-w-md txt-lg leading-8 text-zinc-600">
                        Explore each website below to find any information that fits your style.
                    </p>
                    <ul>
                        <li className="max-w-md text-lg leading-8 text-zinc-600">
                            <a href="https://marin.kokona.website" className="font-medium text-zinc-950">
                                Marin's Website
                            </a>
                        </li>
                        <li className="max-w-md text-lg leading-8 text-zinc-600">
                            <a href="https://chloe.kokona.website" className="font-medium text-zinc-950">
                                Chloe's Website
                            </a>
                        </li>
                        <li className="max-w-md text-lg leading-8 text-zinc-600">
                            <a href="https://sophie.kokona.website" className="font-medium text-zinc-950">
                                Sophie's Website
                            </a>
                        </li>
                    </ul>
                </div>                
            </main>
        </div>
    );
}
