import './globals.css'

export const metadata = {
  title: 'ApexMatrix Commerce - Next-Gen Storefront',
  description: 'A premium, high-conversion e-commerce storefront engineered for elite frontend performance.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
