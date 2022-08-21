import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let toPath= to.replace("/:*/","/*/");
    let resolved = useResolvedPath(toPath);
    let match = useMatch(resolved.pathname);
    let matchUri = useMatch(`${resolved.pathname.split('/')[1]}/*`);
    let linkClassName = 'inline-flex group break-normal text-lg text-gray-700 dark:text-slate-400 hover:bg-gray-100 hover:rounded-md hover:text-blue-700 p-2 mx-4 whitespace-nowrap dark:hover:bg-gray-600 dark:hover:text-blue-500'
    let activeStyle = ' border-b-4 border-blue-700 dark:border-blue-500  text-blue-700 dark:text-blue-500 '


    return (
      <div>
        <Link
            className={match || matchUri ? linkClassName+activeStyle : linkClassName }
            to={to}
            {...props}
        >
          {children}
        </Link>
      </div>
    );
  }

export default CustomLink;