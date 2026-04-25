import { motion } from 'framer-motion'
import SectionReveal from '../SectionReveal'
import { Quote } from 'lucide-react'

const teamMembers = [
  {
    id: 1,
    name: 'Jean Dupont',
    role: 'CEO & Fondateur',
    image: 'https://media.istockphoto.com/id/1469156417/fr/photo/un-dirigeant-dentreprise-souriant-dans-la-salle-du-conseil.jpg?s=612x612&w=0&k=20&c=UpFagjmx13LzXK99RCGGcwKYCv44tApMMzgaSnw2Nf0=',
    bio: 'Jean est un entrepreneur passionné avec plus de 20 ans d’expérience dans le secteur du luxe. Avant de fonder Hermon Eximia, il a dirigé plusieurs entreprises prospères dans le domaine de la mode et de l’hôtellerie de luxe.'
  },
  {
    id: 2,
    name: 'Sophie Martin',
    role: 'Directrice Artistique',
    image: 'https://media.istockphoto.com/id/1469156417/fr/photo/un-dirigeant-dentreprise-souriant-dans-la-salle-du-conseil.jpg?s=612x612&w=0&k=20&c=UpFagjmx13LzXK99RCGGcwKYCv44tApMMzgaSnw2Nf0=',
    bio: 'Sophie est une créatrice visionnaire avec une expertise en design de produits de luxe. Elle a travaillé pour des maisons prestigieuses avant de rejoindre Hermon Eximia pour diriger la direction artistique de la marque.'
  },
   {
    id: 3,
    name: 'Sophie Martin',
    role: 'Directrice Artistique',
    image: 'https://media.istockphoto.com/id/1469156417/fr/photo/un-dirigeant-dentreprise-souriant-dans-la-salle-du-conseil.jpg?s=612x612&w=0&k=20&c=UpFagjmx13LzXK99RCGGcwKYCv44tApMMzgaSnw2Nf0=',
    bio: 'Sophie est une créatrice visionnaire avec une expertise en design de produits de luxe. Elle a travaillé pour des maisons prestigieuses avant de rejoindre Hermon Eximia pour diriger la direction artistique de la marque.'
  },
]

export default function TeamGrid() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ background: '#080808' }}>
      <div className="max-w-7xl mx-auto">

        {/* ─── HEADER ───────────────── */}
        <SectionReveal className="text-center mb-12 sm:mb-16">
          <p className="section-label mb-3 sm:mb-4 text-xs sm:text-sm">Notre Équipe</p>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4">
            L'expertise au service de votre <em className="block sm:inline">réussite</em>
          </h2>
          <p className="font-body text-xs sm:text-sm mt-4 sm:mt-6 max-w-xl mx-auto px-4" style={{ color: 'var(--text-secondary)' }}>
            Une équipe dirigeante engagée, unie par une même exigence d'excellence et de discrétion.
          </p>
        </SectionReveal>

        {/* ─── GRID ───────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.map((member, i) => (
            <SectionReveal key={member.id} delay={i * 0.1}>
              <div
                className="group overflow-hidden rounded-sm  scale-95 flex flex-col h-full transition-all duration-300 hover:shadow-2xl"
                style={{
                  border: '1px solid rgba(197,160,89,0.15)',
                  background: 'rgba(255,255,255,0.01)',
                }}
              >
                {/* EN-TÊTE CENTRÉ - Nom et Rôle */}
                <div className="text-center pt-6 pb-4 px-4">
                  <h3 
                    className="font-heading text-xs sm:text-sm tracking-widest uppercase mb-2"
                    style={{ color: '#C5A059', fontWeight: 300 }}
                  >
                    {member.name}
                  </h3>
                  <p 
                    className="font-body text-[11px] sm:text-xs"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {member.role}
                  </p>
                </div>

                {/* IMAGE */}
                <div className="relative aspect-[4/3] sm:aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3] overflow-hidden bg-gray-900 mx-2">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* DESCRIPTION AVEC QUOTE */}
                <div className="flex flex-col flex-grow p-5 sm:p-6">
                  <div className="flex justify-center mb-3">
                    <Quote size={14} className="text-yellow-400/70" />
                  </div>
                  <p 
                    className="font-body text-xs sm:text-sm leading-relaxed text-center"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {member.bio}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

       
      </div>
    </section>
  )
}