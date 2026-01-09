import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const favoriteGames = [
    { name: "Cyberpunk 2077", genre: "RPG", color: "from-cyan-500 to-blue-500" },
    { name: "Deus Ex", genre: "Action RPG", color: "from-purple-500 to-pink-500" },
    { name: "Ghostrunner", genre: "Action", color: "from-cyan-400 to-teal-500" },
    { name: "Mirror's Edge", genre: "Parkour", color: "from-red-500 to-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[2px] w-full opacity-30"
            style={{
              top: `${20 + i * 15}%`,
              background: 'linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)',
              animation: `slide-line ${8 + i * 2}s linear infinite`,
              animationDelay: `${i * 0.5}s`,
              filter: 'blur(1px)',
            }}
          />
        ))}
      </div>

      <header className="relative z-10 bg-card/80 backdrop-blur-md border-b-2 neon-border">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-5xl font-black text-primary neon-glow animate-neon-pulse">
            UJICASS
          </h1>
          <div className="flex gap-6">
            <a
              href="https://t.me/Ujicass"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-3 rounded-lg neon-border bg-card hover:bg-primary/10 transition-all duration-300 hover:scale-110">
                <Icon name="Send" className="w-8 h-8 text-primary group-hover:animate-pulse" />
              </div>
            </a>
            <div className="group cursor-pointer">
              <div className="p-3 rounded-lg neon-border bg-card hover:bg-primary/10 transition-all duration-300 hover:scale-110">
                <Icon name="User" className="w-8 h-8 text-primary group-hover:animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-6 py-16">
        <section className="text-center mb-20 animate-float">
          <Card className="max-w-2xl mx-auto p-12 neon-box bg-card/90 backdrop-blur-sm border-2 border-primary">
            <h2 className="text-6xl font-black text-primary neon-glow mb-4">
              UJICASS
            </h2>
            <p className="text-muted-foreground text-lg tracking-wide">
              CYBER • GAMING • PORTFOLIO
            </p>
          </Card>
        </section>

        <section className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-12 text-primary neon-glow">
            ЛЮБИМЫЕ ИГРЫ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {favoriteGames.map((game, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden neon-border bg-card/90 backdrop-blur-sm border-2 border-primary hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className="p-8 relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <Icon name="Gamepad2" className="w-10 h-10 text-primary group-hover:animate-pulse" />
                    <span className="text-xs font-bold text-muted-foreground tracking-widest uppercase">
                      {game.genre}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {game.name}
                  </h4>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <Card className="max-w-2xl mx-auto p-12 neon-box bg-card/90 backdrop-blur-sm border-2 border-primary text-center">
            <Icon name="Mail" className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
            <h3 className="text-3xl font-bold text-primary neon-glow mb-4">
              КОНТАКТЫ
            </h3>
            <p className="text-muted-foreground mb-6">
              Связаться со мной можно через Telegram
            </p>
            <a
              href="https://t.me/Ujicass"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <div className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg neon-box hover:scale-105 transition-all duration-300">
                НАПИСАТЬ В TELEGRAM
              </div>
            </a>
          </Card>
        </section>
      </main>

      <footer className="relative z-10 text-center py-8 text-muted-foreground">
        <p className="text-sm tracking-widest">© 2026 UJICASS • POWERED BY NEON</p>
      </footer>
    </div>
  );
};

export default Index;
