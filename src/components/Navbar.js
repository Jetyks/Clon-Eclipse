import Link from "next/link"

export const NavBar = () => {
  return (
    <header>
      <nav className="nav-bar my-3 mx-8 items-center flex justify-between">
        <Link href="/" className="text-4xl font-bold ">
          Eclipse
        </Link>
        <ul className="flex space-x-5">
          <li>
            <Link href="/features" className="text-sm font-semibold opacity-80">
              Features
            </Link>
          </li>
          <li>
            <Link href="/features" className="text-sm font-semibold opacity-80">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/features" className="text-sm font-semibold opacity-80">
              FAQs
            </Link>
          </li>
        </ul>
        <Link href="/faqs" className="text-sm font-semibold opacity-80 py-2.5 px-4 border border-gray-300 rounded-4xl bg-gray-900">
          Start now
        </Link>
      </nav>
    </header>
  )
}
