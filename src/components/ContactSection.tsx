import type { FormEvent } from 'react';
import { toast } from 'sonner';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { profile } from '@/data/profile';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import SocialLinks from './SocialLinks';

const fieldClass = 'bg-surface-alt border-line text-heading placeholder:text-subtle/70';

const ContactSection = () => {
  // Ouvre la messagerie du visiteur avec le message pré-rempli
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const body = `${data.get('message')}\n\n${data.get('name')} — ${data.get('email')}`;
    const params = new URLSearchParams({ subject: String(data.get('subject')), body });

    window.location.href = `mailto:${profile.email}?${params.toString().replace(/\+/g, '%20')}`;
    toast.success("Votre messagerie s'ouvre", {
      description: "Envoyez le message depuis votre application e-mail. Je vous répondrai dans les plus brefs délais.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="section-padding bg-surface">
      <div className="container">
        <SectionHeading
          index="05"
          title="Contact"
          intro="Vous avez un projet en tête, une offre ou une question ? Écrivez-moi, je vous réponds dans les plus brefs délais."
        />

        <div className="flex flex-col lg:flex-row gap-8">
          <Reveal className="lg:w-1/3">
            <Card className="h-full p-8 border-line bg-card-bg space-y-6">
              <h3 className="text-xl font-bold text-heading">Coordonnées</h3>

              <div className="flex gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-brand" />
                <a href={`mailto:${profile.email}`} className="break-all text-body hover:text-brand hover:underline">
                  {profile.email}
                </a>
              </div>

              <div className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-brand" />
                <div className="flex flex-col">
                  {profile.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="text-body hover:text-brand hover:underline">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-brand" />
                <div className="text-body">
                  <p>{profile.location}</p>
                  <p className="mt-1">{profile.currentLocation}</p>
                </div>
              </div>

              <SocialLinks linkClassName="flex size-10 items-center justify-center rounded-full bg-brand text-brand-fg hover:bg-brand-hover" />
            </Card>
          </Reveal>

          <Reveal className="lg:w-2/3" delay={0.15}>
            <Card className="p-8 border-line bg-card-bg">
              <h3 className="text-xl font-bold text-heading mb-6">Envoyez-moi un message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-body">Nom complet</label>
                    <Input id="name" name="name" type="text" placeholder="Votre nom" required autoComplete="name" className={fieldClass} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-body">Email</label>
                    <Input id="email" name="email" type="email" placeholder="votre@email.com" required autoComplete="email" className={fieldClass} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-body">Sujet</label>
                  <Input id="subject" name="subject" type="text" placeholder="Sujet de votre message" required className={fieldClass} />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-body">Message</label>
                  <Textarea id="message" name="message" placeholder="Votre message..." required className={`min-h-37.5 ${fieldClass}`} />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto bg-brand text-brand-fg hover:bg-brand-hover">
                  Envoyer le message
                </Button>
              </form>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
