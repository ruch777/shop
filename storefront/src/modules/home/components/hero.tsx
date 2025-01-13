import Image from "next/image"
import Link from "next/link"
import { shimmer, toBase64 } from "@lib/util/image"

const Hero = () => {
  return (
    <div className="relative h-[700px] w-full overflow-hidden">
      {/* Spice particle animation */}
      <div className="absolute inset-0 z-[5] spice-particles" />
      
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Collection of aromatic spices including cinnamon, turmeric, nutmeg, clove, and pepper"
          fill
          priority
          className="object-cover animate-zoom-in-out"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1920, 700))}`}
        />
      </div>

      {/* Seasonal promotion banner */}
      <div className="absolute top-4 left-4 right-4 z-20">
        <div className="bg-amber-700/90 backdrop-blur-sm rounded-full px-6 py-2 w-fit mx-auto">
          <p className="text-white font-medium text-sm md:text-base">
            🎉 Summer Spice Sale - Up to 30% Off Selected Items!
          </p>
        </div>
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center bg-gradient-to-r from-black/50 to-black/30 px-4 text-center">
        <h1 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl drop-shadow-lg">
          <span className="block text-amber-400 animate-fade-in">Truly Cinnamon</span>
          <span className="block mt-4 animate-fade-in [animation-delay:200ms]">
            Where Spices Come Alive
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-gray-100 md:text-2xl font-medium drop-shadow-md animate-fade-in [animation-delay:400ms]">
          Experience the authentic flavors of the world with our handpicked,<br/>
          premium spices and herbs - freshly ground for your kitchen
        </p>
        <div className="mt-8 flex gap-4 animate-fade-in [animation-delay:600ms]">
          <Link
            href="/shop"
            className="rounded-full bg-amber-600 px-8 py-3 text-lg font-medium text-white transition-all hover:bg-amber-700 hover:scale-105 shadow-lg hover:shadow-amber-600/30"
          >
            Shop Spices
          </Link>
          <Link
            href="/collections"
            className="rounded-full border-2 border-amber-600 px-8 py-3 text-lg font-medium text-white transition-all hover:bg-amber-600/20 hover:scale-105 shadow-lg hover:shadow-amber-600/30"
          >
            Explore Collections
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
