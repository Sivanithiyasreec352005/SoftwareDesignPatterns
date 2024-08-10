
const InstructorCourse = () => {
  const courses = [
    {
      title: 'Introduction to JavaScript',
      students: 120,
      rating: 4.5,
    },
    {
      title: 'Advanced React',
      students: 85,
      rating: 4.8,
    },
    {
      title: 'Python for Data Science',
      students: 200,
      rating: 4.7,
    },
  ];

  return (
    <div className="py-8">
      <h2 className="text-center text-2xl font-bold mb-8">Instructor Courses</h2>
      <div className="container mx-auto flex flex-wrap justify-center gap-8">
        {courses.map((course, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden w-80">
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">Students Enrolled: {course.students}</p>
              <p className="text-yellow-500 mb-4">Rating: {course.rating} / 5</p>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={() => alert(`Viewing details for ${course.title}`)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorCourse;
