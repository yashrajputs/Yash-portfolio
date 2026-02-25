import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";

export default function Home() {
  // Number of frames in the sequence (00 to 23 => 24 frames)
  const TOTAL_FRAMES = 24;

  return (
    <main className="bg-[#121212] min-h-screen relative text-white antialiased overflow-clip">
      {/* 
        The ScrollyCanvas holds the 500vh container and sticky canvas.
        The Overlay holds the sticky text content.
      */}
      <div className="relative">
        <ScrollyCanvas frameCount={TOTAL_FRAMES} />
        <Overlay />
      </div>

      {/* 
        Projects section flows naturally below the 500vh container.
      */}
      <Projects />

      {/* Minimal Footer */}
      <footer className="w-full py-12 px-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/40 bg-[#0a0a0a] border-t border-white/5">
        <p className="tracking-widest uppercase mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} YASH. All rights reserved.
        </p>
        <div className="flex gap-6 tracking-widest font-semibold uppercase text-emerald-400">
          <a href="mailto:yashrajput8232@gmail.com" className="hover:text-white transition-colors">Email</a>
          <a href="https://www.linkedin.com/in/yash-rajput-30a8a3264/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/yashrajputs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://leetcode.com/u/yashrajput7182/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LeetCode</a>
        </div>
      </footer>
    </main>
  );
}
