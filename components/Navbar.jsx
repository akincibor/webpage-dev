'use client';

import { useState } from 'react';
/* import { useRouter } from 'next/router'; */
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles';

/* this is a component that contains the menu items */
const MenuItems = ({ isMobile, active, setActive, setIsOpen }) => {
  const generateLink = (i) => {
    switch (i) {
      case 0: return { link: '/#blockchain', isExternal: false };
      case 1: return { link: '/#wallet', isExternal: false };
      case 2: return { link: '/#dex', isExternal: false };
      case 3: return { link: '/#NFTMarketplace', isExternal: false };
      case 4: return { link: 'https://swapdex.network/blog/', isExternal: true };
      default: return { link: '/', isExternal: false };
    }
  };

  return (
    <ul className={`list-none flex justify-center items-center flex-row ${isMobile && 'flex-col h-full'}`}>
      {['Blockchain', 'Wallet', 'DEX', 'NFT Marketplace', 'Blog'].map((item, i) => {
        const { link, isExternal } = generateLink(i);
        return (
          <div key={i} className="flex flex-col reveal-div mx-3">
            <li
              onClick={() => {
                setActive(item);
                setIsOpen(false);
              }}
              className={`flex flex-row items-center font-regular text-lg hover:text-SDX-LightPink
              ${active === item
                ? 'text-SDX-Pink'
                : 'text-SDX-200'}
              transition-colors duration-300`}
            >
              {isExternal
                ? <a href={link} target="_blank" rel="noopener noreferrer">{item}</a>
                : <Link href={link}>{item}</Link>}
            </li>
            {/* <div className="h-[1px] rounded-full bg-SDX-Pink mx-auto align-bottom nav-underline" /> */}
          </div>
        );
      })}
    </ul>
  );
};

const Navbar = () => {
  const [active, setActive] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pt-4">
      <div className={`hidden laptop-s:flex  ${styles.innerWidth} ${styles.xPaddings} mx-auto flex justify-between items-center`}>
        <div className="flex">
          <Link href="/">
            <Image
              src="/swapdex-light.png"
              alt="swapdex-logo"
              width={200}
              height={100}
              className="object-contain"
            />
          </Link>
        </div>

        {/* This is the div for the menu on larger screens */}
        <div className="hidden laptop-s:flex ">
          <ul className="list-none flex justify-center items-center flex-row">
            <MenuItems active={active} setActive={setActive} setIsOpen={setIsOpen} />
          </ul>
        </div>
        <div className="flex flex-row gap-3">
          <button type="button" className="py-2 px-4 border border-SDX-300 bg-gradient-to-r from-SDX-Pink to-SDX-700 rounded-lg items-center hover:border-SDX-Pink transition-all duration-300">
            <Link href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x6b5fec1351c9ff830db0ebe343a235976b6352ea&chain=mainnet" target="_blank" className="flex flex-row gap-2">
              <Image
                src="/uniswap_logo.png"
                alt="uniswap link"
                className="object-contain"
                width={28}
                height={50}
              />
              <div className="flex flex-col items-start">
                <div className="flex flex-row items-center gap-1">
                  <p className="text-SDX-200 font-bold text-sm leading-3">BUY AT</p>
                </div>
                <p className="text-SDX-200 font-light text-xs">UNISWAP</p>
              </div>
            </Link>
          </button>
        </div>
      </div>

      {/* this is the div for the mobile navigation bar */}

      <div className={`${styles.innerWidth} ${styles.xPaddings} flex justify-between items-center laptop-s:hidden py-3`}>
        <div className="flex">
          <Link href="/">
            <Image
              src="/swapdex-light.png"
              alt="swapdex-logo"
              className="object-contain"
              width={200}
              height={100}
            />
          </Link>
        </div>

        {/* here we handle the menu bars & cross logic */}
        {isOpen
          ? (
            <i
              className="fa-solid fa-xmark text-SDX-200 text-2xl z-50"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <i
              className="fa-solid fa-bars text-SDX-200 text-2xl z-50"
              onClick={() => setIsOpen(true)}
            />
          )}

        {/* Here we style the mobile menu */}
        {isOpen && (
          <div className="fixed inset-0 top-16 z-40 bg-SDX-900/90 backdrop-blur-xl nav-h flex justify-between flex-col">
            <div className="flex-1 p-4">
              <MenuItems active={active} setActive={setActive} isMobile setIsOpen={setIsOpen} />
            </div>
            <div className="p-4 border-t border-SDX-300/25">
              <div className="flex flex-row justify-between">
                <button type="button" className="py-2 px-4 border border-SDX-300 bg-gradient-to-r from-SDX-Pink to-SDX-700 rounded-lg items-center hover:border-SDX-Pink transition-all duration-300">
                  <Link href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x6b5fec1351c9ff830db0ebe343a235976b6352ea&chain=mainnet" target="_blank" className="flex flex-row gap-2">
                    <Image
                      src="/uniswap-logo.png"
                      alt="uniswap link"
                      className="object-contain"
                      width={28}
                      height={50}
                    />
                    <div className="flex flex-col items-start">
                      <div className="flex flex-row items-center gap-1">
                        <p className="text-SDX-200 font-bold text-sm leading-3">BUY AT</p>
                      </div>
                      <p className="text-SDX-200 font-light text-xs">UNISWAP</p>
                    </div>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="h-[1px] bg-SDX-300 w-full align-bottom mt-4 opacity-25" />
    </div>

  );
};

export default Navbar;
