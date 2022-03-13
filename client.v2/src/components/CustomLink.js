import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let toPath= to.replace("/:*/","/*/");
    let resolved = useResolvedPath(toPath);
    let match = useMatch(resolved.pathname);
    let matchUri = useMatch(`${resolved.pathname.split('/')[1]}/*`);
    let linkClassName = 'break-normal text-xl text-gray-700 hover:text-gray-900 px-10 py-4'
    let activeStyle = ' border-b-4 border-sky-700 '

    console.log(resolved.pathname);
    console.log(resolved.pathname.split('/'));
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