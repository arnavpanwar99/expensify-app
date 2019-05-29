import { Link } from 'react-router-dom';
import React from 'react';

const PageNotFound = () => (
    <div>
     <p>The page you are looking for does not exist</p>
     <Link to='/'>Home</Link>
    </div>
)

export default PageNotFound;