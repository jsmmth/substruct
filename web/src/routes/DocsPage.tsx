import { Text, Box, Caption, Heading } from "substruct-ui";
import { useParams } from "react-router-dom";
import { useMemo, lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import NotFound from "./NotFound";

function DocsPage() {
  const { group, page } = useParams<{ group?: string; page?: string }>();
  const Doc = useMemo(() => {
    if (group && page) {
      return lazy(async () => {
        const view = await import(`../docs/${group}/${page}.mdx`);
        return view;
      });
    }
    return lazy(() => import(`../docs/getting-started/installation.mdx`));
  }, [group, page]);

  const components = {
    h1: ({ children }: React.ComponentProps<"h1">) => (
      <Heading>{children}</Heading>
    ),
    h2: ({ children }: React.ComponentProps<"h2">) => (
      <Heading size={3}>{children}</Heading>
    ),
    h3: ({ children }: React.ComponentProps<"caption">) => (
      <Caption color={{ color: "base", variant: 5 }}>{children}</Caption>
    ),
    p: ({ children }: React.ComponentProps<"p">) => (
      <Text color={{ color: "base", variant: 5 }}>{children}</Text>
    ),
    wrapper: ({ ...rest }) => <Box maxWidth={742} margin={4} {...rest} />,
  };

  return (
    <ErrorBoundary fallback={<NotFound />}>
      <Suspense fallback={<>Loading...</>}>
        <Doc components={components} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default DocsPage;
