import './globals.css'
import { Inter } from 'next/font/google'
import HeaderConditional from '../components/HeaderConditional'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DeepNidra - Yoga Nidra Lessons',
  description: 'Discover the power of yoga nidra with DeepNidra\'s guided lessons',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground`}>
        <div 
          className="fixed inset-0 bg-repeat z-0 opacity-5" 
          style={{ backgroundImage: "url('/placeholder.svg?height=200&width=200')" }}
          aria-hidden="true"
        ></div>
        <div className="relative z-10">
          <HeaderConditional />
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </main>
          <footer className="bg-background/80 backdrop-blur-sm border-t border-border mt-8">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-muted-foreground text-sm">
                © {new Date().getFullYear()} DeepNidra.com. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
