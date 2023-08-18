import { Heading, Box } from "substruct-ui";
import { Link } from "react-router-dom";

const docs = {
  "getting-started": {
    Installation: "/docs/getting-started/installation",
    Figma: "/docs/getting-started/figma",
    Theme: "/docs/getting-started/theme",
    Settings: "/docs/getting-started/settings",
  },
};

function Sidebar() {
  return (
    <Box maxWidth={200} padding={4} grow={1} style={{ width: "100%" }}>
      <Heading>Sidebar</Heading>
      {Object.entries(docs).map(([key, value]) => {
        return (
          <Box key={key}>
            <Heading>{key}</Heading>
            <ul>
              {Object.entries(value).map(([name, route]) => {
                return (
                  <li key={name}>
                    <Link to={route}>{name}</Link>
                  </li>
                );
              })}
            </ul>
          </Box>
        );
      })}
    </Box>
  );
}

export default Sidebar;
