// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// posts
import post from './documents/post'
import pressPost from './documents/pressPost'
import interviews from './documents/interviews'
import questions from './documents/questions'
import reviews from './documents/reviews'
import ask from './documents/ask-riad-eid'
import page from './documents/page'
import siteSettings from './documents/siteSettings'
import route from './documents/route'

import simpleBlockContent from './objects/simpleBlockContent'

import * as plugs from './plugs'
import plugDefaultFields from './plugs/_plugDefaultFields'

// Object types
import { instagram, videoEmbed } from './objects/embeds'
import cta from './objects/cta'
import bodyPortableText from './objects/bodyPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import link from './objects/link'
import openGraph from './objects/openGraph'
import latex from './latex'

const allPlugs = Object.values(plugs).map((plug) => {
  return { ...plug, fields: plugDefaultFields.concat(plug.fields) }
})

export default createSchema({
  name: 'blog',
  types: schemaTypes // Built-in types
    // Our custom types
    .concat([
      ask,
      reviews,
      questions,
      interviews,
      pressPost,
      latex,
      openGraph,
      route,
      link,
      simpleBlockContent,
      cta,
      siteSettings,
      post,
      page,
      mainImage,
      instagram,
      videoEmbed,
      bodyPortableText,
      excerptPortableText,
    ])
    .concat(allPlugs),
})
