'use client';

import Link from 'next/link';
import styles from '../styles';
import MobileDownloadButton from '../components/MobileDownloadButton';

const CTA = () => (
  <section id="CTA" className={`relative flex flex-col')] ${styles.yPaddings} w-full overflow-hidden`}>
    <div className={`${styles.innerWidth} mt-16 mx-auto z-10`}>
      <div className="w-full mobile-s:mt-10 laptop-s:my-28">
        <h1 className="font-bold text-[40px] leading-[48px] text-SDX-900 text-center mx-auto">Download now</h1>
        <p className="font-light text-[18px] leading-6 text-SDX-900 text-center max-w-md mx-auto mt-8">
          And gain access to a community-run blockchain, cross-chain limit-order DEX and NFT marketplace
        </p>
      </div>
      <div className="flex mt-8 mb-12">
        <div className="sm:mx-auto w-full flex flex-col sm:flex-row gap-4 tablet-s:justify-center">
          <MobileDownloadButton
            link=""
            logo="/swapdex-logo-icon.svg"
            className="border border-SDX-Pink bg-white/50 backdrop-blur-md my-auto py-4 px-6 gap-2 w-full justify-center items-algin-center translate-bump shadow-hover"
            logoClasses="w-[26px] h-[26px]"
            supportText="Launch in your browser"
            mainText="Launch App"
            mainTextClasses="text-SDX-900 my-auto"
            supportTextClasses="text-SDX-900 my-auto"
          />
          <MobileDownloadButton
            link="https://drive.google.com/drive/folders/1bRmKrm06RsmdSM-721XbJzA2D5U3Ssmp?usp=sharing"
            target="_blank"
            logo="/swapdex-logo-icon.svg"
            className="border border-SDX-Pink bg-white/50 backdrop-blur-md my-auto py-4 px-6 gap-2 w-full justify-center items-algin-center translate-bump shadow-hover"
            logoClasses="w-[26px] h-[26px]"
            supportText="DOWNLOAD TODAY"
            mainText="Beta Version"
            mainTextClasses="text-SDX-900 my-auto"
            supportTextClasses="text-SDX-900 my-auto"
          />
          {/* <MobileDownloadButton
              link="https://www.apple.com/"
              logo="/Apple_logo_black.svg"
              className="border border-SDX-Pink ghost-button my-auto py-4 px-6 gap-2 w-full justify-center items-algin-center translate-bump shadow-hover"
              logoClasses="w-[26px] h-[26px]"
              supportText="Download on the"
              mainText="App Store"
              mainTextClasses="text-SDX-900 my-auto"
              supportTextClasses="text-SDX-900 my-auto"
            />
            <MobileDownloadButton
              link="https://www.google.com/"
              logo="/Google_Play_2022_icon.svg"
              className="border border-SDX-Pink ghost-button my-auto py-4 px-6 gap-2 justify-center items-algin-center translate-bump shadow-hover"
              logoClasses="w-[26px] h-[26px]"
              supportText="GET IT ON"
              mainText="Google Play"
              mainTextClasses="text-SDX-900 my-auto"
              supportTextClasses="text-SDX-900 my-auto"
            /> */}
        </div>
      </div>
      <div className="flex justify-center">
        <p className="font-medium text-[18px] leading-6 text-SDX-900">Track us here</p>
      </div>
      <div className="grid mobile-s:grid-col-4 tablet-s:grid-cols-12 items-center justify-center tablet-s:mb-10">
        <Link href="https://www.coingecko.com/en/coins/swapdex" target="_blank" className=" mobile-s:col-start-2 mobile-s:col-end-3 tablet-s:col-start-6 tablet-s:col-end-7 mx-auto">
          <img src="./Gecko.svg" className="object-contain w-20 mobile-s:p-3 laptop-s:p-4" />
        </Link>
        <Link href="https://coinmarketcap.com/currencies/swapdex-sdxb/" target="_blank" className="mobile-s:col-start-3 mobile-s:col-end-4 tablet-s:col-start-7 tablet-s:col-end-8 mx-auto">
          <img src="./CoinMarketCap.svg" className="object-contain w-20" />
        </Link>
      </div>
    </div>
    <div className="z-0 flex absolute laptop-s:-translate-y-40">
      <img
        src="/CTA_render_01_done.jpg"
        className="object-cover mx-auto"
      />
    </div>
  </section>
);

export default CTA;
