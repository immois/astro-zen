import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight, Download, MapPin, Briefcase, School, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// === HOW TO USE ===
// 1) Replace all placeholder text (NAME, TAGLINE, etc.).
// 2) Update links in the SOCIALS array and resumeHref.
// 3) Deploy: drop this into any React project (Vite/Next.js). Tailwind styles are used by default.
// 4) Optional: Hook up the contact form to an API endpoint or Formspree.

const SOCIALS = [
  { label: "Email", href: "mailto:gpatil3@mtu.edu", icon: Mail },
  { label: "GitHub", href: "https://github.com/gauravpatil87", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gauravpatil87/", icon: Linkedin },
  { label: "Phone", href: "tel:+19063198940", icon: Phone },
];

const PROJECTS = [
  {
    title: "Reverse Power Flow Protection with SEL-751",
    blurb: "Designed logic/settings for radial feeder reverse power flow; simulated faults and validated tripping.",
    tags: ["SEL-751", "Relay Logic", "Protection", "Testing"],
    link: "#",
  },
  {
    title: "Transformer Differential: Inrush & CT Saturation",
    blurb: "Modeled harmonic restraint, analyzed CT saturation, and tuned pickup to improve sensitivity without misops.",
    tags: ["SEL-787", "Differential", "MATLAB", "ASPEN"],
    link: "#",
  },
  {
    title: "Traveling-Wave Fault Detection (Consumers Energy)",
    blurb: "Research support on distribution fault detection/location using traveling-wave features to enhance accuracy.",
    tags: ["Research", "Traveling Waves", "Signal Processing"],
    link: "#",
  },
];

const EXPERIENCE = [
  {
    role: "Research Assistant",
    company: "Michigan Technological University (Consumers Energy Project)",
    time: "Aug 2025 – Present",
    bullets: [
      "Distribution fault detection using traveling-wave techniques; simulation, data analysis, validation.",
      "Collaborate with PhD researchers to enhance fault location accuracy and benchmarking.",
    ],
  },
  {
    role: "Teaching Assistant / Grader",
    company: "Michigan Technological University",
    time: "Jan 2025 – Present",
    bullets: [
      "Led EE4228 Power Electronics labs; provided experiment guidance and safety oversight.",
      "Graded EE2112 Electrical Circuits II and EE2190 Photonics with actionable feedback.",
    ],
  },
  {
    role: "Executive Engineer (Distribution O&M)",
    company: "Torrent Power Ltd., Bhiwandi, India",
    time: "Jun 2023 – Jul 2024",
    bullets: [
      "Supervised 22 kV/11 kV feeders, substations, RMUs, and switchgear O&M; maintained zero‑accident record.",
      "Led control center operations, technician training, and SCADA integration with HV equipment.",
    ],
  },
  {
    role: "Graduate Engineer Trainee",
    company: "Torrent Power Ltd., Bhiwandi, India",
    time: "Jun 2022 – Jul 2023",
    bullets: [
      "Directed power restoration, material tracking/reconciliation, and vendor billing.",
      "Executed system earthing improvement project to enhance safety and reliability.",
    ],
  },
  {
    role: "Internship Trainee",
    company: "TATA Power Ltd., Kalyan, India",
    time: "Dec 2021 – Jan 2022",
    bullets: [
      "Hands‑on at 110/22 kV receiving station: transformers, SCADA, AIS/GIS; assisted HV testing/troubleshooting.",
    ],
  },
];

const EDUCATION = [
  { school: "Michigan Technological University", degree: "MS, Electrical Engineering — Power Systems (GPA 3.85/4)", time: "Expected Fall 2026" },
  { school: "Smt. Indira Gandhi College of Engineering, Navi Mumbai", degree: "BE, Electrical Engineering (CGPA 8.71/10)", time: "2019 – 2022" },
  { school: "VPM's Polytechnic, Thane", degree: "Diploma in Electrical Power System (75.33%)", time: "2016 – 2019" },
];

const resumeHref = "/Patil_GauravAmrutrao_Resume.pdf"; // Replace with your resume file URL

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="py-16 sm:py-20" >
    <div className="max-w-6xl mx-auto px-4">
      <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-3xl sm:text-4xl font-semibold tracking-tight">
        {title}
      </motion.h2>
      <div className="mt-8">{children}</div>
    </div>
  </section>
);

