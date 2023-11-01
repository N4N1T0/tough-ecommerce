export default async function ItemPage({ params }: { params: { id: string } }) {
  return (
    <h1>{params.id}</h1>
  )
}
