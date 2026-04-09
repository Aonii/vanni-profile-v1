import Image from 'next/image'

const TopBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-transparent">
      <div className="flex items-center gap-3 ml-[4%]">
        <Image
          src="/images/avatar.png"
          alt="Vanni avatar"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">Vanni Fu</p>
          <a
            href="mailto:vanni1919@outlook.com"
            className="text-md text-text-muted ml-2"
          >
            vanni1919@outlook.com
          </a>
        </div>
      </div>
      <div className="flex items-center gap-4 mr-[4%]">
        <a
          href="https://github.com/Aonii"
          target="_blank"
          rel="noopener noreferrer"
          className="text-md text-text-muted hover:text-text transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/aoni-fu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-md text-text-muted hover:text-text transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="#gallery"
          className="text-md text-text-muted hover:text-text transition-colors"
        >
          Gallery
        </a>
      </div>
    </header>
  )
}

export default TopBar
