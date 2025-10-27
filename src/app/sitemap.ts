import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://edbattah.com';

  return [
    // Homepage
    { url: `${baseUrl}/en`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/fr`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 1.0 },

    // Static Pages
    { url: `${baseUrl}/en/about`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/fr/about`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },

    { url: `${baseUrl}/en/collections`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/fr/collections`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },

    { url: `${baseUrl}/en/where-to-buy`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/fr/where-to-buy`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },

    // Collections
    { url: `${baseUrl}/en/collections/bariloche`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/fr/collections/bariloche`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },

    { url: `${baseUrl}/en/collections/calatura`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/fr/collections/calatura`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },

    { url: `${baseUrl}/en/collections/ecla`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/fr/collections/ecla`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },

    { url: `${baseUrl}/en/collections/elisa-cavaletti`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/fr/collections/elisa-cavaletti`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },

    { url: `${baseUrl}/en/collections/gardel-by-moore`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/fr/collections/gardel-by-moore`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },

    { url: `${baseUrl}/en/collections/soulmate`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/fr/collections/soulmate`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },

    { url: `${baseUrl}/en/collections/tinta`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/fr/collections/tinta`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },

    { url: `${baseUrl}/en/collections/valentinas`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/fr/collections/valentinas`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },
  ];
}
