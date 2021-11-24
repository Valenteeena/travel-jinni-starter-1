import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Travel Jinni</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.header}>
                <div>
                    <p className="desktop:text-sm tablet:text-sm phone:text-xs">
                        Remaining Days to my Trip
                    </p>

                    <div className="flex">
                        <div className="flex-col text-center mx-1 desktop:w-10 tablet:w-8 phone:w-6">
                            <h2 className={styles.pFlexT}>10</h2>
                            <p className={styles.txtSpan}>Weeks</p>
                        </div>
                        <div className="flex-col text-center mx-1 desktop:w-10 tablet:w-8 phone:w-6">
                            <h2 className={styles.pFlexT}>06</h2>
                            <p className={styles.txtSpan}>Days</p>
                        </div>
                        <div className="flex-col text-center mx-1 desktop:w-10 tablet:w-8 phone:w-6">
                            <h2 className={styles.pFlexT}>45</h2>
                            <p className={styles.txtSpan}>Hours</p>
                        </div>
                        <div className="flex-col text-center mx-1 desktop:w-10 tablet:w-8 phone:w-8">
                            <h2 className={styles.pFlexT}>25</h2>
                            <p className={styles.txtSpan}>Minutes</p>
                        </div>
                        <div className="flex-col text-center mx-1 desktop:w-10 tablet:w-8 phone:w-6">
                            <h2 className={styles.pFlexT}>06</h2>
                            <p className={styles.txtSpan}>Seconds</p>
                        </div>
                    </div>
                </div>
                <div className="flex text-sm desktop:py-5 phone:py-4">
                    <p className="px-2">My Trips</p>
                    <div className="flex">
                        <p className="px-2">|</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            />
                        </svg>
                        <span>EN (S)</span>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.leftSide}>
                    <h1 className="font-bold desktop:text-xl tablet:text-lg font-serif py-1 phone:text-sm">
                        Six Days In Dubai
                    </h1>
                    <ul>
                        <li className="w-8 h-8 flex items-center justify-center">FEB</li>
                        <li className="bg-opacity-50 bg-black text-yellow-300 w-8 h-8 rounded-full flex items-center justify-center border-yellow-300 border-2 text-sm font-bold font-mono">
                            15
                        </li>
                        <li className="w-8 h-10 flex items-center justify-center text-xs">16</li>
                        <li className="w-8 h-10 flex items-center justify-center text-xs">17</li>
                        <li className="w-8 h-10 flex items-center justify-center text-xs">18</li>
                        <li className="w-8 h-10 flex items-center justify-center text-xs">19</li>
                        <li className="w-8 h-10 flex items-center justify-center text-xs">20</li>
                    </ul>
                </div>
                <div>
                    <div className={styles.rightSide}>
                        <div className="rounded-full desktop:w-20 desktop:h-20 tablet:w-16 tablet:h-16 p-2 flex items-center justify-center bg-white phone:w-12 phone:h-12">
                            <img src="/logo.png" alt="logo" className="w-18 h-18 rounded-full " />
                        </div>
                        <div className="ml-4 text-center border border-white">
                            <h1 className="head-t font-bold desktop:text-5xl tablet:text-4xl font-mono tracking-wide px-3 phone:text-2xl">
                                HILTON HOTEL
                            </h1>
                            <h2 className="bg-white text-black desktop:text-xl tablet:text-lg pb-1 phone:text-sm">
                                POWERED BY TRAVEL JINNI
                            </h2>
                        </div>
                    </div>
                    <div className={`div-w blur-filter ${styles.conBody}`}>
                        <h1 className="desktop:text-5xl tablet:text-4xl font-serif font-bold pb-5 px-4 phone:text-3xl">
                            Your Trip Awaits You!
                        </h1>
                        <p className="desktop:text-sm tablet:text-sm pb-5 phone:text-xs">
                            We have taken some time to help plan your trip to make it a memmorable
                            one. Access your calender for even more things you can do on your trip.
                        </p>
                        <button className="bg-yellow-300 w-full border-black border-2 text-black font-bold py-2 mb-5">
                            ACCESS CALENDAR
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