export default function PersonalSite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/50 border-b">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="#home" className="font-semibold text-lg">gauravpatil.dev</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a className="hover:opacity-70" href="#about">About</a>
            <a className="hover:opacity-70" href="#projects">Projects</a>
            <a className="hover:opacity-70" href="#experience">Experience</a>
            <a className="hover:opacity-70" href="#education">Education</a>
            <a className="hover:opacity-70" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild>
              <a href={resumeHref} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <Download className="size-4" /> Resume
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-indigo-300 via-cyan-200 to-emerald-200" />
        <div className="max-w-6xl mx-auto px-4 py-24 sm:py-32 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border bg-white/70">
              <MapPin className="size-3" /> Based in Houghton, MI
            </p>
            <h1 className="mt-4 text-4xl sm:text-6xl font-bold leading-tight">Hello, I’m <span className="underline decoration-wavy decoration-indigo-400">Gaurav A. Patil</span>.</h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-600">Power Systems • Protection & Control • Smart Grids & DER Integration</p>
            <p className="mt-3 text-slate-700 max-w-prose">I design reliable, safe, and efficient electric power systems—from distribution O&M to protective relay settings and renewable integration. I love turning complex grids into resilient, intelligent networks.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="group">
                <a href="#projects">
                  See Projects <ArrowRight className="size-4 ml-1 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
              <div className="flex flex-wrap gap-2">
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border bg-white/70 hover:bg-white">
                    <s.icon className="size-4" /> {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="md:justify-self-end">
            <Card className="rounded-3xl shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Briefcase className="size-5"/> What I do</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-slate-700">
                <p>• Protective relaying (SEL‑751/787), feeder coordination, fault studies</p>
                <p>• DER modeling, PV interconnection, hosting capacity analysis</p>
                <p>• SCADA/automation basics, substation O&M, safety leadership</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Section id="about" title="About">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-2 rounded-3xl">
            <CardContent className="p-6 text-slate-700 leading-relaxed">
              I’m a power systems engineer with hands‑on distribution experience and a research focus on protection and control. I enjoy building tools that make grids safer and smarter, and teaching labs that help the next generation of engineers get practical.
            </CardContent>
          </Card>
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><School className="size-5"/> Snapshot</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-2">
              <p>• MS @ MTU (Power Systems)</p>
              <p>• BE @ University of Mumbai</p>
              <p>• Interests: Protection, DER, grid reliability</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <Card key={p.title} className="rounded-3xl hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">{p.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-1 rounded-full border bg-white/70">{t}</span>
                  ))}
                </div>
                <div className="mt-4">
                  <a className="inline-flex items-center gap-2 text-sm underline underline-offset-4" href={p.link}>View details <ArrowRight className="size-4"/></a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-3xl md:col-span-2">
            <CardHeader>
              <CardTitle>Technical</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              <ul className="list-disc list-inside space-y-1">
                <li>Power Systems, Fault Analysis & Troubleshooting, Switchgear Protection & Testing</li>
                <li>Control Center Operations, Substation Management, Project Management</li>
                <li>System Design & Optimization; SCADA & protection basics</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle>Software</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              <ul className="list-disc list-inside space-y-1">
                <li>MATLAB, ASPEN OneLiner</li>
                <li>AcSELerator QuickSet®</li>
                <li>AutoCAD, SAP BI, MS Office</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="grid gap-6">
          {EXPERIENCE.map((e) => (
            <Card key={e.role} className="rounded-3xl">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">{e.role}</h3>
                    <p className="text-slate-600">{e.company}</p>
                  </div>
                  <p className="text-sm text-slate-500">{e.time}</p>
                </div>
                <ul className="mt-4 list-disc list-inside space-y-2 text-slate-700">
                  {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="certs" title="Certifications">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-3xl"><CardContent className="p-6 text-slate-700">
            <ul className="list-disc list-inside space-y-2">
              <li>CPR, Wilderness & Remote First Aider — American Red Cross (Summer 2025)</li>
              <li>10‑day training: Designing of Isolation Transformer — Ravi Enterprises, Thane</li>
              <li>Training: Distribution of Electricity — MSEDCL (May 28–Jun 4, 2018)</li>
              <li>Workshop: Cyber Security & Ethical Hacking — ICSO (7‑day)</li>
            </ul>
          </CardContent></Card>
        </div>
      </Section>

      <Section id="awards" title="Awards & Achievements">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-3xl"><CardContent className="p-6 text-slate-700">
            <ul className="list-disc list-inside space-y-2">
              <li>Runner‑up, HIRA (Hazard Identification & Risk Assessment) — Torrent Power, National Safety Week 2024</li>
              <li>Participant award, Skit on Behavioural Safety — Torrent Power, 2024</li>
              <li>Runner‑up, District‑level General Knowledge Quiz — SIGCE</li>
            </ul>
          </CardContent></Card>
        </div>
      </Section>

      <Section id="workshops" title="Workshops / Seminars / Conferences">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-3xl"><CardContent className="p-6 text-slate-700">
            <ul className="list-disc list-inside space-y-2">
              <li>20th National Conference: Advancement in Renewable Energy Technologies — VPM’s Polytechnic (Dec 22, 2017)</li>
              <li>Two‑day PCB Design workshop — The Engineers Club SIGCE (Feb 2022, online)</li>
            </ul>
          </CardContent></Card>
        </div>
      </Section>

      <Section id="activities" title="Extracurricular Activities">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-3xl"><CardContent className="p-6 text-slate-700">
            <ul className="list-disc list-inside space-y-2">
              <li>Outdoor Adventure Club Staff — planning, safety, equipment support, inclusive events</li>
              <li>1st Prize, Rangoli Making — Torrent Power (Ganesh Utsav 2023)</li>
              <li>Class Representative & Adventure Club Secretary (2021); Core team member, The Engineers Club SIGCE (2022)</li>
            </ul>
          </CardContent></Card>
        </div>
      </Section>

      <Section id="education" title="Education">
        <div className="grid md:grid-cols-2 gap-6">
          {EDUCATION.map((ed) => (
            <Card key={ed.school} className="rounded-3xl">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">{ed.school}</h3>
                <p className="text-slate-600">{ed.degree}</p>
                <p className="text-sm text-slate-500 mt-1">{ed.time}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="rounded-3xl">
            <CardContent className="p-6">
              <form onSubmit={(e) => { e.preventDefault(); alert("Thanks! Replace alert with your form handler."); }} className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">Name</label>
                  <input required className="w-full rounded-xl border px-3 py-2" placeholder="Your name"/>
                </div>
                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input required type="email" className="w-full rounded-xl border px-3 py-2" placeholder="you@example.com"/>
                </div>
                <div>
                  <label className="block text-sm mb-1">Message</label>
                  <textarea required className="w-full rounded-xl border px-3 py-2 min-h-[120px]" placeholder="How can I help?"/>
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          <div>
            <div className="grid gap-3">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl border bg-white/70 hover:bg-white">
                  <s.icon className="size-5"/> {s.label}
                </a>
              ))}
            </div>
            <p className="text-sm text-slate-500 mt-4">Prefer email? gpatil3@mtu.edu</p>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t py-10 mt-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:underline">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
