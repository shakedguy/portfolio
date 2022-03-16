import React from 'react';
import { useRouter } from 'next/router';
import Card from '../../components/Card';
const SkillPage = () => {
  const router = useRouter();

  return <Card>{router.query.skillid}</Card>;
};
export default SkillPage;
