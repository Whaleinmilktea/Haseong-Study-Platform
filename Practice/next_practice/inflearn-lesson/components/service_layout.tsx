import Head from 'next/head';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const ServiceLayout = function ({ title = 'whaleinmilktea', children }: Props) {
  return (
    <>
    {/* html을 기반으로 한 레이아웃의 문법 => 이 자체를 렌더링하지 않고, 별도로 export */}
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
};
