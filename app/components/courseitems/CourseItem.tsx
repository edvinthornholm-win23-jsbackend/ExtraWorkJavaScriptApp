// import { Course } from "@/app/interfaces/coursesTypes";
// import AddBookmarkBtn from "../addbookmark/AddBookmarkBtn";
// import Link from "next/link";

// interface CourseItemProps {
//     item: Course;
//   }

// export default function CourseItem({item}: CourseItemProps) {
//     return (
//         <Link href={`/course/${item.id}`} className="course-card">
//             <div className="course-card_img">
//                 <img className="img-card" src={item.imageName}/>
//                 {/* @if (item.IsBestseller)
//                 {
//                     <div className="bestseller">
//                         <p>Bestseller</p>
//                     </div>
//                 } */}
//                 <form asp-controller="Account" asp-action="SavedCourses" method="post">
//                     <input type="hidden" name="courseId" value="@item.Id" />
                
//                 <AddBookmarkBtn itemId={item.id}/>

//                 </form>
//             </div>
//             <div className="course-card_body">
//                 <h2 className="h5 multi-line-title">{item.title}</h2>
//                 <p className="text-s">{item.author}</p>
//                 <div className="price">
            
            
//                         <p className="original-price">{item.price}</p>
                
        
                
        
//                         <p className="original-price"></p>
//                         <p className="discounted-price">{item.discountPrice}</p>
//                         <p className="discounted-price-line-through">{item.price}</p>
                
//                 </div>
        
//             </div>
//             <div className="line"></div>
//             <div className="course-card__footer">
//                 <div>
//                     <i className="fa-regular fa-clock"></i>
//                     <p>{item.hours}</p>
//                 </div>
//                 <div>
//                     <i className="fa-regular fa-thumbs-up"></i>
//                     <p>
                
                        
//                     </p>
//                 </div>
//             </div>
//         </Link>
//     );
//   }
  
import React from 'react';
import { Course } from "@/app/interfaces/coursesTypes";
import AddBookmarkBtn from "../addbookmark/AddBookmarkBtn";
import Link from "next/link";

interface CourseItemProps {
    item: Course;
}

const CourseItem: React.FC<CourseItemProps> = ({ item }) => {
    return (
        <Link href={`/course/${item.id}`} className="course-card">
            <div className="course-card_img">
                <img className="img-card" src={item.imageName} alt={item.title} />
                {/* @if (item.IsBestseller)
                {
                    <div className="bestseller">
                        <p>Bestseller</p>
                    </div>
                } */}
                <form asp-controller="Account" asp-action="SavedCourses" method="post">
                    <input type="hidden" name="courseId" value={item.id} />
                    <AddBookmarkBtn itemId={item.id} />
                </form>
            </div>
            <div className="course-card_body">
                <h2 className="h5 multi-line-title">{item.title}</h2>
                <p className="text-s">{item.author}</p>
                <div className="price">
                    <p className="original-price">{item.price}</p>
                    <p className="original-price"></p>
                    <p className="discounted-price">{item.discountPrice}</p>
                    <p className="discounted-price-line-through">{item.price}</p>
                </div>
            </div>
            <div className="line"></div>
            <div className="course-card__footer">
                <div>
                    <i className="fa-regular fa-clock"></i>
                    <p>{item.hours}</p>
                </div>
                <div>
                    <i className="fa-regular fa-thumbs-up"></i>
                    <p></p>
                </div>
            </div>
        </Link>
    );
};

export default CourseItem;
