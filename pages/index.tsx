import {
  AutoGrid,
  Card,
  Cluster,
  Column,
  Columns,
  Pad,
  Placeholder,
  Stack,
} from '../components'

function ProductCard() {
  return (
    <Card>
      <Stack space="medium">
        <Placeholder />

        <Cluster space="small">
          <Placeholder height={24} width={30} />
          <Placeholder height={24} width={40} />
          <Placeholder height={24} width={60} />
          <Placeholder height={24} width={50} />
          <Placeholder height={24} width={30} />
        </Cluster>

        <Stack space="none">
          <h1>Product Name</h1>
          <Cluster space="small">★★★★</Cluster>
        </Stack>

        <Columns space="small" align="stretch" collapseBelow={200}>
          <Column>
            <Placeholder height={44} label="OK" />
          </Column>
          <Column>
            <Placeholder height={44} label="Cancel" />
          </Column>
        </Columns>
      </Stack>
    </Card>
  )
}

export default function Home() {
  return (
    <Pad space="large">
      <Columns align="stretch" collapseBelow={600} space="large">
        <Column width="1/4">
          <Placeholder height={300} label="Sidebar" />
        </Column>
        <Column>
          <AutoGrid space="medium" minItemWidth={400}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </AutoGrid>
        </Column>
      </Columns>
    </Pad>
  )
}
