import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['tr', 'en', 'ar', 'de', 'es', 'ru'],
  defaultLocale: 'tr',
});

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
