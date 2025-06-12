import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray text-white p-4">
      <div className="flex gap-4">
        <Link href="/" className="hover:text-blue">Home</Link>
        <Link href="/about" className="hover:text-blue">About</Link>
        <Link href="/blog" className="hover:text-blue">Blog</Link>
      </div>
    </nav>
  );
}
