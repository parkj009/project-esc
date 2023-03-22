import React from 'react';
import styles from './BaseTemplate.module.css';

export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return (
    <div className={styles.container}>
      <p>{sampleTextProp}</p>
    </div>
  );
};

export default BaseTemplate;

// export default function BaseTemplate({ sampleTextProp }) {
//   return <div className={styles.container}>{sampleTextProp}</div>;
// }
