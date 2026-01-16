export default function Projects() {
    return (
      <div className="max-w-6xl mx-auto p-10">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 bg-clip-text text-transparent" style={{ fontFamily: "'Times New Roman', serif" }}>Current Projects</h1>
        
        {/* Grid Layout: 1 column on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Project Card 1 */}
          <div className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition bg-white">
            <div className="h-40 bg-blue-100 rounded-lg mb-4 flex items-center justify-center text-4xl">
              🤖
            </div>
            <h3 className="font-bold text-xl mb-2 bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 bg-clip-text text-transparent" style={{ fontFamily: "'Times New Roman', serif" }}>Jetson AI Orchestrator</h3>
            <p className="text-lg text-slate-600 mb-4 tracking-tight leading-tight" style={{ fontFamily: "'Times New Roman', serif" }}>
              Building a localized AI cluster using NVIDIA Jetson Orin Nano for real-time edge computing.
            </p>
            <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded">Robotics</span>
          </div>
  
          {/* Project Card 2 */}
          <div className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition bg-white">
            <div className="h-40 bg-amber-100 rounded-lg mb-4 flex items-center justify-center text-4xl">
              ☀️
            </div>
            <h3 className="font-bold text-xl mb-2 bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 bg-clip-text text-transparent" style={{ fontFamily: "'Times New Roman', serif" }}>Solar Energy Monitor</h3>
            <p className="text-lg text-slate-600 mb-4 tracking-tight leading-tight" style={{ fontFamily: "'Times New Roman', serif" }}>
              A dashboard to track panel capacity, battery storage efficiency, and grid feed-in rates.
            </p>
            <span className="text-xs font-semibold bg-amber-100 text-amber-800 px-2 py-1 rounded">IoT</span>
          </div>
  
          {/* Project Card 3 */}
          <div className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition bg-white">
            <div className="h-40 bg-green-100 rounded-lg mb-4 flex items-center justify-center text-4xl">
              🌿
            </div>
            <h3 className="font-bold text-xl mb-2 bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 bg-clip-text text-transparent" style={{ fontFamily: "'Times New Roman', serif" }}>Cozy Game List</h3>
            <p className="text-lg text-slate-600 mb-4 tracking-tight leading-tight" style={{ fontFamily: "'Times New Roman', serif" }}>
              A curated database of non-combat games like Stardew Valley, focusing on relaxation mechanics.
            </p>
            <span className="text-xs font-semibold bg-green-100 text-green-800 px-2 py-1 rounded">Gaming</span>
          </div>
  
        </div>
      </div>
    );
  }