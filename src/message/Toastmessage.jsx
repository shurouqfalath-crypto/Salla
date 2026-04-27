export default function Toastmessage({ message }) {
  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 shadow-md px-4 py-2 rounded-md flex items-center gap-2">

      <span className="text-black  text-lg font-bold"></span>

      <p className="text-gray-800 text-sm">{message}</p>

    </div>
  );
}
