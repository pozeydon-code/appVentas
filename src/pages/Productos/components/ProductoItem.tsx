import { GridItems } from "@/components";
import { Producto } from "@/models";
import { Section } from "@/styled-components";

export const ProductoItem = ({ producto, descripcionProducto }: { producto: Producto, descripcionProducto: string }) => {

  return (
    <Section>
      <GridItems id={producto.id} title={producto.title} thumbnail={producto.source}>
        {producto.title} - {descripcionProducto}
      </GridItems>
    </Section>
  );
};
