interface Email {
  department: string;
  email: string;
}

interface QuickContactsHomeProps {
  title: string;
  phone: string;
  phoneNote: string;
  emails: Email[];
}

export default function QuickContactsHome({ title, phone, phoneNote, emails }: QuickContactsHomeProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-neutral-900 to-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Phone Card */}
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 shadow-2xl">
            <div className="flex items-start">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-white mb-2">Telefone</h3>
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="text-3xl font-bold text-white hover:text-primary-100 transition-colors block mb-2"
                >
                  {phone}
                </a>
                <p className="text-white text-opacity-80 text-sm">{phoneNote}</p>
              </div>
            </div>
          </div>

          {/* Emails Card */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-neutral-900">Emails Especializados</h3>
              </div>
            </div>

            <div className="space-y-4">
              {emails.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-sm font-semibold text-neutral-500 mb-1">
                    {item.department}
                  </span>
                  <a
                    href={`mailto:${item.email}`}
                    className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    {item.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
