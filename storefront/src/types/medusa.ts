export type ProductPreviewType = {
  id: string
  title: string
  handle: string | null
  thumbnail: string | null
  price?: {
    calculated_price: string
    original_price: string
    difference: string
    price_type: "default" | "sale"
  }
}

export type StoreRegion = {
  id: string
  name: string
  currency_code: string
}

export type ProductStatus = "draft" | "proposed" | "published" | "rejected"

export type StoreProduct = {
  id: string
  title: string
  subtitle: string | null
  handle: string
  description: string | null
  is_giftcard: boolean
  status: ProductStatus
  images: Array<{
    id: string
    url: string
    rank: number
    created_at?: string
    updated_at?: string
    deleted_at?: string | null
    metadata: Record<string, unknown> | null
  }> | null
  thumbnail: string | null
  options: Array<{
    id: string
    title: string
    values: Array<{
      id: string
      value: string
      option_id: string | null
      variant_id: string
      created_at: string
      updated_at: string
      deleted_at: string | null
      metadata: Record<string, unknown> | null
    }>
  }> | null
  variants: Array<{
    id: string
    title: string
    sku: string | null
    barcode: string | null
    ean: string | null
    upc: string | null
    prices: Array<{
      id: string
      currency_code: string
      amount: number
    }>
    options: Array<{
      id: string
      value: string
    }>
    length: number
    height: number
    width: number
    created_at: string
    updated_at: string
    deleted_at: string | null
    product_id: string
    inventory_quantity: number
    allow_backorder: boolean
    manage_inventory: boolean
    variant_rank: number
    hs_code: string | null
    origin_country: string | null
    mid_code: string | null
    material: string | null
    weight: number
    metadata: Record<string, unknown> | null
  }> | null
  length: number
  width: number
  height: number
  weight: number
  hs_code: string | null
  origin_country: string | null
  mid_code: string | null
  material: string | null
  collection_id: string | null
  type_id: string | null
  discountable: boolean
  external_id: string | null
  metadata: Record<string, unknown> | null
  created_at: string
  updated_at: string
  deleted_at: string | null
}

export type StoreCollection = {
  id: string
  title: string
  handle: string
  products?: StoreProduct[]
}
