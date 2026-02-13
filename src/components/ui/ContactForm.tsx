'use client';

import { useState, useCallback, type FormEvent, type FocusEvent } from 'react';
import { useTranslations } from 'next-intl';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  queryType: string;
  productInterest: string;
  message: string;
  privacy: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const initialFormData: FormData = {
  name: '',
  company: '',
  email: '',
  phone: '',
  industry: '',
  queryType: '',
  productInterest: '',
  message: '',
  privacy: false,
};

export default function ContactForm({ className = '' }: { className?: string }) {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validateField = useCallback(
    (name: string, value: string | boolean): string => {
      switch (name) {
        case 'name':
          return typeof value === 'string' && value.trim().length < 2
            ? 'Nombre requerido'
            : '';
        case 'email': {
          if (typeof value !== 'string' || !value.trim()) return 'Email requerido';
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(value) ? '' : 'Email no válido';
        }
        case 'company':
          return typeof value === 'string' && !value.trim()
            ? 'Empresa requerida'
            : '';
        case 'message':
          return typeof value === 'string' && value.trim().length < 10
            ? 'Mensaje demasiado corto'
            : '';
        case 'privacy':
          return value !== true ? 'Debe aceptar el aviso de privacidad' : '';
        default:
          return '';
      }
    },
    []
  );

  const handleBlur = useCallback(
    (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value, type } = e.target;
      const fieldValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
      const error = validateField(name, fieldValue);
      setErrors((prev) => ({ ...prev, [name]: error }));
    },
    [validateField]
  );

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      const { name, value, type } = e.target;
      const fieldValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
      setFormData((prev) => ({ ...prev, [name]: fieldValue }));
      // Clear error on change
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: '' }));
      }
    },
    [errors]
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Validate all required fields
      const newErrors: FormErrors = {};
      const requiredFields = ['name', 'company', 'email', 'message', 'privacy'] as const;
      for (const field of requiredFields) {
        const error = validateField(field, formData[field]);
        if (error) newErrors[field] = error;
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      // Success
      setSubmitted(true);
    },
    [formData, validateField]
  );

  if (submitted) {
    return (
      <div className={`rounded-2xl bg-green-50 border border-green-200 p-8 text-center ${className}`}>
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-heading text-lg font-semibold text-green-800">{t('success')}</p>
      </div>
    );
  }

  const inputBase =
    'w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20';
  const errorInput = 'border-red-400 focus:border-red-500 focus:ring-red-200';

  return (
    <form onSubmit={handleSubmit} noValidate className={className}>
      <div className="grid gap-5 md:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-sm font-medium text-gray-700">
            {t('name')} *
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${inputBase} ${errors.name ? errorInput : ''}`}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="cf-company" className="mb-1.5 block text-sm font-medium text-gray-700">
            {t('company')} *
          </label>
          <input
            id="cf-company"
            name="company"
            type="text"
            required
            value={formData.company}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${inputBase} ${errors.company ? errorInput : ''}`}
          />
          {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-sm font-medium text-gray-700">
            {t('email')} *
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${inputBase} ${errors.email ? errorInput : ''}`}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-medium text-gray-700">
            {t('phone')}
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputBase}
          />
        </div>

        {/* Industry */}
        <div>
          <label htmlFor="cf-industry" className="mb-1.5 block text-sm font-medium text-gray-700">
            {t('industry')}
          </label>
          <select
            id="cf-industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputBase}
          >
            <option value="">{t('selectOption')}</option>
            <option value="oil">{t('industries.oil')}</option>
            <option value="oils">{t('industries.oils')}</option>
            <option value="gas">{t('industries.gas')}</option>
            <option value="other">{t('industries.other')}</option>
          </select>
        </div>

        {/* Query type */}
        <div>
          <label htmlFor="cf-queryType" className="mb-1.5 block text-sm font-medium text-gray-700">
            {t('queryType')}
          </label>
          <select
            id="cf-queryType"
            name="queryType"
            value={formData.queryType}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputBase}
          >
            <option value="">{t('selectOption')}</option>
            <option value="quote">{t('queryTypes.quote')}</option>
            <option value="support">{t('queryTypes.support')}</option>
            <option value="info">{t('queryTypes.info')}</option>
            <option value="project">{t('queryTypes.project')}</option>
          </select>
        </div>

        {/* Product interest */}
        <div className="md:col-span-2">
          <label htmlFor="cf-productInterest" className="mb-1.5 block text-sm font-medium text-gray-700">
            {t('productInterest')}
          </label>
          <select
            id="cf-productInterest"
            name="productInterest"
            value={formData.productInterest}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputBase}
          >
            <option value="">{t('selectOption')}</option>
            {/* Product options will be populated from CMS/data */}
          </select>
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label htmlFor="cf-message" className="mb-1.5 block text-sm font-medium text-gray-700">
            {t('message')} *
          </label>
          <textarea
            id="cf-message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${inputBase} resize-y ${errors.message ? errorInput : ''}`}
          />
          {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
        </div>

        {/* Privacy checkbox */}
        <div className="md:col-span-2">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              name="privacy"
              type="checkbox"
              checked={formData.privacy}
              onChange={handleChange}
              onBlur={handleBlur}
              className="mt-0.5 h-5 w-5 shrink-0 rounded border-gray-300 text-navy focus:ring-navy"
            />
            <span className="text-sm text-gray-700">{t('privacy')} *</span>
          </label>
          {errors.privacy && <p className="mt-1 text-sm text-red-600">{errors.privacy}</p>}
        </div>
      </div>

      {/* Submit */}
      <div className="mt-6">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-gold-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 cursor-pointer"
        >
          {t('submit')}
        </button>
      </div>
    </form>
  );
}
