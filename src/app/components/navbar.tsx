"use client";

import React, { useState } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "./navbar-menu";
import { Button } from "./button";
import Link from "next/link";

export function Navbar() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-black/10 dark:border-white/10">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">T</span>
        </div>
        <Link href="/" className="font-bold text-xl text-black dark:text-white">
          transprima
        </Link>
      </div>
      <div className="flex-1 flex justify-center">
        <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="grid grid-cols-2 gap-4 p-4">
            <ProductItem
              title="Transprima"
              description="Our flagship translation service"
              href="/products/transprima"
              src="/globe.svg"
            />
            <ProductItem
              title="Document AI"
              description="AI-powered document processing"
              href="/products/document-ai"
              src="/file.svg"
            />
            <ProductItem
              title="Window"
              description="Real-time translation interface"
              href="/products/window"
              src="/window.svg"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Solutions">
          <div className="grid grid-cols-1 gap-4 p-4 text-sm">
            <HoveredLink href="/solutions/enterprise">Enterprise</HoveredLink>
            <HoveredLink href="/solutions/small-business">Small Business</HoveredLink>
            <HoveredLink href="/solutions/education">Education</HoveredLink>
            <HoveredLink href="/solutions/healthcare">Healthcare</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Resources">
          <div className="grid grid-cols-1 gap-4 p-4 text-sm">
            <HoveredLink href="/resources/documentation">Documentation</HoveredLink>
            <HoveredLink href="/resources/guides">Guides</HoveredLink>
            <HoveredLink href="/resources/api">API Reference</HoveredLink>
            <HoveredLink href="/resources/community">Community</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="grid grid-cols-1 gap-4 p-4 text-sm">
            <HoveredLink href="/pricing/personal">Personal</HoveredLink>
            <HoveredLink href="/pricing/team">Team</HoveredLink>
            <HoveredLink href="/pricing/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
      </div>
      <div className="ml-auto">
        <Button variant="ghost" className="mr-2">
          Sign In
        </Button>
        <Button>
          Sign Up
        </Button>
      </div>
    </div>
  );
}