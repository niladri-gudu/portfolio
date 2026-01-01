import Image from "next/image"
import Link from "next/link"

export default function Intro() {
  return (
    <section className="p-4 sm:p-6 md:p-10">
      <div className="flex flex-row items-center justify-center gap-10 sm:gap-12 md:gap-14 lg:gap-16 max-w-4xl mx-auto">
        <div className="flex-shrink-0">
          <div className="relative w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
            <Image
              src="/next.svg"
              alt="Niladri"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
        <h1 className="text-5xl xs:text-6xl sm:text-7xl lg:text-8xl font-normal font-telma tracking-wide mb-4">
  niladri.
</h1>
          
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300">
            Full Stack Developer & Designer
          </p>
        </div>
      </div>
    </section>
  )
}


// import { 
//   Github, 
//   Linkedin, 
//   Twitter, 
//   Mail, 
//   ExternalLink 
// } from "lucide-react"


  // const socials = [
  //   { 
  //     name: "GitHub", 
  //     href: "https://github.com/niladri-gudu", 
  //     icon: Github 
  //   },
  //   { 
  //     name: "LinkedIn", 
  //     href: "https://linkedin.com/in/niladribihari-mohanta", 
  //     icon: Linkedin 
  //   },
  //   { 
  //     name: "Twitter", 
  //     href: "https://twitter.com/dev_niladri", 
  //     icon: Twitter 
  //   }
  // ]



          {/* <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl">
            I'm a developer who loves building beautiful and functional 
            web experiences. I specialize in React, Next.js, and modern web technologies.
          </p> */}

          {/* <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm">{social.name}</span>
                </Link>
              )
            })}
          </div> */}