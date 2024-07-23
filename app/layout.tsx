export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <header>
            <p style={{backgroundColor:"lightblue",padding:"1rem"}}>header</p>
          </header>
          <main>{children}</main>
          <footer>
            <p style={{backgroundColor:"ghostwhite",padding:"1rem"}}>footer</p>
          </footer>
        </body>
      </html>
    )
  }