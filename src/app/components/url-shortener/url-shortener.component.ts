import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';

import { UrlService } from '../../services/url.service';
import { UrlRequest, UrlAnalytics } from '../../models/url.model';

@Component({
  selector: 'app-url-shortener',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule
  ],
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css']
})
export class UrlShortenerComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  urlForm: FormGroup;
  searchForm: FormGroup;
  isLoading = false;
  isTableLoading = false;
  shortUrl = '';
  
  // Table configuration
  displayedColumns: string[] = ['sno', 'alias', 'shortUrl', 'clickCount'];
  dataSource = new MatTableDataSource<UrlAnalytics>([]);
  totalCount = 0;
  pageSize = 5;
  pageNumber = 1;
  pageSizeOptions = [5, 10, 25, 50];

  constructor(
    private fb: FormBuilder,
    private urlService: UrlService,
    private snackBar: MatSnackBar
  ) {
    this.urlForm = this.fb.group({
      longUrl: ['', [Validators.required, Validators.pattern(/^https?:\/\/.+/)]],
      alias: ['', [Validators.pattern(/^[a-zA-Z0-9_-]*$/)]]
    });

    this.searchForm = this.fb.group({
      searchTerm: ['']
    });
  }

  ngOnInit(): void {
    this.loadUrls();
  }

  onShortenUrl(): void {
    if (this.urlForm.valid) {
      this.isLoading = true;
      const request: UrlRequest = {
        longUrl: this.urlForm.get('longUrl')?.value,
        alias: this.urlForm.get('alias')?.value || undefined
      };

      this.urlService.shortenUrl(request).subscribe({
        next: (response) => {
          this.isLoading = false;
          if (response.success && response.data) {
            this.shortUrl = response.data.shortUrl;
            this.showSnackBar('URL shortened successfully!', 'success');
            this.urlForm.reset();
            this.loadUrls(); // Refresh the table
          } else {
            this.showSnackBar(response.message || 'Failed to shorten URL', 'error');
          }
        },
        error: (error) => {
          this.isLoading = false;
          this.showSnackBar(error.error.errorMessage, 'error');
          console.error('Error:', error);
        }
      });
    } else {
      this.markFormGroupTouched(this.urlForm);
    }
  }

  onSearch(): void {
    this.pageNumber = 1;
    this.loadUrls();
  }

  onClearSearch(): void {
    this.searchForm.get('searchTerm')?.setValue('');
    this.onSearch();
  }

  onPageChange(event: PageEvent): void {
    this.pageNumber = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadUrls();
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.showSnackBar('Copied to clipboard!', 'success');
    }).catch(() => {
      this.showSnackBar('Failed to copy to clipboard', 'error');
    });
  }

  private loadUrls(): void {
    this.isTableLoading = true;
    const searchTerm = this.searchForm.get('searchTerm')?.value;

    this.urlService.getUrls(this.pageNumber, this.pageSize, searchTerm).subscribe({
      next: (response) => {
        this.isTableLoading = false;
        if (response.success && response.data) {
          this.dataSource.data = response.data.items;
          this.totalCount = response.data.totalCount;
        } else {
          this.showSnackBar(response.message || 'Failed to load URLs', 'error');
        }
      },
      error: (error) => {
        this.isTableLoading = false;
        this.showSnackBar('Error occurred while loading URLs', 'error');
        console.error('Error:', error);
      }
    });
  }

  private showSnackBar(message: string, type: 'success' | 'error'): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: type === 'success' ? 'success-snackbar' : 'error-snackbar'
    });
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }

  // Getter methods for form validation
  get longUrlControl() {
    return this.urlForm.get('longUrl');
  }

  get aliasControl() {
    return this.urlForm.get('alias');
  }
}
