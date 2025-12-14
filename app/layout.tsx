export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#F7F9F8] text-gray-800">
        {children}
      </body>
    </html>
  )
}
