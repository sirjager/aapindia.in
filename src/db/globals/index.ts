import directus from "@/db/directus";

export interface SiteInfo {
  url: string;
  title: string;
  tagline: string;
  description: string;
}

export async function getSiteInfo() {
  const url = "/items/globals?fields=name,tagline,description,url";
  const res = await directus(url);
  if (res && res.status === 200) {
    const { data } = await res.json();
    const info: SiteInfo = data;
    return info;
  }
}


interface SocialLink {
  service: string;
  url: string;
  svg: string;
}

export async function getSocialLinks() {
  const url = "/items/globals?fields=social_links";
  const res = await directus(url);
  if (res && res.status === 200) {
    const { data } = await res.json();
    const socials: SocialLink[] = data?.social_links || [];
    return socials;
  }
}


interface FooterSection {
  title: string;
  items: { label: string; link: string }[];
}
export async function getFooter() {
  const url = "/items/globals?fields=footer_sections";
  const res = await directus(url);
  if (res && res.status === 200) {
    const { data } = await res.json();
    const sections: FooterSection[] = data?.footer_sections || [];
    return sections;
  }
}
