interface CollectionItem {
  name: string;
  url: string;
}

interface CollectionStructuredDataOptions {
  title: string;
  description: string;
  url: string;
  locale: "en" | "bn";
  homeUrl: string;
  homeLabel: string;
  items: CollectionItem[];
}

export function collectionStructuredData({
  title,
  description,
  url,
  locale,
  homeUrl,
  homeLabel,
  items,
}: CollectionStructuredDataOptions): Record<string, unknown>[] {
  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: title,
      description,
      url,
      inLanguage: locale,
      isAccessibleForFree: true,
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: items.length,
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          url: item.url,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: homeLabel,
          item: homeUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: title,
          item: url,
        },
      ],
    },
  ];
}
