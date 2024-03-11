<<<<<<<< < Temporary merge branch 1
import { Transition } from '@headlessui/react'
import React from 'react'
import { tabs } from './constant'
import Link from 'next/link';
import { Bodoni_Moda } from 'next/font/google';
import RegisterDropdown from './registrationdropdown';
import CouncilDropdown from './councildropdown';
=========
import { Transition } from "@headlessui/react";
import React from "react";
import { tabs } from "./constant";
import Link from "next/link";
import { Poppins } from "next/font/google";
import RegisterDropdown from "./registrationdropdown";
import AboutDropdown from "./aboutdropdown";
import CouncilDropdown from "./councildropdown";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

function NavBarCollapse(props: any) {
  return (
    <Transition
      as="div"
      show={!props.isCollapsed}
      className="w-full flex py-3 lg:hidden"
      enterFrom="-translate-y-30 opacity-0"
      enter="transition-all duration-300"
      leaveTo="-translate-y-30 opacity-0"
      leave="transition-all duration-300"
    >
      <div className={`flex flex-col gap-4 ${poppins.className} text-lg`}>
        <div className="ms-2">
          <AboutDropdown
            aboutRef={props.aboutRef}
            grandRef={props.grandRef}
          />
        </div>
        {tabs.map(({ url, label }, index) => (
          <Link href={url} key={index}>
            <div className="text-white ms-2">{label}</div>
          </Link>
        ))}
        <div className="ms-2">
          <CouncilDropdown offlineRef={props.offlineRef} onlineRef={props.onlineRef} />
        </div>
        <RegisterDropdown isNav={true} />
      </div>
    </Transition>
  )
      <div className={`flex flex-col gap-4 ${poppins.className} text-m`}>
        {tabs.map(({ url, label }, index) => (
          <Link href={url} key={index}>
            <div className="text-white ms-2">{label}</div>
          </Link>
        ))}
        <RegisterDropdown isNav={true} />
      </div>
    </Transition>
  );
}

export default NavBarCollapse;
