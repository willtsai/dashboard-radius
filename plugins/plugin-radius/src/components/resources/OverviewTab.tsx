import React from 'react';
import { Resource, parseResourceId } from '../../resources';
import { InfoCard, StructuredMetadataTable } from '@backstage/core-components';
import { ResourceLink } from '../resourcelink/ResourceLink';

export const OverviewTab = (props: { resource: Resource }) => {
  const metadata: { [key: string]: unknown } = {
    name: props.resource.name,
    type: props.resource.type,
    group: parseResourceId(props.resource.id)?.group,
  };

  if (props.resource.properties?.application as string) {
    metadata.application = (
      <ResourceLink id={props.resource.properties?.application as string} />
    );
  }
  if (props.resource.properties?.environment as string) {
    metadata.environment = (
      <ResourceLink id={props.resource.properties?.environment as string} />
    );
  }

  return (
    <InfoCard title="Resource Overview">
      <StructuredMetadataTable metadata={metadata} />
    </InfoCard>
  );
};