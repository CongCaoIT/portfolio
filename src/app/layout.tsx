// Root layout passthrough – the [locale] layout provides html/body
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children as React.ReactElement;
}
