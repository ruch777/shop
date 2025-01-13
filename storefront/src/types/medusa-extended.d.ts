import { 
  StoreProduct as MedusaStoreProduct, 
  StoreCollection as MedusaStoreCollection,
  ProductStatus
} from '@medusajs/medusa'

declare module '@medusajs/medusa' {
  interface StoreProduct extends MedusaStoreProduct {
    id: string
    title: string
    subtitle: string | null
    description: string | null
    handle: string
    is_giftcard: boolean
    status: ProductStatus
    images: Array<{
      id: string
      url: string
      rank: number
      created_at: string
      updated_at: string
      deleted_at: string | null
      metadata: Record<string, unknown> | null
    }> | null
    thumbnail: string | null
    variants: Array<{
      id: string
      title: string
      sku: string | null
      barcode: string | null
      ean: string | null
      upc: string | null
      product_id: string
      prices: Array<{
        id: string
        amount: number
        currency_code: string
    created_at: string
    updated_at: string
    deleted_at: string | null
    metadata: Record<string, unknown> | null
      }>
      length: number
      width: number
      height: number
      weight: number
      origin_country: string | null
      material: string | null
      inventory_quantity: number
      created_at: string
      updated_at: string
      deleted_at: string | null
      metadata: Record<string, unknown> | null
      hs_code: string | null
      mid_code: string | null
      options: Array<{
        id: string
        value: string
      }>
      product: {
        id: string
        title: string
        handle: string
        status: ProductStatus
      }
      allow_backorder: boolean
      manage_inventory: boolean
      variant_rank: number | null
    }> | null
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
    }>
    created_at: string
    updated_at: string
    deleted_at: string | null
    metadata: Record<string, unknown> | null
    length: number | null
    width: number | null
    height: number | null
    weight: number | null
    origin_country: string | null
    material: string | null
    type_id: string | null
    discountable: boolean
    external_id: string | null
    hs_code: string | null
    mid_code: string | null
    collection_id: string | null
    collection: {
      id: string
      title: string
      handle: string
    } | null
  }

  interface StoreCollection extends MedusaStoreCollection {
    products?: StoreProduct[]
  }
}
