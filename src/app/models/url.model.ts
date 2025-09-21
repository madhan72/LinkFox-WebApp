export interface UrlRequest {
  longUrl: string;
  alias?: string;
}

export interface UrlResponse {
  id: number;
  longUrl: string;
  shortUrl: string;
  alias: string;
  clickCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface UrlAnalytics {
  sno: number;
  shortCode: string;
  shortUrl: string;
  clickCount: number;
  ipAddress: string;
  browserUserAgent: string;
  createdAt?: Date;
  clicks?: AnalyticsDetail[];
}

export interface PaginatedResponse<T> {
  items: T[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  errors?: string[];
}

export interface AnalyticsDetail {
  id: number;
  ipAddress: string;
  browserUserAgent: string;
  clickedAt: Date;
  location?: string;
}
