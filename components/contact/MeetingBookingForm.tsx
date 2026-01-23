'use client';

import { useState } from 'react';
import { CalendarCheck, Clock, User, Envelope, Phone, Check } from '@phosphor-icons/react';

interface MeetingBookingFormProps {
  locale: string;
}

export default function MeetingBookingForm({ locale }: MeetingBookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Gerar próximos 30 dias úteis (segunda a sexta)
  const getWorkingDays = () => {
    const days = [];
    const today = new Date();
    let count = 0;

    while (days.length < 30) {
      const date = new Date(today);
      date.setDate(today.getDate() + count);
      
      const dayOfWeek = date.getDay();
      // 1-5 = segunda a sexta
      if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        days.push(date.toISOString().split('T')[0]);
      }
      count++;
    }

    return days;
  };

  // Horário comercial: 9h-18h
  const businessHours = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ];

  const workingDays = getWorkingDays();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulação de envio (em produção, integrar com API)
    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="text-center py-12 space-y-6">
        <div className="inline-flex p-6 rounded-full bg-primary-100">
          <Check size={48} weight="bold" className="text-primary-600" />
        </div>
        
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-charcoal-900">
            {locale === 'pt' ? 'Pedido Recebido!' : 'Request Received!'}
          </h3>
          <p className="text-base text-charcoal-600 max-w-md mx-auto leading-relaxed">
            {locale === 'pt' 
              ? 'Receberá um email de confirmação quando a sua reunião for aprovada. Entraremos em contacto em breve.'
              : 'You will receive a confirmation email when your meeting is approved. We will contact you shortly.'
            }
          </p>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', phone: '', date: '', time: '', message: '' });
          }}
          className="text-primary-600 hover:text-primary-700 font-semibold underline"
        >
          {locale === 'pt' ? 'Marcar outra reunião' : 'Book another meeting'}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-charcoal-900 mb-2">
          <div className="flex items-center gap-2">
            <User size={18} weight="bold" />
            <span>{locale === 'pt' ? 'Nome Completo' : 'Full Name'}</span>
            <span className="text-primary-600">*</span>
          </div>
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="
            w-full px-4 py-3
            bg-white border-2 border-charcoal-200
            rounded-xl
            text-charcoal-900
            focus:border-primary-500 focus:ring-4 focus:ring-primary-100
            transition-all duration-200
            outline-none
          "
          placeholder={locale === 'pt' ? 'João Silva' : 'John Smith'}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-charcoal-900 mb-2">
          <div className="flex items-center gap-2">
            <Envelope size={18} weight="bold" />
            <span>Email</span>
            <span className="text-primary-600">*</span>
          </div>
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="
            w-full px-4 py-3
            bg-white border-2 border-charcoal-200
            rounded-xl
            text-charcoal-900
            focus:border-primary-500 focus:ring-4 focus:ring-primary-100
            transition-all duration-200
            outline-none
          "
          placeholder="email@exemplo.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-charcoal-900 mb-2">
          <div className="flex items-center gap-2">
            <Phone size={18} weight="bold" />
            <span>{locale === 'pt' ? 'Telefone' : 'Phone'}</span>
          </div>
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="
            w-full px-4 py-3
            bg-white border-2 border-charcoal-200
            rounded-xl
            text-charcoal-900
            focus:border-primary-500 focus:ring-4 focus:ring-primary-100
            transition-all duration-200
            outline-none
          "
          placeholder="+351 XXX XXX XXX"
        />
      </div>

      {/* Date */}
      <div>
        <label htmlFor="date" className="block text-sm font-semibold text-charcoal-900 mb-2">
          <div className="flex items-center gap-2">
            <CalendarCheck size={18} weight="bold" />
            <span>{locale === 'pt' ? 'Data (Dias Úteis)' : 'Date (Weekdays)'}</span>
            <span className="text-primary-600">*</span>
          </div>
        </label>
        <select
          id="date"
          required
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="
            w-full px-4 py-3
            bg-white border-2 border-charcoal-200
            rounded-xl
            text-charcoal-900
            focus:border-primary-500 focus:ring-4 focus:ring-primary-100
            transition-all duration-200
            outline-none
          "
        >
          <option value="">{locale === 'pt' ? 'Selecione uma data' : 'Select a date'}</option>
          {workingDays.map((day) => {
            const date = new Date(day);
            const formatted = date.toLocaleDateString(locale === 'pt' ? 'pt-PT' : 'en-GB', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });
            return (
              <option key={day} value={day}>
                {formatted}
              </option>
            );
          })}
        </select>
      </div>

      {/* Time */}
      <div>
        <label htmlFor="time" className="block text-sm font-semibold text-charcoal-900 mb-2">
          <div className="flex items-center gap-2">
            <Clock size={18} weight="bold" />
            <span>{locale === 'pt' ? 'Horário (9h-18h)' : 'Time (9am-6pm)'}</span>
            <span className="text-primary-600">*</span>
          </div>
        </label>
        <select
          id="time"
          required
          value={formData.time}
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          className="
            w-full px-4 py-3
            bg-white border-2 border-charcoal-200
            rounded-xl
            text-charcoal-900
            focus:border-primary-500 focus:ring-4 focus:ring-primary-100
            transition-all duration-200
            outline-none
          "
        >
          <option value="">{locale === 'pt' ? 'Selecione um horário' : 'Select a time'}</option>
          {businessHours.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-charcoal-900 mb-2">
          {locale === 'pt' ? 'Mensagem (opcional)' : 'Message (optional)'}
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="
            w-full px-4 py-3
            bg-white border-2 border-charcoal-200
            rounded-xl
            text-charcoal-900
            focus:border-primary-500 focus:ring-4 focus:ring-primary-100
            transition-all duration-200
            outline-none
            resize-none
          "
          placeholder={locale === 'pt' ? 'Descreva brevemente o assunto da reunião...' : 'Briefly describe the meeting subject...'}
        />
      </div>

      {/* Notice */}
      <div className="p-4 bg-primary-50 border border-primary-200 rounded-xl">
        <p className="text-sm text-charcoal-700 leading-relaxed">
          <strong className="font-semibold text-charcoal-900">ℹ️ {locale === 'pt' ? 'Aviso' : 'Notice'}:</strong>{' '}
          {locale === 'pt'
            ? 'Após submeter, receberá um email de confirmação quando a reunião for aprovada pela nossa equipa.'
            : 'After submitting, you will receive a confirmation email when the meeting is approved by our team.'
          }
        </p>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="
          w-full
          flex items-center justify-center gap-3
          px-8 py-4
          bg-gradient-gold
          text-white font-bold text-lg
          rounded-2xl
          shadow-lg hover:shadow-xl
          transition-all duration-300
          hover:scale-105
          disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        "
      >
        {loading ? (
          <span>{locale === 'pt' ? 'A enviar...' : 'Sending...'}</span>
        ) : (
          <>
            <CalendarCheck size={24} weight="bold" />
            <span>{locale === 'pt' ? 'Marcar Reunião' : 'Book Meeting'}</span>
          </>
        )}
      </button>
    </form>
  );
}
