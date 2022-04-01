import React from 'react';

import './titlePage.scss';

interface titlePageProps {
  title: string,
}

export default function TitlePage ({title} : titlePageProps) {
  return(
    <div className="container-title">
      <h1 className="title-page">{title}</h1>
    </div>
  );
};