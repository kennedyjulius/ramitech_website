export default function Popup({ onClose }) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl max-w-md text-center">
          <h2 className="text-2xl font-bold mb-4">Check internet connection in your region</h2>
          <p className="text-gray-600 mb-6">You deserve ultra speed</p>
          <button
            onClick={onClose}
            className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    );
  }