export default function TypographyP({ children }: Readonly<{ children: string }>) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      {children}
    </p>
  )
}
