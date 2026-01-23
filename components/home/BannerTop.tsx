'use client';

export default function BannerTop() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden -mt-20">
      {/* Banner Image */}
      <div className="absolute inset-0">
        <img
          src="/banner-hive-01.jpg"
          alt="Hive Group"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Optional Content Overlay */}
      <div className="relative h-full flex items-end justify-center pb-16 px-4">
        <div className="text-center text-white">
          {/* You can add text or leave it empty for a pure visual banner */}
        </div>
      </div>
    </section>
  );
}
