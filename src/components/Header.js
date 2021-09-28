import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center py-10">
      <div>
        <Link href="/">
          <a aria-label="리크봇 블로그">
              <img src="/android-icon-192x192.png" className="hidden sm:block h-6"/>
              <h2 className="text-2xl sm:hidden">리크봇 블로그</h2>
          </a>
        </Link>
      </div>
      <div className="text-base leading-5">
        <a
          href="https://leek.pcor.me/"
          className="font-medium text-gray-500 hover:text-gray-700"
        >
          리크봇 소개 &rarr;
        </a>
      </div>
    </header>
  )
}
