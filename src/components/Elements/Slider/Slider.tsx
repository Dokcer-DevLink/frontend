import Link from 'next/link';
import { Header, Inner, SeeAll, Title, Wrapper } from './Slider.style';
import type { UrlObject } from 'url';

type Url = string | UrlObject;

type SliderProps = {
  title?: String;
  children: React.ReactNode;
  link?: Url;
};

export const Slider = ({ title, children, link }: SliderProps) => {
  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
        {link && (
          <Link href={link}>
            <SeeAll>모두 보기</SeeAll>
          </Link>
        )}
      </Header>
      <Inner>{children}</Inner>
    </Wrapper>
  );
};
