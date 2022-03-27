import ResponsiveNavbar from "./components/navbar/ResponsiveNavbar";

function App() {
  return (
    <div className="bg-slate-50 ">
      {/* header */}
      <header className="w-full sticky top-0 z-[50]">
        <ResponsiveNavbar />
      </header>
      {/* main */}
      <main className="relative">
        <div className="h-screen w-full bg-blue-200">
          <span>Main 1</span>
        </div>
        <div className="h-screen w-full bg-red-200">
          <span>Main 2</span>
        </div>
      </main>

      {/* footer */}
      <footer className="h-40 w-full bg-green-200">
        <span>Footer</span>
      </footer>
    </div>
  );
}

export default App;
