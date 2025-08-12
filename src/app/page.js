"use client";

export default function Home() {
  const handleClick = async () => {
    const response = await fetch("/api/hello");
    const data = await response.json();
    alert(data.message);
  };
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold">Hello, World!</h1>
      <button
        onClick={handleClick}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Click Me!
      </button>
    </main>
  );
}
