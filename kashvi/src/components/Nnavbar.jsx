
export default function NnavBar() {
  return (
    <div className="w-full bg-[#244b3f] text-white px-6 py-3">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between gap-4">

        {/* Left Text */}
        <p className="text-sm font-medium tracking-wide">
          From the Heart of India to the World
        </p>

        {/* Right Features */}
        <div className="flex items-center gap-6 text-sm">
          <span> 100% Natural</span>
          <span> Premium Quality</span>
          <span> Safe &amp; Trusted</span>
        </div>

      </div>
    </div>
  );
}
