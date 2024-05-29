export default function ProductDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <h2>Features Prodcut</h2>
      {/* Carasoule here */}
    </>
  );
}
