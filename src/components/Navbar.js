import Link from "next/link"

export const NavBar = () => {
  return (
    <header>
      <nav className="default-white my-3 mx-8 items-center flex justify-between">
        <Link href="/" className="text-4xl font-bold ">
          Eclipse
        </Link>
        <ul className="flex space-x-5">
          <li>
            {/* Anchor links that scroll to sections on the same page */}
            <a href="#features" className="text-sm font-semibold opacity-80">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="text-sm font-semibold opacity-80">
              Pricing
            </a>
          </li>
          <li>
            <a href="#faqs" className="text-sm font-semibold opacity-80">
              FAQs
            </a>
          </li>
        </ul>
        <Link href="/faqs" className="text-sm font-semibold opacity-80 py-2.5 px-4 border border-[#114e6e7e] rounded-4xl bg-gray-900 bg-[radial-gradient(circle_at_center,_#3c9ed37e_10%,_transparent_100%)]">
          Start now
        </Link>
      </nav>
    </header>
  )
}
