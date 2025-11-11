export function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url(/placeholder.svg?height=1080&width=1920&query=anime%20galaxy%20space%20cosmic)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 space-y-6">
        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">Welcome to the Galaxy</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground text-balance">
            Experience Anime
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Luxury Redefined
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Discover the finest anime merchandise and luxury clothing crafted in Nairobi, Kenya. Each piece tells a
            story.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition transform hover:scale-105">
            Shop Now
          </button>
          <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition">
            Explore Collections
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl opacity-50" />
    </section>
  )
}
