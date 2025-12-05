import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://encotec.ca';

  return [
    // Homepage
    { url: `${baseUrl}/en`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/fr`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 1.0 },

    // About
    { url: `${baseUrl}/en/about`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/fr/about`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.8 },

    // Contact
    { url: `${baseUrl}/en/contact`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/fr/contact`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.8 },

    // Services - Commercial
    { url: `${baseUrl}/en/services/commercial`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/fr/services/commercial`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.9 },

    // Services - Institutional
    { url: `${baseUrl}/en/services/institutional`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/fr/services/institutional`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.9 },

    // Services - Residential
    { url: `${baseUrl}/en/services/residential`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/fr/services/residential`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.9 },
  ];
}
