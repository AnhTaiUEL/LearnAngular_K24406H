import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../classes/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductHttpHandleErrorService {
  private jsonUrl = 'datasets/products.json';

  constructor(private http: HttpClient) {}

  getProductsHandleError(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.jsonUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Lỗi phía Client hoặc sự cố mạng
      errorMessage = `Lỗi Client: ${error.error.message}`;
    } else {
      // Lỗi phía Server (ví dụ: 404, 500)
      errorMessage = `Lỗi Server (Mã lỗi ${error.status}): Không tìm thấy file dữ liệu hoặc Server bị sự cố!`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
