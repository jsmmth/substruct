import { useEffect, useState } from "react";
import { Button, Box, Text, Strong, Em, Blockquote, Tag } from "substruct-ui";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoading]);

  return (
    <>
      <Box
        padding={{ initial: 6, options: { sm: 4 } }}
        margin={6}
        borderRadius={3}
      >
        <Text as="p" color="primary" size={5}>
          <Em color="success" background="success">
            Hello world
          </Em>{" "}
          I am{" "}
          <Strong color={{ color: "danger", variant: 3 }}>some text</Strong>
        </Text>
        <Button
          color="primary"
          borderRadius={{ initial: 3, options: { sm: 4 } }}
          isLoading={isLoading}
          size={{ initial: 3, options: { sm: 2 } }}
          onClick={() => setIsLoading(!isLoading)}
        >
          Button
        </Button>

        <Button color="primary" variant="soft">
          Button
        </Button>

        <Button color="success" variant="outline">
          Button
        </Button>

        <Blockquote borderRadius={4}>
          <Text size={3}>
            "Stay away from those people who try to disparage your ambitions.
            Small minds will always do that, but great minds will give you a
            feeling that you can become great too." —{" "}
            <Strong color="primary">Mark Twain</Strong>
          </Text>
        </Blockquote>

        <div style={{ height: 20 }} />
        <Tag color="primary" hasBorder>
          Tag
        </Tag>
        <Tag color="success">Tag</Tag>
      </Box>

      {/* <Flex minHeight={100} unit="vh" align="stretch">
        <Box grow={1} maxWidth={300} background={{ color: "base", variant: 2 }} />
        <Box padding={{ initial: 6, options: { sm: 4 }}}>

          <Button color="primary" size={{ initial: 3, options: { sm: 1 }}}>Button</Button>
          <Button color="primary" variant="soft" size={{ initial: 3, options: { sm: 1 }}}>Button</Button>
          <Button color="primary" variant="outline" size={{ initial: 3, options: { sm: 1 }}}>Button</Button>
        </Box>
      </Flex> */}
    </>
  );
}

export default App;
