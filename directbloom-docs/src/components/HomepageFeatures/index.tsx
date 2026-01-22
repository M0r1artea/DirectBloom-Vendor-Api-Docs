import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Order Created Webhook',
    Svg: require('@site/static/img/shopping-bag.svg').default,
    description: (
      <>
        Get notified whenever one of your products is purchased.
      </>
    ),
  },
  {
    title: 'Order Fulfillment',
    Svg: require('@site/static/img/label.svg').default,
    description: (
      <>
        Fulfill orders with a simple rest call.
      </>
    ),
  },
  {
    title: 'Product Management',
    Svg: require('@site/static/img/warehouse.svg').default,
    description: (
      <>
        Create, update, and manage inventory.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
