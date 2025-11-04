import React from "react";
import logo from '../src/Screenshot 2025-11-04 152432.png'

// Supreme Environmental - Single-file React component
// Uses Tailwind CSS utility classes. Designed as a clean, responsive one-page site
// that can be dropped into a React app (with Tailwind configured).
// Replace LOGO_SRC with your logo path and update contact info where indicated.

const LOGO_SRC = "/logo.png"; // replace with /path/to/your/logo.png

export default function SupremeWebsite() {
  const contact = {
    name: "Yanky Fogel",
    title: "EPA Certified Risk Assessor",
    office: "845-288-2661",
    cell: "845-492-9557",
    email: "info@supremeenvironmentalny.com",
    website: "www.supremeenvironmentalny.com",
    city: "Monroe, NY",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Supreme Environmental logo" className="h-48 w-50 object-contain" />
          <div>
            <div className="text-4xl font-extrabold tracking-tight">SUPREME ENVIRONMENTAL</div>
            <div className="text-sm text-slate-500"> Located in {contact.city}</div>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
          <a href="#services" className="hover:text-emerald-700">Services</a>
          <a href="#about" className="hover:text-emerald-700">About</a>
          <a href="#compliance" className="hover:text-emerald-700">Compliance</a>
          <a href="#contact" className="px-4 py-2 bg-emerald-700 text-white rounded-md shadow-sm hover:bg-emerald-600">Book Inspection</a>
        </nav>

        <div className="md:hidden">
          {/* Simple mobile action */}
          <a href="#contact" className="px-3 py-2 bg-emerald-700 text-white rounded-md text-sm">Book</a>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Fast, certified environmental inspections for NYC & NYS</h1>
          <p className="mt-4 text-slate-600 max-w-xl">EPA-certified inspectors using advanced XRF testing, thorough risk assessments, and clearance services to keep your properties safe and compliant with NYC Local Law 31 and New York State lead rental registry requirements.</p>

          <div className="mt-6 flex gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-700 text-white rounded-lg shadow hover:bg-emerald-600">Book an Inspection</a>
            <a href="#services" className="inline-flex items-center gap-2 px-5 py-3 border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50">View Services</a>
          </div>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
            <li>• Lead XRF Testing (non-destructive)</li>
            <li>• EPA Lead Risk Assessments</li>
            <li>• Lead Clearance & Dust Wipe Sampling</li>
            <li>• Asbestos Surveys & Mold Testing</li>
          </ul>
        </div>

        <div className="order-first md:order-last flex items-center justify-center">
          <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-white border border-slate-100">
            {/* placeholder for hero image */}
            <img src="/hero-lead-testing.jpg" alt="Lead testing" className="w-full object-cover h-64 md:h-96" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Our Services</h2>
        <p className="text-slate-600 mt-2 max-w-2xl">Comprehensive inspection and testing services for property owners, managers and contractors across NYC and New York State.</p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <ServiceCard
            title="Lead XRF Testing"
            desc="Non-destructive XRF testing to accurately identify lead-based paints and surfaces. Rapid on-site results and clear documentation."
            icon={<IconScanner />}
          />

          <ServiceCard
            title="Lead Risk Assessment"
            desc="Detailed risk assessments to identify hazards, pathways, and provide clear remediation recommendations aligned with EPA/HUD guidance."
            icon={<IconReport />}
          />

          <ServiceCard
            title="Lead Clearance"
            desc="Post-abatement clearance testing (dust wipe sampling) to ensure properties meet clearance criteria and official documentation."
            icon={<IconCheck />}
          />

          <ServiceCard
            title="Asbestos Surveys"
            desc="Thorough asbestos inspections for renovation or demolition projects with clear lab-backed reports."
            icon={<IconLab />}
          />

          <ServiceCard
            title="Mold & Air Quality"
            desc="Indoor air quality testing and mold inspections to protect occupant health and support repairs."
            icon={<IconAir />}
          />

          <ServiceCard
            title="Compliance Consulting"
            desc="Expert guidance to help you meet Local Law 31 (NYC) and NYS rental registry obligations and reporting."
            icon={<IconShield />}
          />
        </div>
      </section>

      {/* Compliance Banner (NYC Local Law 31) */}
      <section id="compliance" className="max-w-6xl mx-auto px-6 py-10">
        <div className="rounded-xl p-6 bg-gradient-to-r from-emerald-50 via-white to-emerald-50 border border-emerald-100 shadow-sm flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold">NYC Local Law 31 of 2020</h3>
            <p className="text-slate-600 mt-2">If you own properties in NYC, Local Law 31 requires periodic lead-based paint inspections and certified reports for certain buildings. We conduct XRF testing, risk assessments, and produce the certified documentation you need.</p>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold">New York State Lead Rental Registry</h3>
            <p className="text-slate-600 mt-2">NYS now requires registration and reporting for rental properties with lead hazards. We’ll help with testing, registration paperwork, and clearance documentation to keep your units compliant.</p>
          </div>
          <div className="md:w-48">
            <a href="#contact" className="block w-full text-center px-4 py-3 bg-emerald-700 text-white rounded-lg font-semibold">We can help — Book now</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">About Supreme Environmental</h2>
        <p className="text-slate-600 mt-3 max-w-3xl">Based in Monroe, NY, Supreme Environmental provides certified lead, asbestos, and mold inspections across NYC and New York State. Our team uses modern instrumentation and follows EPA, HUD, and NYS DOH standards to deliver accurate results and straightforward guidance. We focus on clarity, safety, and fast turnaround so you can manage your properties with confidence.</p>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold">Contact & Bookings</h2>
            <p className="text-slate-600 mt-2">Reach out to schedule an inspection or ask about compliance services.</p>

            <div className="mt-6 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <p className="font-semibold">{contact.name}</p>
              <p className="text-sm text-slate-600">{contact.title}</p>

              <div className="mt-4 grid gap-2 text-sm">
                <div className="flex items-center gap-3"><span className="w-20 text-slate-500">Office</span><span className="font-medium">{contact.office}</span></div>
                <div className="flex items-center gap-3"><span className="w-20 text-slate-500">Cell</span><span className="font-medium">{contact.cell}</span></div>
                <div className="flex items-center gap-3"><span className="w-20 text-slate-500">Email</span><a href={`mailto:${contact.email}`} className="text-emerald-700 font-medium">{contact.email}</a></div>
                <div className="flex items-center gap-3"><span className="w-20 text-slate-500">Web</span><a href={`https://${contact.website}`} className="text-emerald-700 font-medium">{contact.website}</a></div>
              </div>
            </div>
          </div>

          <div>
            <form className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm space-y-4" onSubmit={(e)=>{e.preventDefault(); alert('Thanks — we\'ll get back to you!');}}>
              <div>
                <label className="text-sm text-slate-600 block">Your name</label>
                <input className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2" placeholder="Full name" />
              </div>

              <div>
                <label className="text-sm text-slate-600 block">Email or phone</label>
                <input className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2" placeholder="Email or phone" />
              </div>

              <div>
                <label className="text-sm text-slate-600 block">Message</label>
                <textarea className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2" rows={4} placeholder="Describe the unit, address, or requirement" />
              </div>

              <div className="text-right">
                <button type="submit" className="px-5 py-2 bg-emerald-700 text-white rounded-md">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-100 mt-12 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-500">© {new Date().getFullYear()} Supreme Environmental — EPA Certified Inspectors</div>
          <div className="text-sm text-slate-500">Monroe, NY • <a href={`mailto:${contact.email}`} className="text-emerald-700">{contact.email}</a> • {contact.cell}</div>
        </div>
      </footer>
    </div>
  );
}


/* ----------------- Small presentational components & icons ----------------- */
function ServiceCard({ title, desc, icon }){
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex gap-4 items-start">
      <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700">{icon}</div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-slate-600 mt-1">{desc}</p>
      </div>
    </div>
  );
}

function IconScanner(){
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 012-2h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 17v2a2 2 0 01-2 2h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}
function IconReport(){
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 12h6M9 16h6M9 8h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/></svg>
  );
}
function IconCheck(){
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}
function IconLab(){
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v6a4 4 0 108 0V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 22h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}
function IconAir(){
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}
function IconShield(){
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l7 3v5c0 5-3.58 9.74-7 11-3.42-1.26-7-6-7-11V5l7-3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}