import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
import { ReactNode } from "react";
import { GridItemStyle } from "../Grids";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
};

export const Layout = ({ children, title }: { children: ReactNode, title?: string }) => {
  const t = `${title} - Francisco Herrera`;
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.7, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        {title && (
          <Helmet>
            <title>{t}</title>
            <meta name="twitter:title" content={t} />
            <meta property="og:title" content={t} />
          </Helmet>
        )}
        {children}

        <GridItemStyle />
      </>
    </motion.article>
  )
}
