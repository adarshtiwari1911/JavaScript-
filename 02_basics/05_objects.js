//array de-structuring

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
//course.courseInstructor

const{courseInstructor:instructor}=course
//console.log(courseInstructor);
console.log(instructor);



