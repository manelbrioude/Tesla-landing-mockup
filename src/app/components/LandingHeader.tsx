'use client'
import React, { useEffect, useState } from 'react'
import Logo from './Logo'

import localFont from "next/font/local"

const myFont = localFont({ src: "../fonts/Gotham-Bold.otf" })

export default function LandingHeader() {
  const [menuItemPos, setMenuItemPos] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMenuItemEnter = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const menuItem = e.currentTarget;
    const { left, top, width, height } = menuItem.getBoundingClientRect();
    setMenuItemPos({ left, top, width, height });
    setIsHovered(true);
  };

  const handleMenuItemLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const menuBackdrop = document.querySelector('#menu-backdrop') as HTMLElement;
    menuBackdrop.style.transition = "left 0.3s, top 0.3s, width 0.3s, height 0.3s";

    let header: HTMLElement | null = document.querySelector('#Landing-header') as HTMLElement;
    const observeOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.9,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { isIntersecting } = entry;
        if (isIntersecting) {
          const color = entry.target.getAttribute('data-header-color');
          if (header) {
            header.style.color = color !== null ? color : '';
          }
        }
      });
    }, observeOptions);

    const sections = document.querySelectorAll('.landing-section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header id="Landing-header" className='py-4 px-10 flex items-center fixed top-0 w-full justify-between z-40' style={myFont.style}>
      <div className="flex flex-grow basis-0 text-current">
        <Logo />
      </div>
      <nav className="flex flex-grow basis-0 justify-center">
        <ul className='flex text-sm [&>li>a]:text-current [&>li>a]:inline-block [&>li>a]:px-4'>
          <li>
            <a href="#" onMouseEnter={handleMenuItemEnter} onMouseLeave={handleMenuItemLeave}>Model S</a>
          </li>
          <li>
            <a href="#" onMouseEnter={handleMenuItemEnter} onMouseLeave={handleMenuItemLeave}>Model 3</a>
          </li>
          <li>
            <a href="#" onMouseEnter={handleMenuItemEnter} onMouseLeave={handleMenuItemLeave}>Model X</a>
          </li>
          <li>
            <a href="#" onMouseEnter={handleMenuItemEnter} onMouseLeave={handleMenuItemLeave}>Model Y</a>
          </li>
          <li>
            <a href="#" onMouseEnter={handleMenuItemEnter} onMouseLeave={handleMenuItemLeave}>Powerwall</a>
          </li>
          <li>
            <a href="#" onMouseEnter={handleMenuItemEnter} onMouseLeave={handleMenuItemLeave}>Carga</a>
          </li>
        </ul>
      </nav>

      <nav className="flex flex-grow basis-0 justify-end">
        <ul className='flex text-sm [&>li>a]:text-current [&>li>a]:inline-block [&>li>a]:px-4'>
          <li>
            <a href="#" onMouseEnter={handleMenuItemEnter} onMouseLeave={handleMenuItemLeave}>Soporte</a>
          </li>
          <li>
            <a href="#" onMouseEnter={handleMenuItemEnter} onMouseLeave={handleMenuItemLeave}>Tienda</a>
          </li>
          <li>
            <a href="#" onMouseEnter={handleMenuItemEnter} onMouseLeave={handleMenuItemLeave}>Cuenta</a>
          </li>
          <li>
            <a href="#" onMouseEnter={handleMenuItemEnter} onMouseLeave={handleMenuItemLeave}>Menú</a>
          </li>
        </ul>
      </nav>

      <div
        id='menu-backdrop'
        className={`absolute bg-black/5 backdrop-blur-lg rounded transition-all duration-300 ease-in-out opacity-0 -z-10 ${isHovered ? 'opacity-100' : ''}`}
        style={{
          left: `${menuItemPos.left}px`,
          top: `${menuItemPos.top}px`,
          width: `${menuItemPos.width}px`,
          height: `${menuItemPos.height}px`,
        }}
      ></div>
    </header>
  )
}
