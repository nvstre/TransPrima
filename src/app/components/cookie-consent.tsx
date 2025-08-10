"use client";

import { useState, useEffect } from "react";
import { X, Shield, Cookie } from "lucide-react";

interface CookieConsentProps {
  onAccept?: () => void;
  onDecline?: () => void;
}

export default function CookieConsent({ onAccept, onDecline }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsent = localStorage.getItem('cookie-consent');
    if (!hasConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
    onAccept?.();
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
    onDecline?.();
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="bg-white dark:bg-black border border-neutral-300 dark:border-neutral-800 rounded-lg shadow-2xl p-4 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Cookie className="w-5 h-5 text-neutral-900 dark:text-white" />
            <h3 className="font-semibold text-neutral-900 dark:text-white">
              Cookie-uri și Confidențialitate
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            <strong>Nu procesăm și nu stocăm informațiile dvs. personale.</strong> Acest site nu utilizează cookie-uri de urmărire sau analiză. Respectăm pe deplin confidențialitatea dvs.
          </p>

          {showDetails && (
            <div className="space-y-2 text-xs text-neutral-500 dark:text-neutral-500 bg-neutral-50 dark:bg-neutral-800 p-3 rounded">
              <p><strong>✅ Fără cookie-uri de urmărire</strong></p>
              <p><strong>✅ Fără colectarea datelor personale</strong></p>
              <p><strong>✅ Fără partajarea informațiilor cu terți</strong></p>
              <p><strong>ℹ️ Doar cookie-uri tehnice esențiale</strong> pentru funcționarea de bază a site-ului</p>
            </div>
          )}

          {/* Policy Links */}
          <div className="flex flex-wrap gap-2 text-xs">
            <button className="text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white underline">
              <Shield className="w-3 h-3 inline mr-1" />
              Politica de Confidențialitate
            </button>
            <span className="text-neutral-400">•</span>
            <button className="text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white underline">
              Politica Cookie-uri
            </button>
          </div>

          {/* Toggle Details */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-xs text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 underline"
          >
            {showDetails ? 'Ascunde detaliile' : 'Vezi detaliile'}
          </button>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={handleDecline}
            className="flex-1 px-3 py-2 text-sm border border-neutral-400 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            Închide
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 px-3 py-2 text-sm bg-black hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black rounded transition-colors"
          >
            Am înțeles
          </button>
        </div>

        {/* Compliance Note */}
        <p className="text-xs text-neutral-400 text-center">
          Conform GDPR și legislației române
        </p>
      </div>
    </div>
  );
}