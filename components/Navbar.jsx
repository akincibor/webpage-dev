'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import DownloadButton from './DownloadButton';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative bg-SDX-900`}
  >
    <div className={`${styles.innerWidth} mx-auto flex justify-between items-center`}>
      <div className="flex gap-[10px]">
        <img
          src="/swapdex-logo-icon.svg"
          alt="swapdex-logo"
          className="w-[37px] object-contain"
        />
        <h2 className="font-semibold text-[24px] leading-[30px] text-SDX-200">
          SwapDEX
        </h2>
      </div>
      <div className="flex gap-[23px] align-middle">
        <a href="#blockchain" className="font-regular text-[18px] leading-[24px] text-SDX-200">Blockchain</a>
        <a href="#wallet" className="font-regular text-[18px] leading-[24px] text-SDX-200">Wallet</a>
        <a href="#dex" className="font-regular text-[18px] leading-[24px] text-SDX-200">DEX</a>
        <a href="#NFTMarketplace" className="font-regular text-[18px] leading-[24px] text-SDX-200">NFT Marketplace</a>
      </div>
      <DownloadButton href="https://app.swapdex.network/#/swapdex/" target="_blank" className="nav-button-gradient">
        Launch App
      </DownloadButton>
    </div>

  </motion.nav>
);

export default Navbar;