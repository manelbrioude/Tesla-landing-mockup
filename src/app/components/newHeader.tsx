'use client'
import React, { useEffect } from 'react'
import Logo from './Logo'

import localFont from "next/font/local"

const myFont = localFont({ src: "../fonts/Gotham-Bold.otf" })

export default function LandingHeader() {
  useEffect(() => {
    const listItem = document.querySelectorAll("#Landing-header li")
    const menuBackdrop = document.querySelector('#menu-backdrop') as HTMLElement

    let timeoutId: number;

    listItem.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const { left, top, width, height } = item.getBoundingClientRect();

        clearTimeout(timeoutId);

        menuBackdrop.style.setProperty("--left", `${left}px`);
        menuBackdrop.style.setProperty("--top", `${top}px`);
        menuBackdrop.style.setProperty("--width", `${width}px`);
        menuBackdrop.style.setProperty("--height", `${height}px`);
        menuBackdrop.style.opacity = "1";
        menuBackdrop.style.visibility = "visible";

        timeoutId = window.setTimeout(() => {
          menuBackdrop.style.transition = "opacity 0.3s, visibility 0.3s";
        }, 0);
      });

      item.addEventListener("mouseleave", () => {
        menuBackdrop.style.opacity = "0";
        menuBackdrop.style.visibility = "hidden";

        clearTimeout(timeoutId);

        timeoutId = window.setTimeout(() => {
          menuBackdrop.style.transition = "";
        }, 300);
      });
    });
  }, []);

  let header: HTMLElement | null = null;
  useEffect(() => {
    header = document.querySelector('#Landing-header') as HTMLElement;
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
      <Logo />

      <nav className="flex flex-grow basis-0 justify-center">
        <ul className='flex text-sm [&>li>a]:text-current [&>li>a]:inline-block [&>li>a]:px-4'>
          <li><a href="#">Model S</a></li>
          <li><a href="#">Model 3</a></li>
          <li><a href="#">Model X</a></li>
          <li><a href="#">Model Y</a></li>
          <li><a href="#">Powerwall</a></li>
          <li><a href="#">Carga</a></li>
        </ul>
      </nav>

      <nav className="flex flex-grow basis-0 justify-end">
        <ul className='flex text-sm [&>li>a]:text-current [&>li>a]:inline-block [&>li>a]:px-4'>
          <li><a href="#">Soporte</a></li>
          <li><a href="#">Tienda</a></li>
          <li><a href="#">Cuenta</a></li>
          <li><a href="#">Menú</a></li>
        </ul>

      </nav>

      <div
        id='menu-backdrop'
        className='absolute bg-black/5 backdrop-blur-lg rounded
        left-[var(--left)] top-[var(--top)]
        w-[var(--width)] h-[var(--height)]
        transition-opacity transition-visibility duration-500 delay-75
        ease-in-out opacity-0 -z-10'
      ></div>
    </header>
  )
}
