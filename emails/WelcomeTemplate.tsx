import { Html, Body, Container, Text, Link, Preview, Tailwind } from '@react-email/components';

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="text-3xl font-bold">Hello {name}</Text>
            <Link href="https://www.yahoo.co.jp">www.yahoo.co.jp</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
