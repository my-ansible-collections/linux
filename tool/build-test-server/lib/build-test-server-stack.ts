import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as myEc2 from 'my-aws-cdk-lib/ec2-construct';

export interface BuildTestServerStackProps extends cdk.StackProps {
  instances: myEc2.InstancesProps;
}

export class BuildTestServerStack extends cdk.Stack {
  readonly instances: myEc2.Instances;

  constructor(scope: Construct, id: string, props: BuildTestServerStackProps) {
    super(scope, id, props);

    this.instances = new myEc2.Instances(this, 'MyAnsibleCollectionsTestStack', props.instances);
  }
}
