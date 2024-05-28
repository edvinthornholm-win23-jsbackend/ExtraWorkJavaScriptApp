import CourseItems from "../components/courseitems/CourseItems";
import SearchFilters from "../components/searchbox/SearchFilters";

export default function Courses() {
    return (
      <section className="courses">
        <div className="container">


            <div className="bord">
                <div className="header">
                    <h1 className="my5">Courses</h1>
                </div>

                <SearchFilters/>
            </div>

            <CourseItems/>

        </div>
        </section>
    );
  }
  