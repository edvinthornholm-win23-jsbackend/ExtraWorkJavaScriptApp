

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

// CourseItems.tsx
// 'use client';
// import CourseItem from "./CourseItem";
// import { Course } from "@/app/interfaces/coursesTypes";
// import React, { use, useEffect, useState } from "react";

// const CourseItems: React.FC = () => {
//   const [courses, setCourses] = useState<Course[] | null>(null);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await fetch("https://courseprovider-silicon-et.azurewebsites.net/api/graphql?code=HwR4hOUedeBAkP2RuBebzjkPFIezqH_ZfFQZ85Vbr9pLAzFuGFDHGg%3D%3D");
//         if (!res.ok) {
//           throw new Error(`Failed to fetch courses: ${res.statusText}`);
//         }
//         const courses: Course[] = await res.json();
//         setCourses(courses);
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div className="grid">
//       {courses &&
//         courses.map((course) => <CourseItem key={course.id} item={course} />)}
//     </div>
//   );
// };

// export default CourseItems;