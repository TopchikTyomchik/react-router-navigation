import { NavLink, useNavigate, useParams } from 'react-router-dom'
import courses from '../data/courses'
import { useEffect } from 'react';



const SingleCourse = () => {
   const params = useParams()
   const navigate = useNavigate();
   
   const course = courses.find((course) => course.slug === params.courseSlug)

   useEffect(() => {
    if(!course) {
      navigate('..', {relative:"path"})
    }
   }, [course, navigate])

  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>{course?.id}</h3>
      <NavLink to={'..'} relative='path' className={'singleCourseLink'}>All courses</NavLink>
    </>
  )
}

export default SingleCourse