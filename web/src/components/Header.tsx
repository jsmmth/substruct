import { Box, Flex } from "substruct-ui";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Box as="header">
      <Flex justify="space-between">
        <Box padding={4}>
          <Link to="/">Substruct</Link>
        </Box>

        <Box padding={4}>
          <Flex justify="space-between">
            <Link to="/docs">Docs</Link>
            <Link to="/docs/components">Components</Link>
            <Link to="/playground">Playground</Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Header;
