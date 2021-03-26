import { Heading, Page } from "@shopify/polaris";
import Link from 'next/link'

const Index = () => (
  <Page>
    <Heading>Shopify app with Node and React 🎉</Heading>
    <ul>
      <li><Link href={'/static'}><a>page without serverSideProps</a></Link></li>
      <li><Link href={'/serversideprops'}><a>page with serverSideProps</a></Link></li>
    </ul>
  </Page>
);

export default Index;
