import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function DeepLink({ children, to, ...props }) {
    let toPath= to.replace("/:*/","/*/");
    let resolved = useResolvedPath(toPath);
    let match = useMatch(resolved.pathname);
    let matchUri = useMatch(`*/${resolved.pathname.split('/').pop()}`);
    let linkClassName = 'text-xl text-gray-700 hover:text-gray-900 py-1'
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

export default DeepLink;