export interface BusinessCardData {
  name?: string;
  jobTitle?: string;
  company?: string;
  logo?: string;
  duration?: string;
  location?: string;
  description?: string;
  contact?: string;

  // design props
  layout?: "logo-top-right" | "logo-top-left" | "all-centered" | "leading"; // easily extensible
}

export interface CTACardData {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export type StackCardData =
  | { type: "business"; data: BusinessCardData }
  | { type: "cta"; data: CTACardData };
