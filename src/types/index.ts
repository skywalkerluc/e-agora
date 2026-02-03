export type UrgencyLevel = 'info' | 'watch' | 'emergency';

export interface AgeRange {
  min: number;
  max: number;
}

export interface Situation {
  id: string;
  title: string;
  normal: string;
  what_to_do: string;
  seek_doctor_if: string;
  source: string;
  keywords?: string[];
  age_range?: AgeRange;
  urgency_level?: UrgencyLevel;
  related_ids?: string[];
  source_url?: string;
}

export interface Category {
  id: string;
  name: string;
  situations: Situation[];
}

export interface SituationsData {
  meta: {
    version: string;
    target_age: string;
    last_updated: string;
  };
  categories: Category[];
}
