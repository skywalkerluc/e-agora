export interface Situation {
  id: string;
  title: string;
  normal: string;
  what_to_do: string;
  seek_doctor_if: string;
  source: string;
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
