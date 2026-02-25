import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronDown,
  Code2,
  Blocks,
  BarChart3,
  Rocket,
  Brain,
  ArrowRight,
  GraduationCap,
  Terminal,
  Wallet,
  Globe,
  LineChart,
  Lightbulb,
  Users,
} from "lucide-react";
import { SiSolana, SiReact, SiTypescript, SiNodedotjs, SiGithub } from "react-icons/si";
import profileImg from "@assets/image_1772023164585.png";

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FloatingOrb({ className }: { className: string }) {
  return (
    <div className={`absolute rounded-full blur-3xl opacity-20 dark:opacity-10 pointer-events-none ${className}`} />
  );
}

function ParticleField() {
  const [particles] = useState(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
    }))
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/30 dark:bg-primary/20"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [-20, 20, -20], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function GridBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03] dark:opacity-[0.04]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(hsl(258 90% 62% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(258 90% 62% / 0.4) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <a href="#" className="font-mono text-sm font-semibold tracking-wider text-primary" data-testid="link-logo">
          JKR<span className="text-muted-foreground">.dev</span>
        </a>
        <div className="hidden md:flex items-center gap-1 flex-wrap">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              data-testid={`link-nav-${item.label.toLowerCase()}`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a href="mailto:jkgramos14@gmail.com" data-testid="button-hire-me">
          <Button size="sm">Hire Me</Button>
        </a>
      </div>
    </motion.nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <GridBackground />
      <ParticleField />
      <FloatingOrb className="w-96 h-96 bg-primary -top-20 -right-20" />
      <FloatingOrb className="w-80 h-80 bg-chart-3 -bottom-20 -left-20" />
      <FloatingOrb className="w-64 h-64 bg-chart-5 top-1/3 left-1/4" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <Badge variant="secondary" className="px-4 py-1.5 text-xs font-mono tracking-wider">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
              AVAILABLE FOR WORK
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6"
            data-testid="text-hero-name"
          >
            <span className="block text-foreground">Jezmer Kyle</span>
            <span className="block bg-gradient-to-r from-primary via-chart-3 to-chart-5 bg-clip-text text-transparent">
              Ramos
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed"
            data-testid="text-hero-subtitle"
          >
            Web3 Developer & Blockchain Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-sm font-mono text-primary/80 max-w-lg mx-auto mb-10"
          >
            Built and deployed live blockchain products used by real users.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex items-center justify-center gap-3 flex-wrap"
          >
            <a href="#skills" data-testid="button-view-work">
              <Button size="lg" className="gap-2">
                View My Skills <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="#contact" data-testid="button-get-in-touch">
              <Button variant="outline" size="lg">
                Get in Touch
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex items-center justify-center gap-6 mt-14 text-muted-foreground flex-wrap"
          >
            <div className="flex items-center gap-2 text-sm">
              <SiSolana className="w-4 h-4" />
              <span>Solana</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <SiReact className="w-4 h-4" />
              <span>React</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <SiTypescript className="w-4 h-4" />
              <span>TypeScript</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <SiNodedotjs className="w-4 h-4" />
              <span>Node.js</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">About Me</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight" data-testid="text-about-title">
                A Different Kind of
                <span className="bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent"> CS Student</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Computer Science student at De La Salle University Manila with a focus on blockchain technology
                  and Web3 development. While most students talk about basic knowledge of programming languages,
                  I build and deploy live blockchain products used by real users.
                </p>
                <p>
                  From token creation on Solana to full-stack web applications, I bridge the gap between
                  cutting-edge blockchain technology and practical, user-facing products. My approach combines
                  deep technical understanding with entrepreneurial execution.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-8 flex-wrap">
                <div className="flex flex-col items-center p-4 rounded-md bg-card border border-card-border min-w-[100px]">
                  <span className="text-2xl font-bold text-primary" data-testid="text-stat-projects">5+</span>
                  <span className="text-xs text-muted-foreground mt-1">Projects</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-md bg-card border border-card-border min-w-[100px]">
                  <span className="text-2xl font-bold text-chart-3" data-testid="text-stat-blockchain">Web3</span>
                  <span className="text-xs text-muted-foreground mt-1">Focused</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-md bg-card border border-card-border min-w-[100px]">
                  <span className="text-2xl font-bold text-chart-5" data-testid="text-stat-users">Real</span>
                  <span className="text-xs text-muted-foreground mt-1">Users</span>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col items-center gap-8">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-chart-3 to-chart-5 blur-sm opacity-60" />
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-chart-3 to-chart-5" />
                <img
                  src={profileImg}
                  alt="Jezmer Kyle Ramos"
                  className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full object-cover border-4 border-background"
                  style={{ objectPosition: "35% 20%" }}
                  data-testid="img-profile"
                />
              </div>

              <div className="w-full relative rounded-md border border-border bg-card p-5 font-mono text-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60 dark:bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60 dark:bg-green-400/60" />
                  <span className="text-xs text-muted-foreground ml-2">profile.ts</span>
                </div>
                <div className="space-y-1 text-xs sm:text-sm">
                  <p><span className="text-chart-3">const</span> <span className="text-chart-5">developer</span> = {"{"}</p>
                  <p className="pl-4"><span className="text-primary">name</span>: <span className="text-green-500 dark:text-green-400">"Jezmer Kyle G. Ramos"</span>,</p>
                  <p className="pl-4"><span className="text-primary">role</span>: <span className="text-green-500 dark:text-green-400">"Web3 Developer"</span>,</p>
                  <p className="pl-4"><span className="text-primary">school</span>: <span className="text-green-500 dark:text-green-400">"DLSU Manila"</span>,</p>
                  <p className="pl-4"><span className="text-primary">status</span>: <span className="text-green-500 dark:text-green-400">"Building the future"</span>,</p>
                  <p>{"}"}</p>
                </div>
                <motion.div
                  className="inline-block w-2 h-4 bg-primary ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </div>
              <FloatingOrb className="w-40 h-40 bg-primary -bottom-10 -right-10 opacity-10" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

const skillCategories = [
  {
    title: "Blockchain Development",
    icon: Blocks,
    color: "from-primary to-chart-2",
    items: [
      { text: "Token creation and deployment on Solana", icon: Wallet },
      { text: "Understanding of SPL tokens", icon: Code2 },
      { text: "Smart contract interaction & on-chain transactions", icon: Terminal },
      { text: "Wallet integration and Web3 connectivity", icon: Globe },
    ],
  },
  {
    title: "Full Stack Development",
    icon: Code2,
    color: "from-chart-3 to-chart-4",
    items: [
      { text: "Frontend website development", icon: Globe },
      { text: "Backend logic for blockchain interactions", icon: Terminal },
      { text: "API integration", icon: Code2 },
      { text: "Real-time data tracking (airdrop tracker)", icon: LineChart },
      { text: "Hosting and deployment", icon: Rocket },
    ],
  },
  {
    title: "Web3 Product Development",
    icon: Rocket,
    color: "from-chart-5 to-primary",
    items: [
      { text: "Tokenomics design", icon: BarChart3 },
      { text: "Launch process execution", icon: Rocket },
      { text: "Airdrop system design", icon: Wallet },
      { text: "User flow optimization for crypto users", icon: Users },
    ],
  },
  {
    title: "Analytical Skills",
    icon: BarChart3,
    color: "from-chart-4 to-chart-3",
    items: [
      { text: "Tracking wallet activity & on-chain data", icon: LineChart },
      { text: "Understanding transaction flows", icon: BarChart3 },
      { text: "Monitoring token performance", icon: LineChart },
      { text: "Data structuring for user dashboards", icon: Code2 },
    ],
  },
  {
    title: "Entrepreneurial Skills",
    icon: Lightbulb,
    color: "from-chart-2 to-chart-5",
    items: [
      { text: "Building projects from scratch", icon: Rocket },
      { text: "Managing launches", icon: Lightbulb },
      { text: "Community handling", icon: Users },
      { text: "Iterating based on feedback", icon: Brain },
      { text: "Risk-taking and execution under uncertainty", icon: Lightbulb },
    ],
  },
  {
    title: "Soft Skills",
    icon: Brain,
    color: "from-primary to-chart-3",
    items: [
      { text: "Self-learning", icon: Brain },
      { text: "Problem solving", icon: Lightbulb },
      { text: "Technical troubleshooting", icon: Terminal },
      { text: "Initiative and ownership", icon: Rocket },
      { text: "Working independently", icon: Users },
    ],
  },
];

function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <GridBackground />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" data-testid="text-skills-title">
            Skills & Capabilities
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A comprehensive toolkit spanning blockchain, full-stack development, product thinking, and beyond.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, idx) => (
            <AnimatedSection key={category.title} delay={idx * 0.08}>
              <Card className="relative group p-6 h-full border-card-border bg-card hover-elevate" data-testid={`card-skill-${idx}`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-md bg-gradient-to-br ${category.color}`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm tracking-tight">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <item.icon className="w-3.5 h-3.5 mt-0.5 text-primary/60 shrink-0" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Education</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" data-testid="text-education-title">
            Academic Background
          </h2>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto space-y-6">
          <AnimatedSection delay={0.1}>
            <Card className="relative p-6 border-card-border bg-card hover-elevate" data-testid="card-education-dlsu">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gradient-to-br from-primary to-chart-3 shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-base tracking-tight">De La Salle University Manila</h3>
                  <p className="text-sm text-primary font-medium mt-0.5">Bachelor of Science in Computer Science</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Developing strong foundations in algorithms, data structures, and software engineering
                    while independently pursuing blockchain development and Web3 technologies.
                  </p>
                </div>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card className="relative p-6 border-card-border bg-card hover-elevate" data-testid="card-education-pshs">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gradient-to-br from-chart-3 to-chart-4 shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-base tracking-tight">Philippine Science High School</h3>
                  <p className="text-sm text-chart-3 font-medium mt-0.5">Cagayan Valley Campus</p>
                  <p className="text-sm text-muted-foreground mt-1">Senior High (STEM) & Junior High School</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Strong STEM foundation from the premier science high school system in the Philippines.
                  </p>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function DifferentiatorSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <FloatingOrb className="w-96 h-96 bg-primary top-0 left-1/2 -translate-x-1/2" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="relative rounded-md border border-border bg-card p-8 sm:p-12 text-center">
            <p className="text-xs font-mono text-primary tracking-widest uppercase mb-6">What Sets Me Apart</p>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="p-6 rounded-md bg-muted/50 border border-border">
                <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-3">Most Students</p>
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  "Basic knowledge of Python, HTML, and teamwork"
                </p>
              </div>
              <div className="p-6 rounded-md bg-primary/5 dark:bg-primary/10 border border-primary/20">
                <p className="text-xs font-mono text-primary tracking-wider uppercase mb-3">Jezmer Kyle</p>
                <p className="text-sm font-medium leading-relaxed" data-testid="text-differentiator">
                  "Built and deployed live blockchain products used by real users"
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mt-8 max-w-lg mx-auto">
              That is a different level. Real products, real users, real on-chain transactions.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <GridBackground />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" data-testid="text-contact-title">
            Let's Build Something Together
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Interested in blockchain development, Web3 projects, or tech internships?
            I'd love to connect.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="max-w-lg mx-auto">
            <Card className="p-8 border-card-border bg-card" data-testid="card-contact">
              <div className="space-y-5">
                <a
                  href="mailto:jkgramos14@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-md bg-muted/50 border border-border transition-colors hover:border-primary/30 group"
                  data-testid="link-email"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium">jkgramos14@gmail.com</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto" />
                </a>

                <a
                  href="tel:+639175195362"
                  className="flex items-center gap-4 p-4 rounded-md bg-muted/50 border border-border transition-colors hover:border-primary/30 group"
                  data-testid="link-phone"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-md bg-chart-3/10 group-hover:bg-chart-3/20 transition-colors">
                    <Phone className="w-5 h-5 text-chart-3" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm font-medium">+63 917-519-5362</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto" />
                </a>

                <div className="flex items-center gap-4 p-4 rounded-md bg-muted/50 border border-border" data-testid="info-location">
                  <div className="flex items-center justify-center w-10 h-10 rounded-md bg-chart-5/10">
                    <MapPin className="w-5 h-5 text-chart-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm font-medium">615 Zone 4, San Jose City, N.E.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border text-center">
                <a href="mailto:jkgramos14@gmail.com" data-testid="button-send-email">
                  <Button className="w-full gap-2">
                    <Mail className="w-4 h-4" /> Send Me an Email
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
          {new Date().getFullYear()} Jezmer Kyle Ramos. All rights reserved.
        </p>
        <p className="text-xs font-mono text-muted-foreground/60">
          Built with purpose. Deployed on-chain.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <DifferentiatorSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
