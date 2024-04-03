import { Helmet } from 'react-helmet-async';

export const Head = ({ title = '', description = '' } = {}) => {
  return (
    <Helmet
      title={title ? `${title} | Bulletproof React` : undefined}
      defaultTitle="Bulletproof React"
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};
