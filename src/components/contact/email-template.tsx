import {
  Body,
  Button,
  Html,
  Img,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";
interface EmailTemplateProps {
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
  object: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  phoneNumber,
  message,
  object,
}) => (
  <Html>
    <Tailwind>
      <Body>
        <Section>
          <Img
            width={800}
            src="https://i.pinimg.com/564x/1c/e9/3a/1ce93ab3cc95415aedafd95f7904e991.jpg"
            alt="Bus"
            className="mx-auto"
          />
        </Section>
        <Text className="text-center">Welcome, {fullName}!</Text>
        <Text>email: {email}!</Text>
        <Text>phone Number: {phoneNumber}!</Text>
        <Text>message: {message}</Text>
        <Text>object: {object}</Text>
        <Section>
          <Button
            href="https://youtube.com"
            style={{ color: "#61dafb", padding: "10px 20px" }}
          >
            Visit
          </Button>
        </Section>
      </Body>
    </Tailwind>
  </Html>
);
