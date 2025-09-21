import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, delay } from 'rxjs';
import { UrlRequest, UrlResponse, UrlAnalytics, PaginatedResponse, ApiResponse } from '../models/url.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  /**
   * Shorten a URL
   */
  shortenUrl(request: UrlRequest): Observable<ApiResponse<UrlResponse>> {
    return this.http.post<ApiResponse<UrlResponse>>(`${this.baseUrl}/urls/CreateShortUrl`, request);
  }

  /**
   * Get paginated list of URLs with analytics
   */
  getUrls(pageNumber: number = 1, pageSize: number = 10, searchTerm?: string): Observable<ApiResponse<PaginatedResponse<UrlAnalytics>>> {
    
    let params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString())
      .set('sortBy', 'createdAt')
      .set('sortOrder', 'desc');
    
    if (searchTerm) {
      params = params.set('search', searchTerm);
    }
    
    return this.http.get<ApiResponse<PaginatedResponse<UrlAnalytics>>>(`${this.baseUrl}/urls/list`, { params });
  }

  /**
   * Get analytics for a specific URL alias
   */
  getUrlAnalytics(alias: string): Observable<ApiResponse<UrlAnalytics>> {
    return this.http.get<ApiResponse<UrlAnalytics>>(`${this.baseUrl}/urls/analytics`, { params: new HttpParams().set('shortCode', alias) });
  }
  
}
