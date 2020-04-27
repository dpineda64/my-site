import React from 'react';
import Layout from '@/components/layout';

export const wrapPageElement = ({ element, props }) => {
  console.log('hello');
  return <Layout {...props}>{element}</Layout>;
};
