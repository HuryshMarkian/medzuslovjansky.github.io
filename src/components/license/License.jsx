import React from 'react';
import Link from "@docusaurus/Link";
import Translate, {translate} from '@docusaurus/Translate';
import Admonition from '@theme/Admonition';
import {usePluginData} from "@docusaurus/useGlobalData";

function useFrontMatter() {
  const { frontMatter } = usePluginData('docusaurus-plugin-content-docs');
  const { license, origin, author } = frontMatter;
  return { license, origin, author };
}

export function RepublishLicense({ origin, author }) {
  return (
    <Admonition type="info" title={translate({ id: 'com.admonitions.license.title', message: 'Legal information' })}>
      <Translate
        id="com.admonitions.license.republish"
        message="This content has been republished with the author's permission."
        values={{
          link: <Link to={origin}>{translate({
            id: 'com.admonitions.license.republishLinkText',
            message: 'republished'
          })}</Link>,
          author: <b>{author}</b>,
        }} />
    </Admonition>
  );
}

export default function License() {
  const { license, origin, author } = useFrontMatter();

  switch (license) {
    case 'republish':
      return <RepublishLicense origin={origin} author={author} />;
    default:
      return null;
  }
}
