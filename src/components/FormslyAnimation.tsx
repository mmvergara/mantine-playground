import React, { useState, useEffect } from "react";
import { Code, Container, Divider, Paper, Text, Title, Transition } from "@mantine/core";

const Demo = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      <Container style={{ border: "1px solid white", padding: "5em", marginTop: "20px" }}>
        {[1, 2, 3, 4, 5].map((item) => (
          <Transition transition='pop' duration={item * 100} mounted={show}>
            {(styles) => (
              <Paper style={{ ...styles, marginBottom: "2px" }} withBorder>
                <Text>Pop In Title</Text>
              </Paper>
            )}
          </Transition>
        ))}
      </Container>
      <Title align='center' my={30}>
        OR
      </Title>

      <Container style={{ border: "1px solid white", padding: "5em", marginTop: "20px" }}>
        {[1, 2, 3, 4, 5].map((item) => (
          <Transition transition='fade' duration={item * 100} mounted={show}>
            {(styles) => (
              <Paper style={{ ...styles, marginBottom: "2px" }} withBorder>
                <Text>Fade In Title</Text>
              </Paper>
            )}
          </Transition>
        ))}
        <Text>To use this just change the transition prop from 'pop' to 'fade'</Text>
      </Container>
      <Code block>
        {`    <Container style={{ border: "1px solid white", padding: "5em" }}>
    {[1, 2, 3, 4, 5].map((item) => (
      <Transition transition='pop' duration={item * 100} mounted={show}>
        {(styles) => (
          <Paper style={{ ...styles, marginBottom: "2px" }} withBorder>
            <Text>Fade-In Title</Text>
          </Paper>
        )}
      </Transition>
    ))}
  </Container>`}
      </Code>
    </>
  );
};

export default Demo;
