export function TypographyList({data = []}: Readonly<{data: any[]}>) {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
    {data.map((item) => (
      <li key={item.id}>
        {item.texto}
      </li>
    ))}
  </ul>
  )
}