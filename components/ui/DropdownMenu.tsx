'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { CaretDown } from '@phosphor-icons/react';

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface DropdownMenuProps {
  trigger: string;
  items: DropdownItem[];
  className?: string;
}

export default function DropdownMenu({ trigger, items, className = '' }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Detectar mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fechar ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Fechar com ESC
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  const handleMouseEnter = () => {
    if (!isMobile) {
      clearTimeout(timeoutRef.current);
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
      ref={dropdownRef}
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button */}
      <button
        onClick={handleClick}
        className="group flex items-center gap-1.5 text-sm font-medium text-charcoal-700 hover:text-primary-600 transition-colors duration-200"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{trigger}</span>
        <CaretDown
          size={14}
          weight="bold"
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 z-50"
          role="menu"
        >
          {/* Glass Panel */}
          <div
            className="
              backdrop-blur-lg
              bg-white/95
              border border-primary-200/40
              rounded-2xl
              shadow-premium
              overflow-hidden
              animate-in fade-in slide-in-from-top-2
              duration-200
            "
          >
            <div className="p-2">
              {items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="
                    group/item
                    flex flex-col
                    px-4 py-3
                    rounded-xl
                    hover:bg-primary-50/80
                    transition-all duration-200
                    border border-transparent
                    hover:border-primary-200/60
                  "
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                >
                  <span className="text-sm font-semibold text-charcoal-900 group-hover/item:text-primary-700 transition-colors">
                    {item.label}
                  </span>
                  {item.description && (
                    <span className="text-xs text-charcoal-600 mt-0.5">
                      {item.description}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Arrow Pointer */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/95 border-l border-t border-primary-200/40 rotate-45 backdrop-blur-lg" />
        </div>
      )}
    </div>
  );
}
