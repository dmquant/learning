import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return key in ui[lang] ? (ui[lang] as any)[key] : ui[defaultLang][key];
  }
}

export function getRouteFromUrl(url: URL) {
  const [, , ...route] = url.pathname.split('/');
  return route.join('/');
}

export function pathNameIsInLanguage(pathname: string, lang: string) {
  return pathname.startsWith(`/${lang}`);
}

export function getLocalizedPath(path: string, lang: string = defaultLang) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // If path is empty or just a slash, return the language root
  if (!cleanPath || cleanPath === '/') {
    return `/${lang}`;
  }
  
  // If path already starts with a language code, replace it
  const pathParts = cleanPath.split('/');
  if (pathParts[0] in ui) {
    pathParts[0] = lang;
    return `/${pathParts.join('/')}`;
  }
  
  // Otherwise, prepend the language code
  return `/${lang}/${cleanPath}`;
} 