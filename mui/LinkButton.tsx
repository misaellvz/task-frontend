import React, { PropsWithChildren as P } from 'react';
import Link, { LinkProps } from 'next/link';
import { Button, ButtonProps } from '@mui/material';

const LinkButton: React.FC<P<LinkProps | ButtonProps>> = ({ children, href, ...props }) => {
  return (
    <>
      {href &&
        <Link href={href}>
          <Button
            color='inherit'
            {...props}
          >
            {children}
          </Button>
        </Link>
      }
    </>
  )
}

export default LinkButton
