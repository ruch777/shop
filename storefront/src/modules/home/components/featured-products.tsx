import { StoreCollection } from "@medusajs/medusa"
import { StoreRegion, StoreProduct } from "@/types/medusa"
import ProductPreview from "@modules/products/components/product-preview"
import Image from "next/image"

interface FeaturedProductsProps {
  collections: StoreCollection[]
  region: StoreRegion
}

const FeaturedProducts = ({ collections, region }: FeaturedProductsProps) => {
  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="content-container">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-sm uppercase tracking-wider text-orange-600">
            Our Finest Selection
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
            Discover Our Premium Spices & Herbs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Handpicked from around the world, our spices bring authentic flavors to your kitchen
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections[0]?.products?.slice(0, 3)?.map((product: StoreProduct) => (
            <li 
              key={product.id}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <div className="relative aspect-square">
                <Image
                  src={product.thumbnail || "/images/spice-placeholder.jpg"}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 line-clamp-2 mb-4">
                  {product.description || "Premium quality spice with rich aroma"}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-orange-600">
                  {product.variants && product.variants[0]?.prices?.length > 0
                    ? new Intl.NumberFormat(region?.currency_code || "en-US", {
                        style: "currency",
                        currency: region?.currency_code || "USD",
                      }).format(product.variants[0].prices[0].amount / 100)
                    : "Price unavailable"}
                  </span>
                  <button 
                    className="px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors duration-200"
                    onClick={() => {
                      // Add to cart functionality
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default FeaturedProducts
