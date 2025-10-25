import {LinkedInIcon} from "./LinkedInIcon"

export const Footer = () => {
    const TwitterIcon = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22.25 5.66002C21.49 5.99002 20.66 6.21002 19.82 6.32002C20.69 5.80002 21.36 5.01002 21.67 4.07002C20.84 4.57002 19.95 4.93002 19.01 5.13002C18.23 4.38002 17.16 3.91002 16.01 3.91002C13.73 3.91002 11.89 5.75002 11.89 8.03002C11.89 8.35002 11.92 8.67002 11.99 8.97002C8.75 8.81002 5.86 7.21002 3.97 4.79002C3.64 5.37002 3.46 6.02002 3.46 6.70002C3.46 8.16002 4.2 9.47002 5.36 10.22002C4.69 10.20002 4.03 10.01002 3.44 9.69002V9.74002C3.44 11.75002 4.88 13.43002 6.76 13.80002C6.44 13.89002 6.11 13.94002 5.76 13.94002C5.53 13.94002 5.30 13.92002 5.08 13.88002C5.63 15.58002 7.24 16.81002 9.15 16.85002C7.72 17.96002 5.92 18.66002 3.97 18.66002C3.33 18.66002 2.70 18.62002 2.08 18.51002C3.96 19.74002 6.13 20.44002 8.48 20.44002C16.01 20.44002 20.14 14.36002 20.14 8.78002C20.14 8.60002 20.14 8.43002 20.13 8.26002C20.94 7.70002 21.65 7.03002 22.25 6.27002V6.26002V5.66002Z"/>
    </svg>
);

  return (
    <footer className="mt-36 px-8">
        <div className="flex flex-row justify-between default-white opacity-60 font-light border-t-semitransparent py-8">
            <div>
                <p className="">© 2023 Inside Labs. All rights reserved.</p>
            </div>
            <ul className="flex flex-row gap-6 opacity-65">
                {/* Ícono de Twitter */}
                <li className="">
                    <a href="https://x.com/InsideLabsInc?t=dVl3FS-Kuhj6JNfL3z1HOg&s=08" target="_blank" rel="noopener noreferrer" className="hover:text-white transition size-full">
                        <TwitterIcon className="size-7.5" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/inside-labs/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition size-full">
                        <LinkedInIcon className="size-7.5" />
                    </a>
                </li>
            </ul>
        </div>
    </footer>
  )
}
