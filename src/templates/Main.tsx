import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type MainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Main = (props: MainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <div className="max-w-screen-md mx-auto">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div className="text-3xl font-bold text-gray-900">{AppConfig.title}</div>
          <div className="text-xl">{AppConfig.description}</div>
        </div>
        <div>
          <ul className="flex flex-wrap text-xl">
            <li className="mr-6">
              <Link href="/" className="border-none text-gray-700 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/about/" className="border-none text-gray-700 hover:text-gray-900">
                About
              </Link>
            </li>
            <li className="mr-6">
              <a
                className="border-none text-gray-700 hover:text-gray-900"
                href="https://github.com/ixartz/Next-js-Boilerplate"
              >
                GitHub
              </a>
            </li>
            <li className="mr-6">
              <Link href="/blog/" className="border-none text-gray-700 hover:text-gray-900">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="content min-h-screen py-5 text-xl">{props.children}</div>

      {/* <div className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}
      </div> */}
    </div>
  </div>
);

export { Main };
