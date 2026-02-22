
export type EscapeType = 'Luxury' | 'Adventure' | 'Culture' | 'Nature';
export type CompanionType = 'Solo' | 'Partner' | 'Family' | 'Group';

export interface TripFormData {
  escape: EscapeType;
  companion: CompanionType;
  budget: number;
  startDate: string;
  endDate: string;
}

export interface Activity {
  id: string;
  title: string;
  category: string;
  image: string;
  span?: string;
}

export interface Testimonial {
  id: string;
  user: string;
  handle: string;
  content: string;
  image: string;
  tags: string[];
}

export interface Journey {
  day: number;
  title: string;
  description: string;
  image: string;
}
