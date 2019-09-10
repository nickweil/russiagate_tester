/* global instantsearch algoliasearch */

const search = instantsearch({
  indexName: 'texts',
  searchClient: algoliasearch('DTH6V8NWJ2', 'fd1f8a02a87cf784faf55a8a686700e7'),
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  })
);

search.addWidget(
  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements',
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#brand-list',
    attribute: 'brand',
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <div>
          <img src="{{senderimgurl}}" align="left" alt="{{sender}}" />
          <div class="hit-name">
            {{date}} {{weekday}}
          </div>
        </div>
      `,
    },
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
  })
);

search.start();