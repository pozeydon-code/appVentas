import { Link, NavLink } from "react-router-dom";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react"
import { Global } from "@emotion/react";
import { ReactNode } from "react";

export const GridItem = ({ children, href, title, thumbnail }: { children: ReactNode, href: string, title: string, thumbnail: string }) => {
  return (
    <Box w="100%" textAlign="center">
      <LinkBox cursor="pointer">
        <img
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  );
};

export const WorkGridItem = ({ children, category = 'works', id, title, thumbnail }: {
  children?: ReactNode, category?: string, id?: string, title?: string, thumbnail?: string
}) => {
  return (
    <Box w="100%" textAlign="center">
      <LinkBox
        as={NavLink}
        to={`/${category}/${id}`}
        cursor="pointer"
      >
        <img
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
        />
        <LinkOverlay as="div" href={`/${category}/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  );
};

export const GridItemStyle = () => {
  return (
    <Global
      styles={`
        .grid-item-thumbnail{
          border-radius: 12px;
        }
      `}
    />
  );
};
