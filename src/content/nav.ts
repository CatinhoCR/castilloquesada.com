/**
 * content/nav.ts — copy for components/layout/Nav.tsx.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface NavContent {
  name: string;
  /** Rendered in quotes beside the name; hidden at the smallest breakpoint. */
  nickname: string;
  /** Sits next to the pulsing availability dot. */
  statusText: string;
  navLinks: NavLink[];
}

export const navContent: NavContent = {
  name: "Andrés Castillo",
  nickname: "Cato",
  statusText: "Available",
  navLinks: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};
