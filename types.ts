
export type SectionType = 'hero' | 'text' | 'image' | 'button' | 'header' | 'footer';

export interface WebsiteSection {
  id: string;
  type: SectionType;
  content: {
    title?: string;
    subtitle?: string;
    body?: string;
    imageUrl?: string;
    buttonText?: string;
  };
  styles: {
    fontSize: string;
    backgroundColor: string;
    padding: string;
    margin: string;
  };
}

export interface Website {
  id: string;
  name: string;
  slug: string;
  sections: WebsiteSection[];
  createdAt: string;
  status: 'draft' | 'published';
}

export interface Service {
  id: string;
  name: string;
  price: string;
  description: string;
  creator: string;
}
