export interface Image {
    id: string;
    urls: {
      regular: string;
      small: string;
    };
  }
  
 export interface ApiResponse {
    total: number;
    total_pages: number;
    results: Image[];
  }