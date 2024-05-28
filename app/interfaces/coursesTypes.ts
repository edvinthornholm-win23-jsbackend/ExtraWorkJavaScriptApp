export interface Course {
    id: number;
    title: string;
    price: number;
    discountPrice: number;
    hours: number;
    isBestseller: boolean;
    likesInNumbers: number;
    likesInProcent: number;
    author: string;
    imageName: string;
    category: string;
  }
  
//   export interface CoursesResponse {
//     succeeded: boolean;
//     totalItems: number;
//     totalPages: number;
//     courses: Course[];
//   }
  