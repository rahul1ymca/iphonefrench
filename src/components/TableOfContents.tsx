import React, { useState } from 'react';
import {
  ListOrdered,
  ChevronDown,
  Sparkles,
  TableProperties,
  Smartphone,
  Sliders,
  HelpCircle,
  MessageSquare,
  Award,
  BookmarkCheck,
} from 'lucide-react';
import { ARTICLE_SECTIONS } from '../data/blogContent';
import { Language } from '../types';

interface TableOfContentsProps {
  language: Language;
  activeSection: string;
  scrollProgress: number; // 0 - 100
}

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-4 h-4" />,
  TableProperties: <TableProperties className="w-4 h-4" />,
  Smartphone: <Smartphone className="w-4 h-4" />,
  Sliders: <Sliders className="w-4 h-4" />,
  HelpCircle: <HelpCircle className="w-4 h-4" />,
  MessageSquareQuestion: <MessageSquare className="w-4 h-4" />,
  Award: <Award className="w-4 h-4" />,
};

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  language,
  activeSection,
  scrollProgress,
}) => {
  const [isOpenMobile, setIsOpenMobile] = useState<boolean>(true);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -85; // Account for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="table-of-contents"
      aria-label={language === 'fr' ? 'Sommaire de l’article' : 'Table of Contents'}
      className="bg-white border border-neutral-200/80 rounded-2xl p-5 shadow-sm sticky top-24 transition-all"
    >
      {/* Header & Toggle */}
      <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
        <div className="flex items-center gap-2 text-neutral-900 font-semibold text-base">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <ListOrdered className="w-4 h-4" />
          </div>
          <span>{language === 'fr' ? 'Sommaire du Guide' : 'Table of Contents'}</span>
        </div>
        <button
          id="toc-toggle-mobile"
          onClick={() => setIsOpenMobile(!isOpenMobile)}
          className="md:hidden p-1.5 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
          aria-expanded={isOpenMobile}
        >
          <ChevronDown
            className={`w-4 h-4 transition-transform ${isOpenMobile ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {/* Reading Progress Bar integrated inside the Table of Contents */}
      <div className="mt-3.5 mb-4">
        <div className="flex items-center justify-between text-xs text-neutral-500 mb-1.5 font-medium">
          <span className="flex items-center gap-1">
            <BookmarkCheck className="w-3.5 h-3.5 text-blue-600" />
            {language === 'fr' ? 'Progression de lecture' : 'Reading progress'}
          </span>
          <span className="font-semibold text-blue-600">{Math.round(scrollProgress)}%</span>
        </div>
        <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
          <div
            id="toc-reading-progress-fill"
            className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>

      {/* List of sections with jump links */}
      <div className={`${isOpenMobile ? 'block' : 'hidden md:block'}`}>
        <ul className="space-y-1.5 text-sm">
          {ARTICLE_SECTIONS.map((section, index) => {
            const isActive = activeSection === section.id;
            return (
              <li key={section.id}>
                <a
                  id={`toc-link-${section.id}`}
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                  }}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all font-medium ${
                    isActive
                      ? 'bg-blue-50/80 text-blue-700 font-semibold border-l-2 border-blue-600 pl-2.5'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                  }`}
                >
                  <span
                    className={`shrink-0 ${
                      isActive ? 'text-blue-600' : 'text-neutral-400 group-hover:text-neutral-600'
                    }`}
                  >
                    {iconMap[section.iconName] || <span className="text-xs font-mono">{index + 1}</span>}
                  </span>
                  <span className="truncate">{section.shortTitle[language]}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Quick jump badge for mobile / quick reading */}
        <div className="mt-4 pt-3 border-t border-neutral-100 text-xs text-neutral-400 flex items-center justify-between">
          <span>{language === 'fr' ? '7 sections décryptées' : '7 sections covered'}</span>
          <span className="inline-flex items-center text-blue-600 font-medium hover:underline cursor-pointer" onClick={() => scrollToSection('simulateur-quiz')}>
            {language === 'fr' ? 'Faire le Quiz →' : 'Take Quiz →'}
          </span>
        </div>
      </div>
    </nav>
  );
};
