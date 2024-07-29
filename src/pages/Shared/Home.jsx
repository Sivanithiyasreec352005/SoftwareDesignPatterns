import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';

import { AiFillGithub } from 'react-icons/ai';

const courses = [
  { id: 1, title: "Course 1", category: "Programming", date: "2023-08-01", instructor: "John Doe", difficulty: "Beginner", syllabus: "Syllabus 1", schedule: "Schedule 1", prerequisites: "Prerequisites 1" },
  { id: 2, title: "Course 2", category: "Design", date: "2023-09-01", instructor: "Jane Smith", difficulty: "Intermediate", syllabus: "Syllabus 2", schedule: "Schedule 2", prerequisites: "Prerequisites 2" },
  { id: 3, title: "Course 3", category: "Web Development", date: "2024-09-01", instructor: "Smriti ", difficulty: "Intermediate", syllabus: "Syllabus 2", schedule: "Schedule 2", prerequisites: "Prerequisites 3" },
  { id: 4, title: "Course 4", category: "Machine Learning", date: "2024-09-01", instructor: "Agnel John", difficulty: "Intermediate", syllabus: "Syllabus 2", schedule: "Schedule 2", prerequisites: "Prerequisites 3" },
  { id: 5, title: "Course 5", category: "Artificial Intelligence", date: "2024-09-01", instructor: "Josyh Portillia", difficulty: "Intermediate", syllabus: "Syllabus 2", schedule: "Schedule 2", prerequisites: "Prerequisites 3" },
  { id: 6, title: "Course 6", category: "Flutter", date: "2024-09-01", instructor: "Robert Bakel", difficulty: "Advanced", syllabus: "Syllabus 2", schedule: "Schedule 2", prerequisites: "Prerequisites 3" },
];

const Home = () => {
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [filter, setFilter] = useState({ category: '', date: '', instructor: '', difficulty: '' });
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
    filterCourses({ ...filter, [name]: value });
  };

  const filterCourses = (filter) => {
    let updatedCourses = courses;

    if (filter.category) {
      updatedCourses = updatedCourses.filter(course => course.category === filter.category);
    }
    if (filter.date) {
      updatedCourses = updatedCourses.filter(course => course.date === filter.date);
    }
    if (filter.instructor) {
      updatedCourses = updatedCourses.filter(course => course.instructor === filter.instructor);
    }
    if (filter.difficulty) {
      updatedCourses = updatedCourses.filter(course => course.difficulty === filter.difficulty);
    }

    setFilteredCourses(updatedCourses);
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };



  return (
    <div>
      <section className='body11'>
        <div className="h- flex flex-col items-center justify-center  ">
          <div className="w-full max-w-4xl mx-auto p-8 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome to NLearning</h1>
            <p className="text-lg text-gray-700 mb-8">
              We offer the best courses to help you shine bright.... Join us and start your journey towards success.
            </p>
            <div class="search-container">
              <form action="/search" method="GET" class="search-form">
                <input type="text" name="query" class="search-input" placeholder="Search..." />
                <button type="submit" class="search-button">Search</button>
              </form>
            </div>
          </div>
        </div>
        <section className="container">
          <div className="filter-container">
            <select name="category" value={filter.category} onChange={handleFilterChange}>
              <option value="">All Categories</option>
              <option value="Programming">Programming</option>
              <option value="Design">Design</option>
              <option value="Web Development">Web Development</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="Artificial Intelligence">Artificial Intelligence</option>
              <option value="Flutter">Flutter</option>
            </select>
            <select name="date" value={filter.date} onChange={handleFilterChange}>
              <option value="">All Dates</option>
              <option value="2023-08-01">2023-08-01</option>
              <option value="2023-09-01">2023-09-01</option>
              <option value="2024-03-03">2024-03-03</option>
              <option value="2024-01-31">2024-01-31</option>
              <option value="2024-02-07">2024-02-07</option>
              <option value="2024-06-26">2024-06-26</option>
            </select>
            <select name="instructor" value={filter.instructor} onChange={handleFilterChange}>
              <option value="">All Instructors</option>
              <option value="John Doe">John Doe</option>
              <option value="Jane Smith">Jane Smith</option>
              <option value="Agnel John">Agnel John</option>
              <option value="Josyh Portillia">Josyh Portillia</option>
              <option value="Robert Bakel">Robert Bakel</option>
            </select>
            <select name="difficulty" value={filter.difficulty} onChange={handleFilterChange}>
              <option value="">All Difficulty Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div className="course-list">
            {filteredCourses.map(course => (
              <div key={course.id} className="card" onClick={() => handleCourseSelect(course)}>
                <div className="card-content">
                  <h2>{course.title}</h2>
                  <p>Category: {course.category}</p>
                  <p>Date: {course.date}</p>
                  <p>Instructor: {course.instructor}</p>
                  <p>Difficulty: {course.difficulty}</p>
                </div>
              </div>
            ))}
          </div>

          {selectedCourse && (
            <div className="course-detail">
              <h1>{selectedCourse.title}</h1>
              <p><strong>Syllabus:</strong> {selectedCourse.syllabus}</p>
              <p><strong>Schedule:</strong> {selectedCourse.schedule}</p>
              <p><strong>Prerequisites:</strong> {selectedCourse.prerequisites}</p>
            </div>
          )}
        </section>
      </section>
      <section id="about">
      <div className="container">
        <header className="section-header text-center mb-5 pb-2">
          <h3>About Us</h3>
          <p>
          We NLEARN are a full-service learning design and development vendor and serving customers nationwide throughout the world. 
          </p>
        </header>
        <div className="row about-cols">
          <div className="col-md-4 wow fadeInUp">
            <div className="about-col">
              <div className="img">
                <img src="img/about-mission.webp" alt="" className="img-fluid" />
                <div className="icon">
                  <i className="ion-ios-speedometer-outline" />
                </div>
              </div>
              <h2 className="title">
                <a href="#">Our Mission</a>
              </h2>
              <p className="text-center">
                To utilize the power of technology in setting and reaching goals...
              </p>
            </div>
          </div>
          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="about-col">
              <div className="img">
                <img src="img/about-plan.webp" alt="" className="img-fluid" />
                <div className="icon">
                  <i className="ion-ios-list-outline" />
                </div>
              </div>
              <h2 className="title">
                <a href="#">Our Plan</a>
              </h2>
              <p className="text-center">
                We Plan to integrate Artificial Intelligence to hitting your set targets.
              </p>
            </div>
          </div>
          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
            <div className="about-col">
              <div className="img">
                <img src="img/about-vision.webp" alt="" className="img-fluid" />
                <div className="icon">
                  <i className="ion-ios-eye-outline" />
                </div>
              </div>
              <h2 className="title">
                <a href="#">Our Vision</a>
              </h2>
              <p className="text-center">
                To see you achieve more success in reaching more of your goals with Iris Goal Tracker.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div className="footer-section">
        <h3>FAQ</h3>
        <ul>
          <li>
            <Link to="/faq">How do I sign up for Nlearn?</Link>
            
          </li>
          <li>
            <Link to="/faq">Is this suitable for age people?</Link>
            
          </li>
          <li>
            <Link to="/faq">How do I track my course details</Link>
            
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>About Us</h3>
        <ul>
          <li>
            <Link to="/enroll">Our Story</Link>
            
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <ul>
          <li>
            <a href="#">
              <BsFacebook /> Nlearn
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagramSquare /> Nlearn
            </a>
          </li>
          <li>
            <a href="#">
              <BsTwitter /> Nlearn
            </a>
          </li>
          
        </ul>
      
      </div>
    
    </footer>

    </div>
  );
};

export default Home;