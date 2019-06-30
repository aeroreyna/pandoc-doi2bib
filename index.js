#!/usr/bin/env node

var pandoc = require('pandoc-filter-promisified');
const doi2bib = require('doi2bib');
var Str = pandoc.Str;
var libraryOpen = false;

async function action(elt,format,meta) {
    if (elt.t === 'Cite'){
      if(!libraryOpen) doi2bib.setLibraryFile(meta['bibliography'].c[0].c)
      p = [];
      elt.c[0].forEach((c)=>{
        if(c.citationId && c.citationId.indexOf('DOI:') != -1){
          p.push(doi2bib.getCitation(c.citationId.substring(4)));
        }
      })
      await Promise.all(p)
    }
}

pandoc.stdio(action);
