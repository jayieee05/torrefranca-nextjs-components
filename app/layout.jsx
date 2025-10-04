import './globals.css'

export const metadata = {
  title: 'My Profile',
  description: 'Personal profile built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
