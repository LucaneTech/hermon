import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, CheckCircle, AlertCircle, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next'
import PageTransition from '../components/PageTransition'
import SectionReveal from '../components/SectionReveal'
import { useTheme } from '../hooks/useTheme'
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '../utils/constants'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const { isDark } = useTheme()
  const { t } = useTranslation('contact')
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: 'Stratégique',
    subject: 'Diagnostic Offert (2h)',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      if (formRef.current) {
        await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
        setStatus('success')
        setFormData({ 
          name: '', 
          company: '', 
          email: '', 
          phone: '', 
          category: 'Stratégique', 
          subject: 'Diagnostic Offert (2h)', 
          message: '' 
        })
      }
    } catch {
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <PageTransition>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-40 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0" style={{ background: isDark ? 'radial-gradient(ellipse at 40% 60%, rgba(75,0,130,0.1) 0%, transparent 60%)' : 'none' }} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="section-label mb-6">
            {t('hero.label')}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
            className="section-title mb-8" 
            style={{ maxWidth: '700px' }}
            dangerouslySetInnerHTML={{ __html: t('hero.title') }}
          />
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.7 }} className="divider-gold" />
        </div>
      </section>

      {/* ═══ CONTACT LAYOUT ═══ */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* ─── Left sidebar ─── */}
            <div className="lg:col-span-2">
              <SectionReveal direction="left">
                <div className="sticky top-32 space-y-8">
                  {/* Diagnostic offer */}
                  <div
                    className="p-8 relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(75,0,130,0.2), rgba(197,160,89,0.05))',
                      border: '1px solid rgba(197,160,89,0.25)',
                    }}
                  >
                    <div className="absolute top-0 right-0 w-16 h-16" style={{ borderTop: '2px solid #C5A059', borderRight: '2px solid #C5A059' }} />
                    <p className="section-label mb-4">{t('sidebar.diagnostic.label')}</p>
                    <h3 className="font-display text-2xl mb-3" style={{ color: '#C5A059', fontWeight: 300 }}>
                      {t('sidebar.diagnostic.title')}
                    </h3>
                    <p 
                      className="font-body text-sm leading-relaxed mb-2" 
                      style={{ color: 'var(--text-secondary)' }}
                      dangerouslySetInnerHTML={{ __html: t('sidebar.diagnostic.description') }}
                    />
                    <p className="font-display text-sm italic" style={{ color: 'rgba(197,160,89,0.6)' }}>
                      {t('sidebar.diagnostic.footer')}
                    </p>
                  </div>

                  {/* Contact details */}
                  <div className="space-y-6">
                    <h4 className="section-label">{t('sidebar.contactDirect')}</h4>
                    {[
                      { icon: Phone, label: t('sidebar.phone'), value: '+242 06 186 36 05\n+242 05 386 24 16', href: 'tel:+242061863605' },
                      { icon: Mail, label: t('sidebar.email'), value: 'contact@hermoneximia.com', href: 'mailto:contact@hermoneximia.com' },
                      { icon: MapPin, label: t('sidebar.location'), value: t('sidebar.pointeNoire'), href: undefined },
                    ].map(item => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ border: '1px solid rgba(197,160,89,0.25)', background: 'rgba(75,0,130,0.1)' }}>
                          <item.icon size={16} style={{ color: '#C5A059' }} />
                        </div>
                        <div>
                          <p className="font-heading text-xs tracking-widest uppercase mb-1" style={{ color: 'rgba(197,160,89,0.6)', fontWeight: 300 }}>{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="font-body text-sm animated-link whitespace-pre-line" style={{ color: 'var(--text-secondary)' }}>
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-body text-sm whitespace-pre-line" style={{ color: 'var(--text-secondary)' }} dangerouslySetInnerHTML={{ __html: item.value }} />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Response time */}
                  <div className="p-5" style={{ background: isDark ? 'rgba(26,26,26,0.4)' : 'rgba(240,237,232,0.6)', border: '1px solid rgba(197,160,89,0.1)' }}>
                    <p className="font-heading text-xs tracking-widest uppercase mb-2" style={{ color: '#C5A059', fontWeight: 300 }}>
                      {t('sidebar.responseTime.title')}
                    </p>
                    <p 
                      className="font-body text-sm" 
                      style={{ color: 'var(--text-secondary)' }}
                      dangerouslySetInnerHTML={{ __html: t('sidebar.responseTime.description') }}
                    />
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* ─── Form ─── */}
            <div className="lg:col-span-3">
              <SectionReveal direction="right">
                <div
                  className="p-10"
                  style={{ background: isDark ? 'rgba(17,17,17,0.8)' : 'rgba(255,255,255,0.8)', border: '1px solid rgba(197,160,89,0.15)' }}
                >
                  <h2 className="font-heading text-lg tracking-widest uppercase mb-2" style={{ color: 'var(--text-primary)', fontWeight: 300 }}>
                    {t('form.title')}
                  </h2>
                  <p className="font-body text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>
                    {t('form.subtitle')}
                  </p>

                  {/* Status messages */}
                  <AnimatePresence>
                    {status === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-3 p-4 mb-6"
                        style={{ background: 'rgba(22,101,52,0.15)', border: '1px solid rgba(34,197,94,0.3)' }}
                      >
                        <CheckCircle size={16} style={{ color: '#22c55e' }} />
                        <p className="font-body text-sm" style={{ color: '#22c55e' }}>
                          {t('form.success')}
                        </p>
                      </motion.div>
                    )}
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-3 p-4 mb-6"
                        style={{ background: 'rgba(153,27,27,0.15)', border: '1px solid rgba(239,68,68,0.3)' }}
                      >
                        <AlertCircle size={16} style={{ color: '#ef4444' }} />
                        <p className="font-body text-sm" style={{ color: '#ef4444' }}>
                          {t('form.error')}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label className="form-label">{t('form.fields.fullName')}</label>
                        <input 
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          required
                          placeholder={t('form.fields.fullNamePlaceholder')} 
                          className="form-input" 
                        />
                      </div>
                      {/* Company */}
                      <div>
                        <label className="form-label">{t('form.fields.company')}</label>
                        <input 
                          name="company" 
                          value={formData.company} 
                          onChange={handleChange}
                          placeholder={t('form.fields.companyPlaceholder')} 
                          className="form-input" 
                        />
                      </div>
                      {/* Email */}
                      <div>
                        <label className="form-label">{t('form.fields.email')}</label>
                        <input 
                          name="email" 
                          type="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          required
                          placeholder={t('form.fields.emailPlaceholder')} 
                          className="form-input" 
                        />
                      </div>
                      {/* Phone */}
                      <div>
                        <label className="form-label">{t('form.fields.phone')}</label>
                        <input 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleChange}
                          placeholder={t('form.fields.phonePlaceholder')} 
                          className="form-input" 
                        />
                      </div>
                      {/* Category */}
                      <div>
                        <label className="form-label">{t('form.fields.category')}</label>
                        <select name="category" value={formData.category} onChange={handleChange} required className="form-input">
                          <option value="Stratégique" className='text-gray-900'>{t('form.fields.categoryOptions.strategic')}</option>
                          <option value="Opérationnelle" className='text-gray-900'>{t('form.fields.categoryOptions.operational')}</option>
                          <option value="Talent" className='text-gray-900'>{t('form.fields.categoryOptions.talent')}</option>
                          <option value="Groupe" className='text-gray-900'>{t('form.fields.categoryOptions.group')}</option>
                        </select>
                      </div>
                      {/* Subject */}
                      <div>
                        <label className="form-label">{t('form.fields.subject')}</label>
                        <select name="subject" value={formData.subject} onChange={handleChange} required className="form-input">
                          <option value="Diagnostic Offert (2h)" className='text-gray-900'>{t('form.fields.subjectOptions.diagnostic')}</option>
                          <option value="Demande de Devis" className='text-gray-900'>{t('form.fields.subjectOptions.quote')}</option>
                          <option value="Partenariat" className='text-gray-900'>{t('form.fields.subjectOptions.partnership')}</option>
                          <option value="Information" className='text-gray-900'>{t('form.fields.subjectOptions.info')}</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="form-label">{t('form.fields.message')}</label>
                      <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required
                        rows={5} 
                        placeholder={t('form.fields.messagePlaceholder')}
                        className="form-input resize-none" 
                      />
                    </div>

                    {/* Privacy note */}
                    <p className="font-body text-xs" style={{ color: 'rgba(160,152,144,0.5)' }}>
                      {t('form.fields.privacyNote')}
                    </p>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={status === 'sending'}
                      whileHover={status !== 'sending' ? { scale: 1.01 } : {}}
                      whileTap={status !== 'sending' ? { scale: 0.99 } : {}}
                      className="btn-gold w-full justify-center py-4"
                      style={{ opacity: status === 'sending' ? 0.7 : 1 }}
                    >
                      {status === 'sending' ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                          />
                          {t('form.submit.sending')}
                        </>
                      ) : (
                        <>
                          {t('form.submit.default')}
                          <Send size={14} />
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MAP SECTION ═══ */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div
              className="relative overflow-hidden flex items-center justify-center"
              style={{ height: '300px', background: isDark ? 'rgba(17,17,17,0.6)' : 'rgba(240,237,232,0.8)', border: '1px solid rgba(197,160,89,0.15)' }}
            >
              <div className="text-center">
                <MapPin size={40} style={{ color: 'rgba(197,160,89,0.3)', margin: '0 auto 16px' }} />
                <p className="section-label mb-2">{t('map.location')}</p>
                <p className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {t('map.description')}
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  )
}