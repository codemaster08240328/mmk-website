import { useEffect } from 'react';

const IndexPage = () => {
  useEffect(() => {
    //@ts-ignore
    window.location.href = window.location.href + 'intelligent-finance';
  }, [])

  return (
    <div>Loading...</div>
  )
}

export default IndexPage;
