import { Heading, Box, Button } from "substruct-ui";

function App() {
  return (
    <Box
      background="primary"
      padding={4}
      margin={4}
      border={{ options: { width: 5 } }}
      borderRadius={3}
    >
      <Heading>Substruct UI</Heading>
      <Button color="primary" border={{ options: { width: 5 } }}>
        Hello
      </Button>
    </Box>
  );
}

export default App;
