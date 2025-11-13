import React from 'react';

export default function Footer() {
  const quickLinks = [
    { id: 'app', name: <><span className="brand-name">언제칠까</span> 앱</>, href: '#app' },
    { id: 'studio', name: 'Studio', href: '#airtent' },
    { id: 'screen', name: '프리미엄 스크린', href: '#airtent' },
    { id: 'contact', name: '문의하기', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'Instagram', href: '#', icon: 'IG' },
    { name: 'YouTube', href: '#', icon: 'YT' },
    { name: 'LinkedIn', href: '#', icon: 'LI' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/logo.png" 
                  alt="언제칠까 로고" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-3xl font-bold brand-name">
                언제칠까
              </h3>
            </div>
            <p className="text-sm text-gray-400 mb-2">by EXMO Inc.</p>
            <p className="text-gray-300 text-sm">
              Studio · <span className="brand-name">언제칠까</span> 앱
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors text-sm tracking-wide"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p className="font-semibold text-white">엑스모 주식회사</p>
              <p>경기도 하남시 미사강변대로 16</p>
              <p>하우스디 스마트밸리 F615호</p>
              <p className="mt-4">
                <span className="block">Tel: 031-796-8651</span>
                <span className="block">Fax: 031-796-8652</span>
              </p>
              <p className="mt-2">
                <a href="mailto:contact@when7.com" className="text-blue-400 hover:text-blue-300 transition-colors font-mono">
                  contact@when7.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-600 transition-all flex items-center justify-center text-sm font-bold border border-gray-700 hover:border-blue-500"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-400 font-mono">
            © 2025 EXMO Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

