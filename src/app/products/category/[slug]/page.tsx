import {Products} from '@/features'

export default function ProductPage({ params }: { params: { slug: string } }) {
  return <Products query={params?.slug} />
}
