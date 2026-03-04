
import React from 'react';

const SocialIcon: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="text-gray-500 hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">
        <span className="sr-only">Social Media Link</span>
        {children}
    </a>
);


const Footer: React.FC = () => {
  return (
    <footer className="mt-20 lg:mt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200/80">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-2">
                    <div className="flex items-center gap-2">
                         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0B1229]">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
                            <path d="M16.5 12C16.5 14.49 14.49 16.5 12 16.5C9.51 16.5 7.5 14.49 7.5 12C7.5 9.51 9.51 7.5 12 7.5C14.49 7.5 16.5 9.51 16.5 12ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="currentColor"/>
                            <path d="M9 12H15" stroke="white" strokeWidth="1.5"/>
                        </svg>
                        <span className="text-xl font-bold text-[#0B1229]">Growth AI</span>
                    </div>
                    <p className="mt-4 text-gray-600 max-w-xs">
                        AI-powered insights to boost your organic traffic and scale your business.
                    </p>
                    <div className="mt-6 flex gap-4">
                        <SocialIcon href="#">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                        </SocialIcon>
                        <SocialIcon href="#">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.206v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-3.096 0 1.548 1.548 0 013.096 0zM6.55 16.338H3.45V7.748h3.1v8.59zM17.64 3H6.36C4.512 3 3 4.512 3 6.36v11.28C3 19.488 4.512 21 6.36 21h11.28C19.488 21 21 19.488 21 17.64V6.36C21 4.512 19.488 3 17.64 3z" clipRule="evenodd"></path></svg>
                        </SocialIcon>
                         <SocialIcon href="#">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                        </SocialIcon>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-900">Product</h3>
                    <ul className="mt-4 space-y-3 text-sm">
                        <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Integrations</a></li>
                    </ul>
                </div>
                 <div>
                    <h3 className="font-semibold text-gray-900">Company</h3>
                    <ul className="mt-4 space-y-3 text-sm">
                        <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Careers</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact Us</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Press</a></li>
                    </ul>
                </div>
                 <div>
                    <h3 className="font-semibold text-gray-900">Resources</h3>
                    <ul className="mt-4 space-y-3 text-sm">
                        <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Help Center</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Documentation</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Case Studies</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">White Papers</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-900">Legal</h3>
                    <ul className="mt-4 space-y-3 text-sm">
                        <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200/80">
                <p className="text-center text-sm text-gray-500">&copy; {new Date().getFullYear()} Growth AI, Inc. All rights reserved.</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
