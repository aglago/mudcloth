import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function DesignSystemTest() {
  return (
    <div className="min-h-screen bg-background font-body px-4 sm:px-6 md:px-16 py-8 md:py-16 space-y-16 md:space-y-20">

      {/* 1. TYPOGRAPHY & TEXTURE TEST */}
      <section className="space-y-6 border-b border-border pb-10">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-muted-foreground font-semibold">
          Typography System
        </p>

        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading text-foreground">
            HEADINGS (CINZEL)
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-foreground max-w-2xl">
            Body Text (Montserrat): This is a clean, geometric sans-serif that balances
            the traditional feel of the headings with modern e-commerce clarity.
          </p>

          <p className="text-muted-foreground italic text-sm sm:text-base">
            Note: The subtle paper texture is applied to the background layer.
          </p>
        </div>
      </section>

      {/* 2. COLOR PALETTE (SOLID) */}
      <section className="space-y-6">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-muted-foreground font-semibold">
          Color Palette (Solid backgrounds)
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            ["#0B080B (Foreground)", "bg-[#0B080B]"],
            ["#FFFFFF (Background)", "bg-white border border-border"],
            ["#D4AF37 (Primary)", "bg-primary"],
            ["#C62828 (Accent)", "bg-accent"],
            ["#1B5E20 (Secondary)", "bg-secondary"],
          ].map(([label, classes]) => (
            <div key={label} className="space-y-2">
              <div className={`h-20 sm:h-24 w-full rounded-xl shadow-sm ${classes}`} />
              <p className="text-[10px] sm:text-xs font-mono text-center">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. COLOR PALETTE (TEXTURED) */}
      <section className="space-y-6">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-muted-foreground font-semibold">
          Color Palette (Paper backgrounds)
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            ["#0B080B (Foreground)", "bg-[#0B080B]"],
            ["#FFFFFF (Background)", "bg-white border border-border"],
            ["#D4AF37 (Primary)", "bg-primary"],
            ["#C62828 (Accent)", "bg-accent"],
            ["#1B5E20 (Secondary)", "bg-secondary"],
          ].map(([label, classes]) => (
            <div key={label} className="space-y-2">
              <div className={`h-20 sm:h-24 w-full rounded-xl texture-mottled shadow-sm ${classes}`} />
              <p className="text-[10px] sm:text-xs font-mono text-center">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. COMPONENT PREVIEW */}
      <section className="space-y-6">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-muted-foreground font-semibold">
          Component Preview
        </p>

        <div className="flex justify-center md:justify-start">
          <Card className="w-full max-w-sm border-none shadow-xl rounded-none">
            <CardContent className="pt-6">
              <h3 className="font-heading text-xl sm:text-2xl mb-4">
                Tribal Geometric Fabric
              </h3>

              <div className="flex flex-wrap gap-2 mb-6 items-center">
                <div className="w-6 h-4 bg-secondary rounded-sm" />
                <div className="w-6 h-4 bg-accent rounded-sm" />
                <div className="w-6 h-4 bg-[#4A3728] rounded-sm" />
                <div className="w-6 h-4 bg-primary rounded-sm" />
                <div className="w-6 h-4 bg-[#FFD700] rounded-sm" />
                <span className="text-xs text-muted-foreground ml-2">Gelorc</span>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-5 sm:py-6 text-base sm:text-lg rounded-sm shadow-md">
                View Details
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 5. TRIBAL PATTERN TEST */}
      <section className="space-y-6">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-muted-foreground font-semibold">
          Tribal Border Utility
        </p>

        <div className="w-full h-8 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-tribal" />
        </div>
      </section>

      {/* 6. RADIUS TOKENS */}
      <section className="space-y-6">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-muted-foreground font-semibold">
          Radius & Elevation
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-6">
          <div className="p-6 sm:p-8 bg-card border border-border rounded-lg shadow-sm">
            Radius LG (Card)
          </div>
          <div className="p-6 sm:p-8 bg-card border border-border rounded-2xl shadow-md">
            Radius 2XL (Section)
          </div>
          <div className="p-6 sm:p-8 bg-card border border-border rounded-3xl shadow-lg">
            Radius 3XL (Hero)
          </div>
        </div>
      </section>

    </div>
  )
}
