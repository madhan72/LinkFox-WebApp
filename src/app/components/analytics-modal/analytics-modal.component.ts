import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { AnalyticsDetail } from '../../models/url.model';

export interface AnalyticsModalData {
  alias: string;
  shortUrl: string;
  clickCount: number;
  analyticsDetails: AnalyticsDetail[];
}

@Component({
  selector: 'app-analytics-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule
  ],
  templateUrl: './analytics-modal.component.html',
  styleUrls: ['./analytics-modal.component.css']
})
export class AnalyticsModalComponent {
  displayedColumns: string[] = ['clickedAt', 'ipAddress', 'browserUserAgent'];

  constructor(
    public dialogRef: MatDialogRef<AnalyticsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AnalyticsModalData
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
