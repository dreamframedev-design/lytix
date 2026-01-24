'use client';

import { useState, FormEvent } from 'react';
import Image from "next/image";
import { Mail, MapPin, Send, Building2, Handshake, FlaskConical, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-lytix-light text-lytix-navy">
      <main className="relative z-[2]">
        {/* Hero Section - Full Width Background */}
        <header className="relative min-h-[60vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/orb 3.webp"
              alt="Lytix contact"
              fill
              className="object-cover object-center scale-x-[-1]"
              priority
              quality={90}
            />
            {/* White gradient overlay - left to right */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-16">
            <div className="max-w-2xl">
              <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-lytix-teal uppercase tracking-[0.25em]">
                <span>Contact</span>
                <span className="text-lytix-ice">/</span>
                <span>Get in Touch</span>
              </nav>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-lytix-navy">
                Connect with <span className="text-lytix-teal-dark">Lytix Biopharma</span>
              </h1>
              <p className="max-w-xl text-xl text-lytix-navy/70 font-light leading-relaxed">
                Have questions about our science, pipeline, or partnership opportunities?
                Our team responds to inquiries within <strong className="text-lytix-navy">2 business days.</strong>
              </p>
            </div>
          </div>
        </header>

        {/* Contact Method Cards */}
        <section className="py-24 bg-white border-y border-lytix-ice">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

              {/* General Inquiries */}
              <div className="group glass-card p-1 rounded-[2.5rem] glow-border">
                <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-lytix-ice rounded-2xl flex items-center justify-center text-lytix-teal mb-6 group-hover:bg-lytix-teal group-hover:text-white transition-all duration-300">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-lytix-navy">General Inquiries</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-lytix-navy/50 mb-6">info@lytixbiopharma.com</p>
                  <a href="mailto:info@lytixbiopharma.com" className="text-sm font-bold text-lytix-teal hover:text-lytix-navy transition-colors animated-underline">
                    Email Now →
                  </a>
                </div>
              </div>

              {/* Business Development */}
              <div className="group glass-card p-1 rounded-[2.5rem] glow-border">
                <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-lytix-coral/10 rounded-2xl flex items-center justify-center text-lytix-coral mb-6 group-hover:bg-lytix-coral group-hover:text-white transition-all duration-300">
                    <Handshake className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-lytix-navy">Business Development</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-lytix-navy/50 mb-6">bd@lytixbiopharma.com</p>
                  <a href="mailto:bd@lytixbiopharma.com" className="text-sm font-bold text-lytix-coral hover:text-lytix-navy transition-colors animated-underline">
                    Partner with Us →
                  </a>
                </div>
              </div>

              {/* Investor Relations */}
              <div className="group glass-card p-1 rounded-[2.5rem] glow-border">
                <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-lytix-gold/20 rounded-2xl flex items-center justify-center text-lytix-gold mb-6 group-hover:bg-lytix-gold group-hover:text-lytix-navy transition-all duration-300">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-lytix-navy">Investor Relations</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-lytix-navy/50 mb-6">ir@lytixbiopharma.com</p>
                  <a href="mailto:ir@lytixbiopharma.com" className="text-sm font-bold text-lytix-gold hover:text-lytix-navy transition-colors animated-underline">
                    Investor Inquiries →
                  </a>
                </div>
              </div>

              {/* Headquarters */}
              <div className="group glass-card p-1 rounded-[2.5rem] glow-border">
                <div className="bg-white rounded-[2.2rem] p-10 h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-lytix-navy/10 rounded-2xl flex items-center justify-center text-lytix-navy mb-6 group-hover:bg-lytix-navy group-hover:text-white transition-all duration-300">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-lytix-navy">Headquarters</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-lytix-navy/50 mb-6">Oslo, Norway</p>
                  <span className="text-sm font-semibold text-lytix-navy/40 italic">Clinical-Stage Biotech</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 bg-lytix-light relative">
          <div className="absolute inset-0 molecular-pattern opacity-50" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

              {/* Left Column - Info */}
              <div className="lg:col-span-5 space-y-12">
                <div>
                  <h2 className="text-4xl font-bold tracking-tight text-lytix-navy mb-6">
                    How we can <span className="gradient-text">help</span>
                  </h2>
                  <p className="text-lg text-lytix-navy/60 font-light leading-relaxed">
                    Whether you&apos;re interested in our science, exploring partnership opportunities,
                    or seeking clinical trial information, we&apos;re here to assist.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-6">
                    <div className="w-8 h-8 rounded-full bg-lytix-teal/10 flex items-center justify-center text-lytix-teal flex-shrink-0">
                      <FlaskConical className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lytix-navy mb-1">Scientific Inquiries</h4>
                      <p className="text-sm text-lytix-navy/50 font-light leading-relaxed">
                        Questions about our oncolytic molecule platform and mechanism of action.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-8 h-8 rounded-full bg-lytix-coral/10 flex items-center justify-center text-lytix-coral flex-shrink-0">
                      <Handshake className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lytix-navy mb-1">Partnership Opportunities</h4>
                      <p className="text-sm text-lytix-navy/50 font-light leading-relaxed">
                        Co-development and licensing discussions for key markets.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-8 h-8 rounded-full bg-lytix-gold/20 flex items-center justify-center text-lytix-gold flex-shrink-0">
                      <Users className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lytix-navy mb-1">Clinical Trial Information</h4>
                      <p className="text-sm text-lytix-navy/50 font-light leading-relaxed">
                        Patient and healthcare provider inquiries about ongoing studies.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="p-6 rounded-2xl bg-white border border-lytix-ice">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-lytix-navy/40 mb-4">Quick Links</h4>
                  <div className="space-y-1">
                    <Link href="/pipeline" className="phosphor-link text-sm text-lytix-navy/60 hover:text-lytix-teal">
                      View Our Pipeline
                    </Link>
                    <Link href="/partnerships" className="phosphor-link text-sm text-lytix-navy/60 hover:text-lytix-teal">
                      Partnership Opportunities
                    </Link>
                    <Link href="/clinical-trials" className="phosphor-link text-sm text-lytix-navy/60 hover:text-lytix-teal">
                      Clinical Trials
                    </Link>
                    <Link href="/investor-relations" className="phosphor-link text-sm text-lytix-navy/60 hover:text-lytix-teal">
                      Investor Relations
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="lg:col-span-7">
                <div className="glass-card p-10 md:p-14 rounded-[3rem] shadow-2xl specular-glass">
                  <h3 className="text-2xl font-bold mb-2 tracking-tight text-lytix-navy">Send Us a Message</h3>
                  <p className="text-sm text-lytix-navy/50 mb-10">We&apos;ll get back to you within 2 business days.</p>

                  {submitStatus === 'success' && (
                    <div className="mb-8 p-5 bg-lytix-teal/10 border border-lytix-teal/30 rounded-2xl text-lytix-teal-dark">
                      <p className="font-semibold">Thank you for reaching out! We&apos;ll respond shortly.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-8 p-5 bg-lytix-coral/10 border border-lytix-coral/30 rounded-2xl text-lytix-coral">
                      <p className="font-semibold">Something went wrong. Please try again or email us directly.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="firstName" className="label-premium">First Name</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="John"
                          className="input-premium w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="label-premium">Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Doe"
                          className="input-premium w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="label-premium">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john.doe@company.com"
                        className="input-premium w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="label-premium">Company / Organization</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className="input-premium w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="label-premium">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="input-premium w-full appearance-none cursor-pointer"
                      >
                        <option value="">Select a subject...</option>
                        <option value="general">General Inquiry</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="clinical">Clinical Trial Information</option>
                        <option value="investor">Investor Relations</option>
                        <option value="media">Media / Press</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="label-premium">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        className="input-premium w-full resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-lytix-teal text-white font-bold rounded-2xl hover:bg-lytix-teal-dark transition-all shadow-xl shadow-lytix-teal/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-sm uppercase tracking-widest"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-lytix-navy/40 text-center">
                      By submitting, you agree to our{" "}
                      <Link href="/privacy" className="text-lytix-teal hover:underline">
                        Privacy Policy
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* CTA Section - Outside main for ribbon visibility */}
      <section className="py-24 bg-navy-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-lytix-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-lytix-coral/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-5xl mx-auto">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 bg-lytix-teal/20 text-lytix-cyan rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 ring-1 ring-lytix-teal/30">
                Partnership Opportunities
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Ready to explore a partnership?
              </h2>
              <p className="text-lg text-lytix-ice/70 font-light max-w-xl">
                We&apos;re actively seeking partners for co-development and outlicensing across key markets.
              </p>
            </div>

            <Link
              href="/partnerships"
              className="flex-shrink-0 px-10 py-5 bg-lytix-coral hover:bg-lytix-raspberry text-white rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl shadow-lytix-coral/30 hover:scale-105 transition-all flex items-center gap-3"
            >
              Explore Partnerships
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
