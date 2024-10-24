import { Section } from "@/styled-components";
import { Box } from "@chakra-ui/react";

export interface IFlexYoutubeVideo {
  title: string,
  src: string,
  delay: number,
}

export const FlexYoutubeVideo = ({ youtubeVideo }: { youtubeVideo: IFlexYoutubeVideo }) => {

  return (
    <Box flexBasis={{ base: '100%', md: '50%' }}>
      <Section delay={youtubeVideo.delay}>
        <Box
          position="relative"
          paddingBottom="56.25%"
          height="0"
          overflow="hidden"
        >
          <iframe
            src={youtubeVideo.src}
            title={youtubeVideo.title}
            style={{
              border: 0,
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>

      </Section>
    </Box>
  );
};
