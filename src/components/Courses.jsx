import React, { useEffect, useState } from 'react';
import courses from '../data/courses';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

const SORT_KEYS = ['title', 'slug', 'id'];

function sortCourses(courses, key) {
  if (!key || !SORT_KEYS.includes(key)) {
    return [...courses];
  }
  const sortedCourses = [...courses].sort((a, b) => (a[key] > b[key] ? 1 : -1));
  return sortedCourses;
}

const Courses = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = queryString.parse(location.search);
  const [sortKey, setSortKey] = useState(query.sort);
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  );

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.', { relalive: 'path' });
       setSortKey();
      setSortedCourses([...courses]) 
    }
  }, [sortKey, navigate]);

  const onChangeHandler = (e) => {
    navigate(`?sort=${e.target.value}`)
    setSortKey(e.target.value)
    setSortedCourses(sortCourses(courses, e.target.value))
  };

  return (
    <div>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>

      <label htmlFor='courses'>Sort by: </label>
      <select name='courses' id='courses' defaultValue={!sortKey ? 'default' : sortKey} onChange={onChangeHandler}>
        <option value='title'>title</option>
        <option value='slug'>slug</option>
        <option value='id'>id</option>
        <option value='default'>default</option>
      </select>

      {sortedCourses.map((course) => (
        <div key={course.id}>
          <NavLink to={course.slug} className={'courseLink'}>
            {course.title}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Courses;
