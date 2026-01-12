function App() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center">
      {/* Logo animado */}
      <div className="relative mb-6">
        <span className="text-6xl md:text-8xl font-mono font-bold text-emerald-400 animate-pulse">
          {"</>"}
        </span>
      </div>

      {/* Nombre con efecto de terminal */}
      <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
        Diego Kippes
        <span className="inline-block w-[3px] h-8 md:h-12 bg-emerald-400 ml-2 animate-blink align-middle" />
      </h1>

      {/* Subtítulo */}
      <p className="mt-4 text-zinc-500 text-lg tracking-widest uppercase">
        Developer
      </p>
    </div>
  )
}

export default App
