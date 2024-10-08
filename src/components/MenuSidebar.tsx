import React, { useState } from 'react';

interface MenuSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    toggleDarkMode: () => void;
    isDarkMode: boolean;
}

const MenuSidebar: React.FC<MenuSidebarProps> = ({ isOpen, onClose, toggleDarkMode, isDarkMode }) => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const toggleDropdown = (menuTitle: string) => {
        setActiveDropdown(prev => prev === menuTitle ? null : menuTitle);
    };

    return (
        <div
            className={`fixed top-0 left-0 h-full w-full md:w-1/4 bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-90 backdrop-blur-md shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 flex flex-col`}>
            <div className="flex-grow overflow-y-auto">
                <div className="p-6">
                    <button onClick={onClose}
                            className="absolute top-4 right-4 text-black dark:text-white hover:text-opacity-70">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                    <a className="text-2xl font-bold text-black dark:text-white flex items-center justify-start mb-12"
                       href="/">
                        EXCELLENCE TAPIS
                    </a>
                    <nav>
                        <ul className="space-y-4">
                            <li>
                                <a href="/" className="text-sm font-medium text-black dark:text-white hover:text-opacity-70 dark:hover:text-opacity-70 transition-colors duration-200">
                                    ACCUEIL
                                </a>
                            </li>
                            <li>
                                <button
                                    onClick={() => toggleDropdown('À PROPOS')}
                                    className="text-sm font-medium text-black dark:text-white hover:text-opacity-70 dark:hover:text-opacity-70 transition-colors duration-200 flex items-center justify-between w-full"
                                >
                                    À PROPOS
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-4 w-4 transition-transform ${activeDropdown === 'À PROPOS' ? 'transform rotate-180' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M19 9l-7 7-7-7"/>
                                    </svg>
                                </button>
                                {activeDropdown === 'À PROPOS' && (
                                    <ul data-aos="fade-right" data-aos-duration="200" className="pl-4 mt-2 space-y-2">
                                        <li><a href="/about/#history" className="text-sm text-black dark:text-white hover:text-opacity-70">Notre histoire</a></li>
                                        <li><a href="/about/#team" className="text-sm text-black dark:text-white hover:text-opacity-70">Notre équipe</a></li>
                                        <li><a href="/about/#values" className="text-sm text-black dark:text-white hover:text-opacity-70">Nos valeurs</a></li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <a href="/tapis" className="text-sm font-medium text-black dark:text-white hover:text-opacity-70 dark:hover:text-opacity-70 transition-colors duration-200">
                                    NOS TAPIS
                                </a>
                            </li>
                            <li>
                                <a href="/custom" className="text-sm font-medium text-black dark:text-white hover:text-opacity-70 dark:hover:text-opacity-70 transition-colors duration-200">
                                    TAPIS PERSONALISÉ
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-sm font-medium text-black dark:text-white hover:text-opacity-70 dark:hover:text-opacity-70 transition-colors duration-200">
                                    CONTACTEZ NOUS
                                </a>
                            </li>
                            <li>
                                <button
                                    className="text-sm font-medium text-black dark:text-white hover:text-opacity-70 dark:hover:text-opacity-70 transition-colors duration-200 flex items-center"
                                    onClick={toggleDarkMode}
                                >
                                    {isDarkMode ? 'Mode clair' : 'Mode sombre'}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d={isDarkMode ? "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" : "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}/>
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="p-4 border-t border-neutral-200 dark:border-neutral-700">
                <div className="text-center text-sm text-neutral-500">
                    All Copyrights reserved Excellence Tapis - Powered by Maya Digital 2024
                    <div className="mt-2 flex items-center justify-center gap-4">
                        {/* Social media icons */}
                        <a className="text-muted-foreground hover:text-primary" href="#" rel="ugc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a className="text-muted-foreground hover:text-primary" href="#" rel="ugc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                            </svg>
                        </a>
                        <a className="text-muted-foreground hover:text-primary" href="#" rel="ugc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                                <path d="m10 15 5-3-5-3z"></path>
                            </svg>
                        </a>
                        <a className="text-muted-foreground hover:text-primary" href="#" rel="ugc">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect width="4" height="12" x="2" y="9"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuSidebar;