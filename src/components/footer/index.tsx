import logo from '/logo.png'

export const Footer = () => {
    return (
        <div className="bg-black">
            <div className="pt-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-1">
                <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="sm:col-span-1">
                        <a
                            href="/"
                            aria-label="Go home"
                            title="Company"
                            className="inline-flex items-center"
                        >
                            <img src={logo} alt="" className='w-44' />
                        </a>
                        <div className="mt-6 lg:max-w-sm">
                            <p className="text-sm text-white">
                                With over 15 years of experience in the real estate industry, we have built a reputation
                                for trust, transparency, and results. Our firm specializes in residential, commercial, and
                                investment properties, offering end-to-end solutions tailored to meet the unique needs
                                of each client. Whether it's helping first-time buyers, seasoned investors, or businesses
                                looking for strategic spaces, our deep market knowledge and client-first approach have
                                consistently delivered exceptional outcomes. We pride ourselves on long-standing client
                                relationships, ethical practices, and a commitment to excellence in every transaction.
                            </p>
                        </div>
                    </div>
                    <div>
                        <span className="text-base font-bold tracking-wide text-white">
                            Social links
                        </span>
                        <div className="flex items-center mt-1 space-x-3">
                            {/* <a
                                href="/"
                                className="text-white transition-colors duration-300"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                </svg>
                            </a> */}
                            <a
                                href="https://youtube.com/@realogics?si=z_vzPgkX9EYG2W6k"
                                className="text-white transition-colors duration-300"
                                target='_blank'
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                    <path d="M19.07 3H4.93C2.21 3 0 5.21 0 7.93v8.14C0 18.79 2.21 21 4.93 21h14.14C21.79 21 24 18.79 24 16.07V7.93C24 5.21 21.79 3 19.07 3zM15.63 12.34l-6.61 3.15c-.18.09-.39-.04-.39-.24V8.76c0-.2.21-.33.39-.24l6.61 3.35c.19.1.18.37-.01.47z" />
                                </svg>

                            </a>
                            <a
                                href="https://www.instagram.com/realogics?igsh=ZnpxMGp4bmZkZ2xt"
                                target='_blank'
                                className="text-white transition-colors duration-300"
                            >
                                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                                    <circle cx="15" cy="15" r="4" />
                                    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.facebook.com/share/1AevcKSwxv/"
                                target='_blank'
                                className="text-white transition-colors duration-300"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                </svg>
                            </a>
                        </div>
                        <p className="mt-4 text-sm text-white">
                        </p>
                    </div>
                    <div className="space-y-2 text-sm">
                        <p className="text-base font-bold tracking-wide text-white">
                            Connect with us
                        </p>
                        <div className="flex">
                            <p className="mr-1 text-white">Phone:</p>
                            <a
                                href="tel:+919999221307"
                                aria-label="Our phone"
                                title="Our phone"
                                className="transition-colors duration-300 text-white/80"
                            >
                                +91 9999221307
                            </a>
                        </div>
                        <div className="flex">
                            <p className="mr-1 text-white">Email:</p>
                            <a
                                href="mailto:Realogics2020@gmail.com"
                                aria-label="Our email"
                                title="Our email"
                                className="transition-colors duration-300 text-white/80"
                            >
                                Realogics2020@gmail.com
                            </a>
                        </div>
                        <div className="">
                            <a
                                href="https://www.google.com/maps"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Our address"
                                title="Our address"
                                className="transition-colors duration-300 text-white/80"
                            >
                                <span className='text-white'>Address : </span>
                                Realogics Housing and Investments A1/230 4th,floor, Sushant Lok-2, Sector-55, Golf Course Road, Gurugram.
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col-reverse justify-center pt-5 pb-10 border-t border-white lg:flex-row">
                    <p className="text-sm text-white text-center">
                        © Copyright 2025 All rights reserved.
                    </p>

                </div>
            </div>
        </div>
    );
};