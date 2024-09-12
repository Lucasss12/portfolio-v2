import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Applique les règles à tous les robots
      allow: '/', // Autorise l'accès à toutes les pages
      disallow: '/private/', // Bloque l'accès à certaines pages sensibles
    },
    sitemap: 'https://lucas-mene.vercel.app/sitemap.xml', // Assurez-vous que c'est l'URL correcte de votre sitemap
  };
}
