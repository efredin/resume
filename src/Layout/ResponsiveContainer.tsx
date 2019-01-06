import React from 'react';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';

export interface ResponsiveContainerProps extends React.ComponentProps<any> {
  masthead?: any;
}

const ResponsiveContainer = (props: ResponsiveContainerProps) => {
  const { children, masthead } = props;
  return (
    <div>
      <DesktopContainer masthead={masthead}>{children}</DesktopContainer>
      <MobileContainer masthead={masthead}>{children}</MobileContainer>
    </div>
  );
};

export default ResponsiveContainer;