#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { BuildTestServerStack } from '../lib/build-test-server-stack';

const app = new cdk.App();
const stack = new BuildTestServerStack(app, 'BuildTestServerStack', {
  instances: {
    vpc: {
      type: 'VpcProps',
    },
    keyPairs: {
      '1st': {
        type: 'CfnKeyPairProps',
        constructProps: {
          keyName: 'MyAnsibleCollectionsTestKey20231018',
        },
      },
    },
    securityGroups: {
      '1st': {
        type: 'SecurityGroupProps',
      },
    },
    instances: {
      '1st': {
        constructProps: {
          instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
          machineImage: ec2.MachineImage.genericLinux({
            'us-east-1': 'ami-053b0d53c279acc90',  // Ubuntu Server 22.04 LTS (HVM), SSD Volume Type
          }),
          vpcSubnets: {
            subnetType: ec2.SubnetType.PUBLIC,
          },
        },
        relation: {
          keyPair: '1st',
          securityGroup: '1st',
        },
      },
      '2nd': {
        constructProps: {
          instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
          machineImage: ec2.MachineImage.latestAmazonLinux2023(),
          vpcSubnets: {
            subnetType: ec2.SubnetType.PUBLIC,
          },
        },
        relation: {
          keyPair: '1st',
          securityGroup: '1st',
        },
      },
      '3rd': {
        constructProps: {
          instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
          machineImage: ec2.MachineImage.genericLinux({
            'us-east-1': 'ami-00a234010f32f6344',  // AlmaLinux OS 9 (x86_64)
          }),
          vpcSubnets: {
            subnetType: ec2.SubnetType.PUBLIC,
          },
        },
        relation: {
          keyPair: '1st',
          securityGroup: '1st',
        },
      },
      '4th': {
        constructProps: {
          instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
          machineImage: ec2.MachineImage.genericLinux({
            'us-east-1': 'ami-026ebd4cfe2c043b2',  // Red Hat Enterprise Linux 9.2
          }),
          vpcSubnets: {
            subnetType: ec2.SubnetType.PUBLIC,
          },
        },
        relation: {
          keyPair: '1st',
          securityGroup: '1st',
        },
      },
      '5th': {
        constructProps: {
          instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
          machineImage: ec2.MachineImage.genericLinux({
            'us-east-1': 'ami-0b324207d4bcaec61',  // Red Hat Enterprise Linux 8.7
          }),
          vpcSubnets: {
            subnetType: ec2.SubnetType.PUBLIC,
          },
        },
        relation: {
          keyPair: '1st',
          securityGroup: '1st',
        },
      },
      '6th': {
        constructProps: {
          instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
          machineImage: ec2.MachineImage.genericLinux({
            'us-east-1': 'ami-002070d43b0a4f171',  // CentOS 7.2009
          }),
          vpcSubnets: {
            subnetType: ec2.SubnetType.PUBLIC,
          },
        },
        relation: {
          keyPair: '1st',
          securityGroup: '1st',
        },
      },
    },
    elasticIps: {
      '1st': {
        type: 'CfnEIPProps',
        relation: {
          instance: '1st',
        },
      },
      '2nd': {
        type: 'CfnEIPProps',
        relation: {
          instance: '2nd',
        },
      },
      '3rd': {
        type: 'CfnEIPProps',
        relation: {
          instance: '3rd',
        },
      },
      '4th': {
        type: 'CfnEIPProps',
        relation: {
          instance: '4th',
        },
      },
      '5th': {
        type: 'CfnEIPProps',
        relation: {
          instance: '5th',
        },
      },
      '6th': {
        type: 'CfnEIPProps',
        relation: {
          instance: '6th',
        },
      },
    },
  },
});

stack.instances.addIngressRulesToSecurityGroups([
  {
    peer: ec2.Peer.anyIpv4(),
    connection: ec2.Port.tcp(22),
  },
]);

stack.instances.addOutPutCommandGetKeyPair('1st');
