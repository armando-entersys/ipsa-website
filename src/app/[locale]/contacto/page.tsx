"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { stockImages, getBlur } from "@/data/images";
import { trackEvent } from "@/lib/analytics";

const offices = [
  {
    city: "Cd. del Carmen",
    role: "HQ",
    address: "Calle 19, No. 210, Col. Salitral, CP 24130, Cd. del Carmen, Campeche",
    phone: "+52 938 138 0550",
    phoneDetail: "",
  },
  {
    city: "Ciudad de México",
    role: "HQ",
    address:
      "Convento de Actopan No. 33, Col. Jardines de Sta. Monica, 54050 Tlalnepantla, Edo. Mex.",
    phone: "+52 55 5397 3703",
    phoneDetail: "Ext. 408, 402, 406",
  },
  { city: "Paraíso", role: "Taller", address: "Tabasco, México", phone: "", phoneDetail: "" },
  {
    city: "Cd. del Carmen",
    role: "CAD",
    address: "Calle 55 No. 70, Col. Electricistas, CP 24120, Cd. del Carmen, Campeche",
    phone: "",
    phoneDetail: "",
  },
  { city: "Villahermosa", role: "Ventas", address: "Tabasco, México", phone: "", phoneDetail: "" },
  { city: "Tampico", role: "Ventas", address: "Tamaulipas, México", phone: "", phoneDetail: "" },
];

export default function ContactPage() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const prefix = `/${locale}`;

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    queryType: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed");
      }
      setSubmitted(true);
      trackEvent("generate_lead", {
        form_name: "contact",
        industry: form.industry,
        query_type: form.queryType,
      });
    } catch {
      setError(
        locale === "es"
          ? "Error al enviar el mensaje. Por favor intente nuevamente."
          : "Failed to send message. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Hero - Contact (clean, inviting with gold accent) */}
      <section className="relative min-h-[280px] md:min-h-[380px] flex items-end overflow-hidden bg-navy-deep">
        <Image
          src={stockImages.contactHero}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={getBlur(stockImages.contactHero)}
        />
        {/* Base overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Bottom gradient for text */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 via-navy-dark/15 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 md:px-10 pb-10 lg:pb-14 pt-28">
          <nav className="text-sm text-white/60 mb-5 hero-subtitle">
            <Link href={prefix} className="hover:text-white transition-colors">
              {locale === "es" ? "Inicio" : "Home"}
            </Link>
            <ChevronRight size={14} className="inline mx-1" />
            <span className="text-white">{t("title")}</span>
          </nav>
          <div className="border-l-4 border-gold pl-6">
            <h1
              className="font-heading text-white mb-3 hero-text-strong"
              style={{
                fontWeight: 500,
                fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
              }}
            >
              {t("title")}
            </h1>
            <p className="text-white/85 text-lg max-w-2xl leading-relaxed hero-subtitle">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <span className="text-gold font-medium text-sm tracking-widest uppercase mb-3 block">
                {locale === "es" ? "Escríbenos" : "Write to us"}
              </span>
              <h2 className="font-heading font-bold text-gray-900 text-2xl mb-6">
                {t("formTitle")}
              </h2>

              {submitted ? (
                <div
                  className="bg-green-50 rounded-xl p-8 text-center shadow-card"
                >
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <p className="text-green-800 font-medium text-lg">
                    {t("success")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="flex items-center gap-3 bg-red-50 text-red-700 rounded-xl p-4 text-sm">
                      <AlertCircle size={18} className="shrink-0" />
                      {error}
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {t("name")} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="input-field rounded-xl w-full px-4 py-3 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {t("company")} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        required
                        className="input-field rounded-xl w-full px-4 py-3 text-sm"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {t("email")} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="input-field rounded-xl w-full px-4 py-3 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {t("phone")} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className="input-field rounded-xl w-full px-4 py-3 text-sm"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {t("industry")}
                      </label>
                      <select
                        name="industry"
                        value={form.industry}
                        onChange={handleChange}
                        className="input-field rounded-xl w-full px-4 py-3 text-sm bg-white"
                      >
                        <option value="">{t("selectOption")}</option>
                        <option value="oil">{t("industries.oil")}</option>
                        <option value="oils">{t("industries.oils")}</option>
                        <option value="gas">{t("industries.gas")}</option>
                        <option value="other">{t("industries.other")}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {t("queryType")}
                      </label>
                      <select
                        name="queryType"
                        value={form.queryType}
                        onChange={handleChange}
                        className="input-field rounded-xl w-full px-4 py-3 text-sm bg-white"
                      >
                        <option value="">{t("selectOption")}</option>
                        <option value="quote">{t("queryTypes.quote")}</option>
                        <option value="support">{t("queryTypes.support")}</option>
                        <option value="info">{t("queryTypes.info")}</option>
                        <option value="project">{t("queryTypes.project")}</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      {t("message")}
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className="input-field rounded-xl w-full px-4 py-3 text-sm resize-none"
                    />
                  </div>
                  <div className="flex items-start gap-2">
                    <input type="checkbox" required id="privacy" className="mt-1" />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      {t("privacy")}
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center px-8 py-3.5 bg-gold text-white font-medium rounded-xl btn-lift hover:bg-gold-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <Loader2 size={16} className="mr-2 animate-spin" />
                    ) : (
                      <Send size={16} className="mr-2" />
                    )}
                    {loading
                      ? locale === "es"
                        ? "Enviando..."
                        : "Sending..."
                      : t("submit")}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-navy-deep rounded-xl p-6 text-white">
                <h3 className="font-heading font-semibold text-gold-light mb-4">
                  {t("directContact")}
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="tel:+525553973703"
                      className="flex items-center gap-3 hover:text-gold-light transition-colors"
                    >
                      <Phone size={18} className="text-gold" />
                      <div>
                        <span className="text-sm block">+52 55 5397 3703</span>
                        <span className="text-[11px] text-white/50">Ext. 408, 402, 406</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:ventas.mexico@ipsa-cv.com.mx"
                      className="flex items-center gap-3 hover:text-gold-light transition-colors"
                    >
                      <Mail size={18} className="text-gold" />
                      <span className="text-sm">ventas.mexico@ipsa-cv.com.mx</span>
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock size={18} className="text-gold" />
                    <span className="text-sm text-white/70">{t("hours")}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-gray-900 text-lg mb-4">
                  {t("offices")}
                </h3>
                <div className="space-y-3">
                  {offices.map((office) => (
                    <div
                      key={office.city}
                      className="bg-white rounded-xl p-4 card-hover shadow-card"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900 text-sm">
                          {office.city}
                        </span>
                        <span className="text-[10px] bg-gold/10 text-gold font-medium px-2 py-0.5 rounded-full">
                          {office.role}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">{office.address}</p>
                      {office.phone && (
                        <div className="mt-1">
                          <a
                            href={`tel:${office.phone.replace(/\s/g, "")}`}
                            className="text-xs text-gold"
                          >
                            {office.phone}
                          </a>
                          {office.phoneDetail && (
                            <span className="text-[10px] text-gray-400 ml-1.5">{office.phoneDetail}</span>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
