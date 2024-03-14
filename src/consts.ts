export const SITE = {
  url: 'https://ricardoireno.vercel.app',
  title: 'Ricardo Ireno Portfolio',
  description: 'Front-end design...',
}

export const PESSOAL = {
  name: 'Ricardo Ireno',
  email: 'ricardoireno@outlook.com',
  whats_link: 'https://api.whatsapp.com/send?phone=5511937707434',
  whats_number: '+55 11 937 707 434',
}

export const SOCIAL = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/ricardoireno',
    icon: 'linkedin',
  },
  {
    label: 'Github',
    href: 'https://github.com/RicardoIreno',
    icon: 'github',
  },
] as const

export const SEO_INFO = [
  {
    name: 'description',
    content: `${SITE.description}`,
  },
  { name: 'keywords', content: 'Art portfolio, Digital art, gallery' },
  { name: 'author', content: `${SITE.title}` },
] as const

export const OPEN_GRAPH = [
  { property: 'og:url', content: `${SITE.url}` },
  { property: 'og:description', content: `${SITE.description}` },
  { property: 'og:image', content: '/og_image.jpg' },
  { property: 'og:image:type', content: 'image/jpeg' },
  { property: 'og:image:width', content: '400' },
  { property: 'og:image:height', content: '300' },
  { property: 'og:image:alt', content: `${SITE.title}` },
] as const

export const ROUTES = [
  {
    href: '/',
    icon: 'home',
    label: 'Home',
  },
  {
    href: '/about',
    icon: 'about',
    label: 'About',
  },
  {
    href: `mailto:${PESSOAL.email}`,
    icon: 'mail',
    label: 'Contact',
  },
] as const

export const FONTS =
  'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Oswald&display=swap'
//
