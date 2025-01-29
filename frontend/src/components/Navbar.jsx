export default function Navbar() {
    return (
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
        <div className="text-2xl font-bold tracking-widest">Ramitech Networks</div>
        <div className="flex gap-6">
          {['HOME', 'ABOUT US', 'PAGES ', 'INCREASE ', 'CONTACT'].map((item) => (
            <span key={item} className="hover:text-green-400 cursor-pointer transition-colors">
              {item}
            </span>
          ))}
        </div>
      </nav>
    );
  }