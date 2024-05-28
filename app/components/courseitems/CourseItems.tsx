// import CourseItem from "./CourseItem";
// import { Course } from "@/app/interfaces/coursesTypes";

// export default async function CourseItems() {
//     const res = await fetch("https://localhost:7026/api/Courses");
//     const courses:Course[] = await res.json();
 
//     return (
//     <div className="grid">
//         {
//         courses.map(course => <CourseItem key={course.id} item={course}/>)
//         }
//     </div>
    
//     );
//   }
  

import CourseItem from "./CourseItem";
import { Course } from "@/app/interfaces/coursesTypes";

export default async function CourseItems() {
    try {
        const res = await fetch("https://localhost:7026/api/Courses");
        if (!res.ok) {
            throw new Error(`Failed to fetch courses: ${res.statusText}`);
        }
        const courses: Course[] = await res.json();

        return (
            <div className="grid">
                {courses.map(course => <CourseItem key={course.id} item={course} />)}
            </div>
        );
    } catch (error) {
        console.error("Error fetching courses:", error);
        return <div>Error fetching courses. Please try again later.</div>;
    }
}

