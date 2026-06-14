import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, animate, useScroll, useSpring } from 'framer-motion'
import { Rocket, Palette, Layers, Code, Shield, Cloud, TrendingUp, Globe, Package, Users, Zap, ArrowRight, Check, Star, Building, Target, Lock, Cpu, Sparkles, Award, Heart, FileText, Search, PenTool, Database, Server, TestTube, Rocket as RocketIcon, BarChart } from 'lucide-react'

// Particle Background
function ParticleBackground() {
  const particles = Array.from({ length: 60 }, (_, i) => i)

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary-400/20 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
          }}
          animate={{
            y: [null, -100],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

// Animated Gradient Orbs
function GradientOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

// Glass Card Component
function GlassCard({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={`glass-card rounded-3xl ${className}`}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  )
}

// Hero Section - Roadmap Introduction
function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-400 via-dark-200/50 to-dark-100" />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-400 to-cyan-400 animate-pulse" />
            <span className="text-sm text-gray-300 tracking-wide uppercase">Enterprise E-Commerce Platform</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="block text-white">The Future of</span>
            <span className="block mt-2 gradient-text">GCC Commerce</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            A premium enterprise e-commerce platform designed for scalable growth across
            <span className="text-white font-medium"> Saudi Arabia, UAE, Qatar, Oman, and Bahrain</span>
          </motion.p>

          {/* GCC Countries Pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {[
              { name: 'Saudi Arabia', color: 'from-green-500/20 to-emerald-500/20', border: 'border-green-500/30' },
              { name: 'UAE', color: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/30' },
              { name: 'Qatar', color: 'from-purple-500/20 to-violet-500/20', border: 'border-purple-500/30' },
              { name: 'Oman', color: 'from-amber-500/20 to-orange-500/20', border: 'border-amber-500/30' },
              { name: 'Bahrain', color: 'from-rose-500/20 to-red-500/20', border: 'border-rose-500/30' },
            ].map((country, i) => (
              <motion.div
                key={country.name}
                className={`px-5 py-2 rounded-full glass bg-gradient-to-r ${country.color} ${country.border}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm font-medium text-gray-200">{country.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <span className="text-xs text-gray-500 uppercase tracking-widest">Explore the Roadmap</span>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-1">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-primary-400 to-cyan-400"
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Vision Highlights
function VisionSection() {
  const visions = [
    {
      icon: Package,
      title: 'Product Excellence',
      desc: 'A comprehensive e-commerce catalog showcasing thousands of products with intuitive navigation and premium presentation.',
    },
    {
      icon: Globe,
      title: 'Regional Presence',
      desc: 'Strategic expansion across five GCC nations with localized experiences for each market.',
    },
    {
      icon: Award,
      title: 'Premium Experience',
      desc: 'World-class customer journey designed for the discerning enterprise clientele.',
    },
    {
      icon: Layers,
      title: 'Scalable Foundation',
      desc: 'Enterprise-grade architecture built for growth and future expansion.',
    },
  ]

  return (
    <section className="py-32 relative" id="vision">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-100/50 via-dark-200/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm text-primary-400 uppercase tracking-widest mb-4 block">The Vision</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Building <span className="gradient-text">Digital Excellence</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Creating a foundation for commerce leadership across the Arabian Gulf
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {visions.map((item, i) => (
            <GlassCard key={i} delay={i * 0.15} className="p-8">
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary-500/20 via-cyan-500/10 to-transparent">
                  <item.icon className="w-7 h-7 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}

// Roadmap Hero - The Main Visual
function RoadmapSection() {
  const phases = [
    {
      phase: 1,
      title: 'Discovery & Strategy',
      description: 'Understanding your business, market position, and defining the path forward.',
      deliverables: ['Business Analysis', 'Requirements Gathering', 'Market Research', 'Strategic Planning'],
      icon: Search,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      phase: 2,
      title: 'UI/UX Design',
      description: 'Crafting intuitive interfaces and seamless user journeys that captivate customers.',
      deliverables: ['User Journey Maps', 'Wireframes', 'Design System', 'Interactive Prototypes'],
      icon: PenTool,
      color: 'from-cyan-500 to-teal-500',
    },
    {
      phase: 3,
      title: 'Architecture & Database',
      description: 'Building a robust, scalable foundation for enterprise-level performance.',
      deliverables: ['System Architecture', 'Database Design', 'API Structure', 'Security Framework'],
      icon: Database,
      color: 'from-teal-500 to-emerald-500',
    },
    {
      phase: 4,
      title: 'Development',
      description: 'Transforming designs into a fully functional, high-performance platform.',
      deliverables: ['Customer Portal', 'Admin Dashboard', 'Product Management', 'Payment Integration'],
      icon: Code,
      color: 'from-emerald-500 to-green-500',
    },
    {
      phase: 5,
      title: 'Testing & Quality',
      description: 'Ensuring flawless performance, security, and reliability across all platforms.',
      deliverables: ['Performance Testing', 'Security Audits', 'Cross-browser Testing', 'Quality Assurance'],
      icon: TestTube,
      color: 'from-green-500 to-lime-500',
    },
    {
      phase: 6,
      title: 'Deployment',
      description: 'Launching your platform with enterprise-grade infrastructure and security.',
      deliverables: ['Cloud Infrastructure', 'Domain Setup', 'SSL Security', 'Performance Optimization'],
      icon: Cloud,
      color: 'from-lime-500 to-yellow-500',
    },
    {
      phase: 7,
      title: 'Growth & Evolution',
      description: 'Continuous enhancement and scaling to meet your expanding business needs.',
      deliverables: ['Analytics & Insights', 'Feature Enhancement', 'Performance Monitoring', 'Future Roadmap'],
      icon: BarChart,
      color: 'from-yellow-500 to-amber-500',
    },
  ]

  return (
    <section className="py-32 relative" id="roadmap">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-200/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm text-primary-400 uppercase tracking-widest mb-4 block">The Journey</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Project <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Seven strategic phases to transform your vision into a market-leading platform
          </p>
        </motion.div>

        {/* Main Roadmap Visual */}
        <div className="relative max-w-6xl mx-auto">
          {/* Animated Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="roadmapGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.5" />
                <stop offset="50%" stopColor="rgb(34, 211, 238)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.phase}
                className={`relative ${i % 2 === 0 ? '' : 'lg:translate-y-16'}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                <GlassCard className="p-8 relative overflow-hidden group">
                  {/* Background Glow */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${phase.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />

                  {/* Phase Number */}
                  <div className="flex items-start gap-6">
                    <div className={`relative`}>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg`}>
                        <phase.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-dark-200 border-2 border-primary-500/50 flex items-center justify-center">
                        <span className="text-xs font-bold text-primary-400">{phase.phase}</span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                        {phase.title}
                      </h3>
                      <p className="text-gray-400 mb-5 leading-relaxed">{phase.description}</p>

                      <div className="space-y-2">
                        <span className="text-xs text-gray-500 uppercase tracking-wider">Key Deliverables</span>
                        <div className="grid grid-cols-2 gap-2">
                          {phase.deliverables.map((d, j) => (
                            <motion.div
                              key={j}
                              className="flex items-center gap-2 text-sm text-gray-300"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 + j * 0.1 }}
                            >
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${phase.color}`} />
                              {d}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connecting Line for Desktop */}
                  {i < phases.length - 1 && (
                    <div className="hidden lg:block absolute -bottom-8 left-1/2 w-0.5 h-8 bg-gradient-to-b from-primary-500/50 to-transparent" />
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Why This Approach
function ApproachSection() {
  const approaches = [
    {
      icon: Target,
      title: 'Strategic Clarity',
      desc: 'Every step is designed with clear business outcomes in mind, ensuring alignment with your organizational goals.',
    },
    {
      icon: Layers,
      title: 'Enterprise Architecture',
      desc: 'Built on scalable foundations that grow with your business, from thousands to millions of customers.',
    },
    {
      icon: Shield,
      title: 'Security First',
      desc: 'Enterprise-grade security measures protecting customer data and business operations.',
    },
    {
      icon: Globe,
      title: 'Regional Expertise',
      desc: 'Designed for the GCC market with deep understanding of regional requirements and preferences.',
    },
    {
      icon: Award,
      title: 'Premium Experience',
      desc: 'World-class user interfaces that build trust and drive customer engagement.',
    },
    {
      icon: TrendingUp,
      title: 'Future Ready',
      desc: 'Architecture designed for seamless integration of future technologies and expansion.',
    },
  ]

  return (
    <section className="py-32 relative" id="approach">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-200/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm text-primary-400 uppercase tracking-widest mb-4 block">The Approach</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Why This <span className="gradient-text">Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A proven methodology designed for enterprise success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approaches.map((item, i) => (
            <motion.div
              key={i}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="glass-card rounded-3xl p-8 h-full transition-all duration-500 group-hover:bg-white/[0.04] relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500" />

                <div className="p-3 rounded-xl bg-gradient-to-br from-primary-500/20 to-cyan-500/10 inline-block mb-5 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-primary-400" />
                </div>

                <h3 className="text-lg font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Deliverables Showcase
function DeliverablesSection() {
  const deliverables = [
    { icon: FileText, title: 'Strategic Documentation', desc: 'Complete business analysis and requirements documentation' },
    { icon: PenTool, title: 'Design System', desc: 'Comprehensive UI components and brand guidelines' },
    { icon: Database, title: 'Technical Architecture', desc: 'Scalable database and system infrastructure' },
    { icon: Code, title: 'Source Code', desc: 'Fully documented, maintainable codebase' },
    { icon: Server, title: 'Infrastructure', desc: 'Cloud deployment and hosting configuration' },
    { icon: Shield, title: 'Security Framework', desc: 'Complete security implementation and protocols' },
    { icon: BarChart, title: 'Analytics Dashboard', desc: 'Business intelligence and reporting tools' },
    { icon: Heart, title: 'Support Plan', desc: 'Ongoing maintenance and enhancement roadmap' },
  ]

  return (
    <section className="py-32 relative" id="deliverables">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-200/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm text-primary-400 uppercase tracking-widest mb-4 block">What You Receive</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Project <span className="gradient-text">Deliverables</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Complete assets and documentation for your enterprise platform
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {deliverables.map((item, i) => (
            <GlassCard
              key={i}
              delay={i * 0.08}
              className="p-6 text-center group hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-cyan-500/10 mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="font-medium text-white text-sm mb-2">{item.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed hidden md:block">{item.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}

// Platform Capabilities
function CapabilitiesSection() {
  const capabilities = [
    { icon: Package, title: 'Product Management', desc: 'Intuitive catalog management with advanced filtering and search' },
    { icon: Users, title: 'Customer Portal', desc: 'Seamless shopping experience across all devices' },
    { icon: Building, title: 'Admin Dashboard', desc: 'Comprehensive control panel for business operations' },
    { icon: Cpu, title: 'Performance Engine', desc: 'Optimized for speed and scalability' },
  ]

  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-200/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm text-primary-400 uppercase tracking-widest mb-4 block">Platform Features</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Core <span className="gradient-text">Capabilities</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {capabilities.map((item, i) => (
            <GlassCard key={i} delay={i * 0.12} className="p-8 group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center mb-5 shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-shadow">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}

// Footer
function FooterSection() {
  return (
    <footer className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-200/50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center">
              <Building className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-semibold">GCC Enterprise Commerce</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['Saudi Arabia', 'UAE', 'Qatar', 'Oman', 'Bahrain'].map((country, i) => (
              <span key={i} className="text-sm text-gray-500">{country}</span>
            ))}
          </div>

          <p className="text-gray-500 text-sm">
            Enterprise E-Commerce Platform Roadmap
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

// Main App
function App() {
  return (
    <div className="min-h-screen bg-dark-400 text-white overflow-x-hidden">
      <ParticleBackground />
      <GradientOrbs />

      {/* Minimal Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center">
              <Building className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold hidden sm:block text-sm">GCC Commerce</span>
          </motion.div>

          <motion.div
            className="text-xs text-gray-500 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Enterprise Roadmap
          </motion.div>
        </div>
      </nav>

      <main>
        <HeroSection />
        <VisionSection />
        <RoadmapSection />
        <ApproachSection />
        <DeliverablesSection />
        <CapabilitiesSection />
        <FooterSection />
      </main>
    </div>
  )
}

export default App
