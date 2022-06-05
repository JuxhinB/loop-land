
export interface CrewAPIResponse {
  data: Data;
}

export interface Data {
  data: CrewData[];
  meta: Meta;
}

export interface CrewData {
  image:      string;
  name:       string;
  duties:     string;
  duty_slugs: string[];
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  current_page: number;
  limit:        number;
  total:        number;
  total_pages:  number;
}
