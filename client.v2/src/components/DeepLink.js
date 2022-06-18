import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function DeepLink({ children, to, ...props }) {
    let toPath= to.replace("/:*/","/*/");
    let resolved = useResolvedPath(toPath);
    let match = useMatch(resolved.pathname);
    let matchUri = useMatch(`*/${resolved.pathname.split('/').pop()}`);
    let linkClassName = 'inline-block p-4 rounded-t-lg text-xl text-gray-600 hover:text-gray-900 dark:hover:bg-gray-700 dark:text-gray-300 '
    let activeStyle = 'border-b-4 border-blue-700 dark:text-gray-100 dark:border-blue-500'

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