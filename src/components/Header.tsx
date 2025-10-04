export function Header() {
  return (
    <header className="w-full p-6 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        <span className="text-white text-sm">Work</span>
        <span className="text-gray-400 text-sm">Talks</span>
        <span className="text-gray-400 text-sm">About</span>
        <span className="text-gray-400 text-sm">Contact</span>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-5 h-3 bg-gray-600 rounded-sm"></div>
        <div className="w-5 h-3 bg-gray-600 rounded-sm"></div>
        <div className="w-6 h-6 border border-gray-600 rounded-full flex items-center justify-center">
          <span className="text-gray-400 text-xs">×</span>
        </div>
      </div>
    </header>
  );
}