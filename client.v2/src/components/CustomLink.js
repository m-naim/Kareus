import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let toPath= to.replace("/:*/","/*/");
    let resolved = useResolvedPath(toPath);
    let match = useMatch({ path: resolved.pathname});
    let linkClassName = 'text-xl text-gray-700 hover:text-gray-900 px-10 py-1'
    let activeStyle = ' border-b-2 border-sky-700'
    return (
      <div>
        <Link
            className={match ? linkClassName+activeStyle : linkClassName }
            to={to}
            {...props}
        >
          {children}
        </Link>
      </div>
    );
  }

export default CustomLink;